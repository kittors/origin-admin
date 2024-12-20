import fs from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'dotenv';
import logger from '../src/utils/logger';

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
			[key: string]: {
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

interface OpenAPIDoc {
	components?: {
		schemas: Record<string, Schema>;
	};
	paths?: Record<string, Record<string, PathItem>>;
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

/**
 * 从API路径自动生成标签映射并保存到文件
 */
function generateTagNameMap(paths: Record<string, Record<string, PathItem>>): Record<string, string> {
	const tagPathMap = new Map<string, Set<string>>();

	// 遍历所有路径和方法
	for (const [path, methods] of Object.entries(paths)) {
		for (const [_, operation] of Object.entries(methods)) {
			if (operation.tags?.[0]) {
				const pathParts = path.split('/').filter(Boolean);
				if (pathParts.length >= 2) {
					const tag = operation.tags[0];
					const moduleName = pathParts[1];

					if (!tagPathMap.has(tag)) {
						tagPathMap.set(tag, new Set());
					}
					tagPathMap.get(tag)?.add(moduleName);
				}
			}
		}
	}

	// 生成映射
	const autoTagNameMap: Record<string, string> = {};
	for (const [tag, paths] of tagPathMap) {
		const moduleName = Array.from(paths)[0];
		autoTagNameMap[tag] = moduleName;
	}

	// 合并自动生成的映射和手动配置的映射
	const finalTagNameMap = {
		...autoTagNameMap,
		"文件上传 控制层": "file-upload",
		"common": "common"
	};

	// 确保配置目录存在
	const configPath = resolve(process.cwd(), 'src/api/modules/config');
	fs.mkdirSync(configPath, { recursive: true });

	// 生成 tag-map.ts 文件内容
	const fileContent = `/**
 * 自动生成的标签名称映射表
 * 用于将中文标签名转换为英文文件名
 * 该文件由 apiGenerator 动生成，请勿手动修改
 */
export const tagNameMap: Record<string, string> = ${JSON.stringify(finalTagNameMap, null, 2)};
`;

	// 写入文件
	fs.writeFileSync(resolve(configPath, 'tag-map.ts'), fileContent);
	logger.success('标签映射文件生成成功！');

	return finalTagNameMap;
}

function generateApiFiles(paths: Record<string, Record<string, PathItem>>): void {
	// 生成标签映射
	const tagNameMap = generateTagNameMap(paths);

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
			// 移除 ResultData 包装
			const wrappedResponseType = responseType;

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
		const fileName = tagNameMap[tag] || tag.toLowerCase().replace(/\s+/g, '-');
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
				// 如参数是数组类型，也需要收集数组项的类型
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

async function loadEnvConfig() {
	const envPath = resolve(process.cwd(), '.env');
	try {
		const envContent = fs.readFileSync(envPath, 'utf-8');
		const config = parse(envContent);
		return config;
	} catch (error) {
		logger.warning('无法读取 .env 文件，将使用命令行参数或环境变量');
		return {};
	}
}

async function main() {
	// 优先读取 .env 文件
	const envConfig = await loadEnvConfig();

	// 按优先级获取 API URL：命令行参数 > 环境变量 > .env 文件
	const VITE_OPENAPI_URL = process.argv[2] || process.env.VITE_OPENAPI_URL || envConfig.VITE_OPENAPI_URL;

	if (!VITE_OPENAPI_URL) {
		logger.error('请提供 OpenAPI URL!');
		logger.info('使用方法: tsx generateApi.ts <OPENAPI_URL>');
		logger.info('或者在 .env 文件中设置 VITE_OPENAPI_URL');
		logger.info('或者设置环境变量 VITE_OPENAPI_URL');
		process.exit(1);
	}

	try {
		logger.info('开始读取 API 文档:', VITE_OPENAPI_URL);

		// 获取 API 文档
		const response = await fetch(VITE_OPENAPI_URL);
		if (!response.ok) {
			throw new Error(`Failed to fetch API docs: ${response.statusText}`);
		}

		const apiDoc = await response.json() as OpenAPIDoc;

		// 检查并输出 schemas
		if (apiDoc.components?.schemas) {
			logger.info('找到以下数据类型定义:');
			const schemas = apiDoc.components.schemas;

			// 输出所有可用的 schema 名称
			// const schemaNames = Object.keys(schemas);
			// for (const schemaName of schemaNames) {
			// 	logger.info(`- ${schemaName}`);
			// }

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
}

// 使用 ES 模块方式检查是否直接运行
const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
	main();
}



