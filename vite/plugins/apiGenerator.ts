import { initDB } from './db';
import logger from '../../src/utils/logger';
import { TypeSchemaProcessor } from './db/typeSchemaProcessor';
import { TypeGenerator } from './db/typeGenerator';

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

        logger.info('开始读取 API 文档:', VITE_OPENAPI_URL);
        const response = await fetch(VITE_OPENAPI_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch API docs: ${response.statusText}`);
        }

        const apiDoc = await response.json();
        // 处理API文档
        await processor.processApiDoc(apiDoc);
        logger.success('类型数据处理完成');

        // 生成类型定义文件
        await generator.generateTypeFile();

      } catch (error) {
        logger.error('API 生成失败:', error);
        if (error instanceof Error) {
          logger.error('Error details:', {
            message: error.message,
            stack: error.stack,
          });
        }
      }
    }
  };
}
