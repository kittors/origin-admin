import fs from 'node:fs';
import { resolve } from 'node:path';
import logger from '../../src/utils/logger';

interface SchemaProperty {
	type: string;
	description?: string;
	format?: string;
	items?: SchemaProperty;
	properties?: Record<string, SchemaProperty>;
	$ref?: string;
}

interface Schema {
	description?: string;
	type: string;
	properties: Record<string, SchemaProperty>;
	required?: string[];
}

interface PathItem {
	path: string;
	method: string;
	summary?: string;
	description?: string;
	tags?: string[];
	operationId?: string;
	parameters?: Array<{
		name: string;
		in: string;
		required?: boolean;
		schema: SchemaProperty;
	}>;
	requestBody?: {
		content: {
			'application/json': {
				schema: SchemaProperty;
			};
		};
	};
	responses?: {
		'200'?: {
			content?: {
				'application/json'?: {
					schema?: {
						$ref?: string;
						type?: string;
						items?: { $ref?: string };
					};
				};
				'*/*'?: {
					schema?: {
						$ref?: string;
						type?: string;
						items?: { $ref?: string };
					};
				};
			};
		};
	};
}

const baseOutputPath = resolve(process.cwd(), 'src/api/modules');
const typeOutputPath = resolve(process.cwd(), 'src/api/modules/types');

function generateTypeDefinition(schema: Schema, name: string): string {
	let content = `/**\n * ${schema.description || ''}\n */\n`;
	content += `export interface ${name} {\n`;

	for (const [propName, prop] of Object.entries<SchemaProperty>(schema.properties)) {
		const required = schema.required?.includes(propName);
		const description = prop.description ? ` // ${prop.description}` : '';
		let type: string;

		switch (prop.type) {
			case 'integer':
			case 'number':
				type = 'number';
				break;
			case 'string':
				type = 'string';
				break;
			case 'boolean':
				type = 'boolean';
				break;
			case 'array':
				type = prop.items ? `${generateArrayType(prop.items)}[]` : 'unknown[]';
				break;
			case 'object':
				type = 'Record<string, unknown>';
				break;
			default:
				type = 'unknown';
		}

		content += `\t${propName}${required ? '' : '?'}: ${type};${description}\n`;
	}

	content += '}\n\n';
	return content;
}

function generateArrayType(items: SchemaProperty): string {
	if (items.$ref) {
		return items.$ref.replace('#/components/schemas/', '');
	}
	switch (items.type) {
		case 'integer':
		case 'number':
			return 'number';
		case 'string':
			return 'string';
		case 'boolean':
			return 'boolean';
		default:
			return 'unknown';
	}
}

function generateApiName(path: string, operationId?: string): string {
	// 移除路径参数占位符 {param}
	const cleanPath = path.replace(/\{([^}]+)\}/g, '');

	// 移除开头的斜杠并分割路径
	const pathParts = cleanPath.replace(/^\//, '').split('/');

	// 将每部分首字母大写，但最终结果首字母小写
	const pathName = pathParts
		.map(part => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');

	// 如果有 operationId，直接使用，不再移除数字后缀
	const apiName = operationId ?
		`${pathName}${operationId.charAt(0).toUpperCase() + operationId.slice(1)}` :
		pathName;

	// 确保首字母小写
	return `${apiName.charAt(0).toLowerCase() + apiName.slice(1)}Api`;
}

function getParamType(schema: SchemaProperty): string {
	if (schema.$ref) {
		return schema.$ref.split('/').pop() || 'unknown';
	}

	if (schema.type === 'array' && schema.items) {
		const itemType = schema.items.type === 'integer' ? 'number' : schema.items.type;
		return `${itemType}[]`;
	}

	return schema.type === 'integer' ? 'number' : schema.type;
}

function generateApiFiles(paths: Record<string, Record<string, PathItem>>): void {
	// 按 tag 分组
	const apisByTag = new Map<string, PathItem[]>();

	for (const [path, methods] of Object.entries(paths)) {
		for (const [method, operation] of Object.entries(methods)) {
			const tag = operation.tags?.[0] || 'common';
			if (!apisByTag.has(tag)) {
				apisByTag.set(tag, []);
			}
			apisByTag.get(tag)?.push({
				...operation,
				path: path || '',  // 提供默认值
				method: method || ''
			});
		}
	}

	// 记录生成的模块数量
	let generatedCount = 0;

	// 为每个 tag 生成单独的文件
	for (const [tag, operations] of apisByTag) {
		let content = `import http from '@/api';\n`;
		content += `import type { Result, ResultData, ResPage } from '@/api/interface';\n`;
		content += `import type { ${collectTypesForTag(operations)} } from './types/api-types';\n\n`;

		content += `/**\n * @name ${tag}模块\n */\n`;

		for (const operation of operations) {
			// 分离路径参数和查询参数
			let pathParams: Array<{ name: string; type: string }> = [];
			let queryParams: Array<{ name: string; type: string; required: boolean }> = [];

			if (operation.parameters?.length) {
				for (const param of operation.parameters) {
					const paramType = getParamType(param.schema);
					if (param.in === 'path') {
						pathParams.push({ name: param.name, type: paramType });
					} else if (param.in === 'query') {
						queryParams.push({
							name: param.name,
							type: paramType,
							required: param.required || false
						});
					}
				}
			}

			// 生成参数类型和判断是否有参数
			let paramsType = '';
			let hasParams = false;

			// 处理 requestBody
			if (operation.requestBody?.content) {
				const contentTypes = Object.keys(operation.requestBody.content);
				for (const contentType of contentTypes) {
					hasParams = true;
					const schema = operation.requestBody.content[contentType].schema;

					if (contentType === 'multipart/form-data') {
						paramsType = 'FormData';
						break;  // 找到 multipart/form-data 后直接跳出
					} else if (contentType === 'application/json' && schema.$ref) {
						paramsType = schema.$ref.split('/').pop() || 'unknown';
					} else {
						paramsType = 'Record<string, unknown>';
					}
				}
			}
			// 处理 URL 参数
			else if (operation.parameters?.length) {
				hasParams = true;
				const params = [
					...pathParams.map(p => `${p.name}: ${p.type}`),
					...queryParams.map(p => `${p.name}${p.required ? '' : '?'}: ${p.type}`)
				];
				paramsType = `{\n\t\t${params.join(';\n\t\t')}\n\t}`;
			}

			// 处理路径参数替换
			const urlPath = operation.path.replace(/\{([^}]+)\}/g, '${params.$1}');

			// 修改响应类型处理
			const responseType = getResponseType(operation);
			const wrappedResponseType = responseType === 'unknown' ?
				'unknown' :
				`ResultData<${responseType}>`;

			// 修改请求配置生成
			const method = operation.method.toLowerCase();
			let requestConfig = '';

			if (hasParams) {
				const isMultipart = operation.requestBody?.content?.['multipart/form-data'];
				switch (method) {
					case 'get':
						requestConfig = ', { params }';
						break;
					case 'post':
					case 'put':
						if (isMultipart) {
							requestConfig = ', params, { headers: { "Content-Type": "multipart/form-data" } }';
						} else {
							requestConfig = ', params';
						}
						break;
					case 'delete':
						requestConfig = ', { params }';
						break;
					default:
						requestConfig = ', params';
				}
			}

			content += `
			/**
			 * ${operation.summary || ''}
			 * @description ${operation.description || ''}
			 */
			export const ${generateApiName(operation.path, operation.operationId)} = (${hasParams ? `params: ${paramsType}` : ''}) => {
				return http.${method}<${wrappedResponseType}>(
					\`${urlPath}\`${requestConfig}
				);
			};\n`;
		}

		// 生成文件
		const fileName = tag.toLowerCase().replace(/\s+/g, '-');
		fs.writeFileSync(resolve(baseOutputPath, `${fileName}.ts`), content);
		generatedCount++;
	}

	// 所有文件生成完成后，只打印一次成功消息
	if (generatedCount > 0) {
		logger.success(`成功生成 ${generatedCount} 个模块的接口文件！`);
	}
}

function collectTypesForTag(operations: PathItem[]): string {
	const types = new Set<string>();

	for (const operation of operations) {
		// 收集响应类型
		const content = operation.responses?.['200']?.content;
		const responseSchema = content?.['application/json']?.schema || content?.['*/*']?.schema;

		if (responseSchema?.$ref) {
			types.add(responseSchema.$ref.split('/').pop() || '');
		}
		if (responseSchema?.type === 'array' && responseSchema.items?.$ref) {
			types.add(responseSchema.items.$ref.split('/').pop() || '');
		}

		// 收集请求体类型
		if (operation.requestBody?.content?.['application/json']?.schema) {
			const requestSchema = operation.requestBody.content['application/json'].schema;
			if (requestSchema.$ref) {
				types.add(requestSchema.$ref.split('/').pop() || '');
			}
		}

		// 收集参数类型
		if (operation.parameters) {
			for (const param of operation.parameters) {
				if (param.schema.$ref) {
					types.add(param.schema.$ref.split('/').pop() || '');
				}
				// 如果参数是数组类型，也需要收集数组项的类型
				if (param.schema.type === 'array' && param.schema.items?.$ref) {
					types.add(param.schema.items.$ref.split('/').pop() || '');
				}
			}
		}
	}


	return Array.from(types).join(', ');
}

function getResponseType(operation: PathItem): string {
	const content = operation.responses?.['200']?.content;
	const schema = content?.['application/json']?.schema || content?.['*/*']?.schema;

	if (!schema) return 'unknown';

	if (schema.$ref) {
		return schema.$ref.split('/').pop() || 'unknown';
	}

	if (schema.type === 'array' && schema.items?.$ref) {
		return `${schema.items.$ref.split('/').pop()}[]`;
	}

	return 'unknown';
}

export default function apiGeneratorPlugin(viteEnv: ViteEnv) {
	const { VITE_OPENAPI_URL } = viteEnv;


	return {
		name: 'api-generator',
		async buildStart() {
			try {
				logger.info('开始读取 API 文档:', VITE_OPENAPI_URL);

				// 获取 API 文档
				const response = await fetch(VITE_OPENAPI_URL);
				if (!response.ok) {
					throw new Error(`Failed to fetch API docs: ${response.statusText}`);
				}

				const apiDoc = await response.json();

				// 检查并输出 schemas
				if (apiDoc.components?.schemas) {
					logger.info('找到以下数据类型定义:');
					const schemas = apiDoc.components.schemas;

					// 输出所有可用的 schema 名称
					const schemaNames = Object.keys(schemas);
					for (const schemaName of schemaNames) {
						logger.info(`- ${schemaName}`);
					}

					let typeContent = '// 自动生成的类型定义\n\n';

					for (const [schemaName, schema] of Object.entries<Schema>(schemas)) {
						typeContent += generateTypeDefinition(schema, schemaName);
					}

					// 确保输出目录存在
					fs.mkdirSync(typeOutputPath, { recursive: true });
					fs.writeFileSync(resolve(typeOutputPath, 'api-types.ts'), typeContent);
					logger.success('类型定义生成成功！');
				} else {
					logger.warning('未找到任何 schemas 定义');
				}

				if (apiDoc.paths) {
					logger.info('开始生成接口文档...');
					generateApiFiles(apiDoc.paths);
				} else {
					logger.warning('未找到任何接口定义');
				}
			} catch (error) {
				logger.error('处理 API 文档失败：', error);
				if (error instanceof Error) {
					logger.error('Error details:', {
						message: error.message,
						stack: error.stack,
					});
				}
			}
		},
	};
}

