import logger from '../../src/utils/logger';
import { initDB } from './db';
import { ApiGenerator } from './db/apiGenerator';
import { ApiProcessor } from './db/apiProcessor';
import { TypeGenerator } from './db/typeGenerator';
import { TypeSchemaProcessor } from './db/typeSchemaProcessor';
import type { ApiDoc } from './db/types';

export default function apiGeneratorPlugin(viteEnv: ViteEnv) {
	const { VITE_OPENAPI_URL } = viteEnv;

	return {
		name: 'api-generator',
		async buildStart() {
			try {
				// 初始化数据库
				const db = initDB();
				const processor = new TypeSchemaProcessor(db);
				const generator = new TypeGenerator(db);
				const apiProcessor = new ApiProcessor(db);
				const apiGenerator = new ApiGenerator(db);

				logger.info('开始读取 API 文档:', VITE_OPENAPI_URL);
				const response = await fetch(VITE_OPENAPI_URL);
				if (!response.ok) {
					throw new Error(`Failed to fetch API docs: ${response.statusText}`);
				}

				const apiDoc = (await response.json()) as ApiDoc;
				// 处理API文档
				await processor.processApiDoc(apiDoc);
				await apiProcessor.processApiDoc(apiDoc);
				// 生成类型定义文件
				await generator.generateTypeFile();
				await apiGenerator.generateApiFile();
			} catch (error) {
				logger.error('API 生成失败:', '连接openapi文档链接失败');
				// if (error instanceof Error) {
				// 	logger.error('Error details:', {
				// 		message: error.message,
				// 		stack: error.stack,
				// 	});
				// }
			}
		},
	};
}
