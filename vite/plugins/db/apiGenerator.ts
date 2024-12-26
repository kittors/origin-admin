import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import type { Database } from 'better-sqlite3';
import logger from '../../../src/utils/logger';
import type {
	ExistingApi,
	ExistingModule,
	Parameter,
	RequestBody,
	Response,
	SchemaProperty,
} from './types';
import { typeMapping } from './types';
export class ApiGenerator {
	private db: Database;
	constructor(db: Database) {
		this.db = db;
	}
	// 替换<p>标签为*
	private replaceParaTags(text: string): string {
		return text
			.replace(/\n/g, '') // 移除所有换行符
			.replace(/<p>/g, '')
			.replace(/<\/p>/g, '') // 替换 <p> 标签为 *
			.replace(/<[^>]*>/g, ''); // 移除所有其他 HTML 标签
	}

	// 创建文件
	private async createFile(filePath: string, content: string): Promise<void> {
		try {
			await fs.mkdir(resolve(process.cwd(), 'src/api/modules'), { recursive: true });
			await fs.writeFile(resolve(filePath), content, 'utf-8');
		} catch (error) {
			logger.error('文件创建失败:', error);
			throw error;
		}
	}
	private filterType(type: string): string {
		if (
			type.includes('{') ||
			type.includes('}') ||
			type.includes('any') ||
			type.includes('number') ||
			type.includes('string') ||
			type.includes('boolean') ||
			type.includes('object') ||
			type.includes('Promise') ||
			type.includes('Date') ||
			type.includes('null') ||
			type.includes('undefined') ||
			type.includes('File') ||
			type.includes('Blob') ||
			type.includes('FormData')
		)
			return '';
		if (type.includes('Array')) {
			return type.replace('Array<', '').replace('>', '');
		}
		return type;
	}

	private async generateType(schema: SchemaProperty): Promise<string> {
		if (schema.type === 'array') {
			return `Array<${schema.items ? await this.generateType(schema.items) : 'any'}>`;
		}
		if (schema.type && !schema.format) {
			return schema.type;
		}
		if (schema.type && schema.format) {
			return typeMapping[`${schema.type}:${schema.format}`];
		}
		if (schema.$ref) {
			return schema.$ref.split('/').pop() || 'any';
		}
		return 'any';
	}
	// 生成参数
	private async generateParamsContent(api: ExistingApi) {
		try {
			const paramsType = await this.generateParamsType(api);
			const requestBody = await this.generateRequestBody(api);
			if (paramsType) {
				let content = ' params: {';
				const types = new Set<string>();
				for (let i = 0; i < paramsType.length; i++) {
					const param = paramsType[i];
					const type = await this.generateType(param.schema);
					content += ` ${param.name}: ${type}`;
					if (i < paramsType.length - 1) {
						content += ',';
					}
					if (type) {
						types.add(this.filterType(type));
					}
				}
				content += ' } ';
				return { content, types: Array.from(types).filter(Boolean) };
			}
			if (requestBody) {
				return { content: '', types: [] };
			}
			return { content: '', types: [] };
		} catch (error) {
			logger.error('Generate params error:', error);
			return { content: '', types: [] };
		}
	}

	// 生成参数类型
	private async generateParamsType(api: ExistingApi) {
		try {
			// 添加空值检查
			if (!api.parameters || api.parameters === '') {
				return null; // 或返回适当的默认值
			}
			// 添加安全的 JSON 解析
			let params: Parameter[];
			try {
				params = JSON.parse(api.parameters);
			} catch (error) {
				logger.error('JSON parse error:', {
					error,
					rawData: api.parameters,
				});
				return null; // 解析失败时返回空字符串
			}

			// 后续处理...
			return params;
		} catch (error) {
			logger.error('Generate params type error:', error);
			return null; // 出错时返回空字符串而不是抛出错误
		}
	}

	// 生成请求体类型
	private async generateRequestBody(api: ExistingApi) {
		try {
			// 添加空值检查
			if (!api.requestBody || api.requestBody === '') {
				return null;
			}
			// 安全的 JSON 解析
			let requestBody: RequestBody;
			try {
				requestBody = JSON.parse(api.requestBody);
			} catch (error) {
				logger.error('RequestBody JSON parse error:', {
					error,
					rawData: api.requestBody,
				});
				return null;
			}

			return requestBody;
		} catch (error) {
			logger.error('Generate request body error:', error);
			return null;
		}
	}

	// 生成响应数据
	private async generateResponseType(
		api: ExistingApi,
	): Promise<{ type: string; content: string }> {
		try {
			const response = JSON.parse(api.responses) as Response;
			const response200 = response['200'];

			if (!response200) {
				return { type: 'any', content: '' };
			}
			if (!response200.content) {
				return { type: '{code:number, msg:string}', content: '' };
			}

			// 获取 content 中的第一个可用的 content type
			const contentType = Object.keys(response200.content)[0];
			if (!contentType) {
				return { type: 'any', content: '' };
			}

			const schema = response200.content[contentType].schema;
			if (!schema) {
				return { type: 'any', content: '' };
			}
			return {
				type: await this.generateType(schema),
				content: this.filterType(await this.generateType(schema)),
			};
		} catch (error) {
			logger.error('解析响应类型失败:', error);
			return { type: 'any', content: '' };
		}
	}

	// 生成http方法
	private async generateHttpMethod(api: ExistingApi): Promise<{ type: string; content: string }> {
		const { type, content } = await this.generateResponseType(api);
		return { content: `http.${api.method}<${type}>`, type: content };
	}

	private async generateApiContent(
		api: ExistingApi,
	): Promise<{ output: string; type: string; types: string[] }> {
		let output = '';

		output += `/**\n * @description ${this.replaceParaTags(api.description)}\n * @createTime ${api.created_at}\n * @updateTime ${api.updated_at}\n **/\n`;
		const { content, type } = await this.generateHttpMethod(api);
		const { content: paramsContent, types } = await this.generateParamsContent(api);
		output += `export const ${api.operationId}Api = (${paramsContent}) => {\n`;
		output += `  return ${content}('${api.path}'${paramsContent === '' ? '' : ', params'})\n`;
		output += '}\n\n';

		return { output, type, types };
	}

	private generateImports(types: string[]): string {
		if (types.length === 0) return '';

		// 去重并排序类型名称
		const uniqueTypes = [...new Set(types)].sort();

		return `import type { ${uniqueTypes.join(', ')} } from './type/api-types';\n\n`;
	}

	// 生成API文件
	public async generateApiFile(): Promise<void> {
		try {
			const allModule = this.db
				.prepare('SELECT * FROM api_modules')
				.all() as ExistingModule[];
			const allApi = this.db.prepare('SELECT * FROM api_doc_content').all() as ExistingApi[];
			let addNum = 0;

			for (const module of allModule) {
				const typeObj = new Set<string>();
				const contentObj: Record<string, string> = {};

				for (const api of allApi) {
					if (api.modules_id === module.id) {
						addNum++;
						const {
							output,
							type,
							types: paramsTypes,
						} = await this.generateApiContent(api);

						if (type) {
							typeObj.add(type);
							for (const t of paramsTypes) {
								typeObj.add(t);
							}
						}
						contentObj[api.operationId] = output;
					}
				}

				// 开头注释
				const startComment = '/**\n * 自动生成的API文件，请勿手动修改\n **/\n\n';

				const types = Array.from(typeObj).filter(Boolean);

				const httpImport = 'import http from "@/api";\n';
				// 生成导入语句
				const typeImports = this.generateImports(types);
				// 合并所有内容，导入语句放在最前面
				const content =
					startComment + httpImport + typeImports + Object.values(contentObj).join('\n');

				const filePath = resolve(process.cwd(), 'src/api/modules', `${module.name}.ts`);
				if (content) {
					await this.createFile(filePath, content);
				}
			}

			logger.info('添加了的接口数', addNum);
		} catch (error) {
			logger.error('生成API文件失败:', error);
			throw error;
		}
	}
}
