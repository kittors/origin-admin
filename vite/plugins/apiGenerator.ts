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
	additionalProperties?: SchemaProperty;
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

// 清理 HTML 标签的辅助函数
function cleanHtmlTags(text: string): string {
	return text.replace(/<\/?[^>]+(>|$)/g, '');
}

function generateTypeDefinition(schema: Schema, name: string): string {

  // 对接口描述的处理  去除html标签 并替换换行符为 //
	const schemaDescription = schema.description
		? cleanHtmlTags(schema.description).replace(/\n/g, '\n// ')
		: '';

  // 生成接口描述
	let content = `/**\n * ${schemaDescription}\n */\n`;
	content += `export interface ${name} {\n`;

	for (const [propName, prop] of Object.entries<SchemaProperty>(schema.properties)) {
		// 如果schema.required不存在，则所有属性都是必需的
		// 如果schema.required存在，则只有在required数组中的属性才是必需的
		const required = !schema.required || schema.required.includes(propName);
		let description = '';
		if (prop.description) {
			const cleanDesc = cleanHtmlTags(prop.description);
			// 检查原始描述是否包含<p>标签
			if (prop.description.includes('<p>')) {
				// 多行注释处理
				description = `\n\t/**\n\t * ${cleanDesc.split('\n').join('\n\t * ')}\n\t */`;
			} else {
				// 单行注释处理
				description = ` // ${cleanDesc.replace(/\n/g, ' ')}`;
			}
		}

		let type: string;

		if (prop.$ref) {
			// 直接处理 $ref
			type = prop.$ref.split('/').pop() || 'unknown';
		} else {
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
					if (prop.items?.type === 'object' && prop.items.additionalProperties) {
						const itemType = prop.items.additionalProperties.type || 'unknown';
						type = `Record<string, ${itemType}>[]`;
					} else {
						type = prop.items ? `${generateArrayType(prop.items)}[]` : 'unknown[]';
					}
					break;
				case 'object':
					if (prop.additionalProperties) {
						const valueType = prop.additionalProperties.type || 'unknown';
						type = `Record<string, ${valueType}>`;
					} else if (prop.$ref) {
						// 处理对象类型的 $ref
						type = prop.$ref.split('/').pop() || 'unknown';
					} else {
						type = 'Record<string, unknown>';
					}
					break;
				default:
					type = 'unknown';
			}
		}

		content += `${description}\n\t${propName}${required ? '' : '?'}: ${type};\n`;
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

	// 将部分首字母大写，最终结果首字母小写
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

	// 从路径获取模块名
	const getModuleNameFromPath = (path: string): string => {
		// 移除开头的斜杠并分割路径
		const parts = path.split('/').filter(Boolean);
		// 返回第一个路径段
		return parts[0] || 'common';
	};

	// 收集所有标签和路径的映射
	for (const [path, methods] of Object.entries(paths)) {
		for (const [_, operation] of Object.entries(methods)) {
			if (operation.tags?.[0]) {
				const tag = operation.tags[0];
				const moduleName = getModuleNameFromPath(path);

				if (!tagPathMap.has(tag)) {
					tagPathMap.set(tag, new Set());
				}
				tagPathMap.get(tag)?.add(moduleName);
			}
		}
	}

	// 生成最终射
	const finalTagNameMap: Record<string, string> = {};
	for (const [tag, moduleNames] of tagPathMap) {
		const moduleName = Array.from(moduleNames)[0];
		finalTagNameMap[tag] = moduleName;
	}

	// 确保配置目录存在
	const configPath = resolve(process.cwd(), 'src/api/modules/config');
	fs.mkdirSync(configPath, { recursive: true });

	// 生成 tag-map.ts 文件内容
	const fileContent = `/**
 * 自动生成的标签名称映射表
 * 用于将中文标签名转换为英文文件名
 * 该文件由 apiGenerator 自动生成，请勿手动修改
 */
export const tagNameMap: Record<string, string> = ${JSON.stringify(finalTagNameMap, null, 2)};
`;

	// 写入文件
	fs.writeFileSync(resolve(configPath, 'tag-map.ts'), fileContent);
	logger.success('标签映射文件生成成功！');

	return finalTagNameMap;
}

function generateApiFiles(paths: Record<string, Record<string, PathItem>>) {
	let generatedCount = 0;

	// 统计所有接口和标签
	const allTags = new Set<string>();
	const tagStats: Record<string, number> = {};
	let totalApiCount = 0;

	for (const [_, methods] of Object.entries(paths)) {
		for (const [_, operation] of Object.entries(methods)) {
			totalApiCount++;
			const tag = operation.tags?.[0] || 'common';
			tagStats[tag] = (tagStats[tag] || 0) + 1;
			if (tag) allTags.add(tag);
		}
	}

	// 生成标签映射
	const tagNameMap = generateTagNameMap(paths);

	// logger.info('所有的标签:', Array.from(allTags));
	// logger.info('成功映射的标签:', Object.keys(tagNameMap));
	// logger.info('未能映射的标签:', Array.from(allTags).filter(tag => !tagNameMap[tag]));
	// logger.info('每个标签的接口数量:', tagStats);
	// logger.info(`总接口数: ${totalApiCount}, 已映射接口数: ${Object.values(tagStats).reduce((a, b) => a + b, 0)}`);

	// 按 tag 分组时统计每个分组的接口数量
	const apisByTag = new Map<string, PathItem[]>();
	const otherApis: PathItem[] = [];


	for (const [path, methods] of Object.entries(paths)) {
		for (const [method, operation] of Object.entries(methods)) {
			const tag = operation.tags?.[0] || 'common';

			// 从路径获取模块名
			const moduleName = path.split('/').filter(Boolean)[0] || 'common';

			// 特殊处理首页接口
			if (tag === '首页' || operation.operationId === 'index') {
				if (!apisByTag.has('index')) {
					apisByTag.set('index', []);
				}
				apisByTag.get('index')?.push({
					...operation,
					path: path || '',
					method: method || ''
				});
				continue;
			}

			// 使用路径的第一段作为文件名
			if (!apisByTag.has(moduleName)) {
				apisByTag.set(moduleName, []);
			}
			apisByTag.get(moduleName)?.push({
				...operation,
				path: path || '',
				method: method || ''
			});
		}
	}

  // 生成 ResultData 类型
  const resultDataContent = `import { ResultData } from '@/api/interface';\n`;

	// 处理未分类的接口
	if (otherApis.length > 0) {
		let content = `import http from '@/api';\n`;
		content += `import { ResultData } from '@/api/interface';\n`;
		content += `import type { ${collectTypesForTag(otherApis)} } from './types/api-types';\n\n`;
		content += `/**\n * @name 其他未分类接口\n */\n`;

		for (const operation of otherApis) {
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
			let responseType: string;
			// 检查 responses.200 是否有 content 属性
			if (!operation.responses?.['200']?.content) {
				// 如果 200 响应中没有 content 属性，使用 ResultData<string>
				responseType = 'ResultData<string>';
			} else {
				responseType = getResponseType(operation);
			}

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

			// 添加一个清理注释的辅助函数
			function cleanComment(text: string | undefined): string {
				if (!text) return '';
				return text
					.replace(/\\n/g, ' ')
					.replace(/<p>/g, ' ')
					.replace(/<\/p>/g, '')
					.replace(/\s+/g, ' ')
					.trim();
			}

			// 添加一个获取当前时间的辅助函数
			function getCurrentTime(): string {
				return new Date().toISOString();
			}

			// 在生成接口时使用这个函数
			content += `
			/**
			 * ${cleanComment(operation.summary) || ''}
			 * @description ${cleanComment(operation.description) || ''}
			 * @date ${getCurrentTime()}
			 */
			export const ${generateApiName(operation.path, operation.operationId)} = (${hasParams ? `params: ${paramsType}` : ''}) => {
				return http.${method}<${responseType}>(
					\`${urlPath}\`${requestConfig}
				);
			};\n`;
		}

		fs.writeFileSync(resolve(baseOutputPath, 'other.ts'), content);
	}

	// 用于统计每个文件的接口数量
	const fileStats: Record<string, number> = {};
	let totalInterfaces = 0;

	// 添加一个函数来获取文件的现有接口
	const getExistingApis = (filePath: string): Map<string, string> => {
		const apis = new Map<string, string>();
		if (!fs.existsSync(filePath)) return apis;

		const content = fs.readFileSync(filePath, 'utf-8');
		const apiBlocks = content.split('export const');

		for (const block of apiBlocks) {
			const match = block.match(/(\w+Api)\s*=/);
			if (match) {
				apis.set(match[1], `export const ${block}`);
			}
		}
		return apis;
	};

	// 修改文件生成逻辑
	for (const [tag, operations] of apisByTag) {
		const fileName = `${tag}.ts`;
		const filePath = resolve(baseOutputPath, fileName);
		const existingApis = getExistingApis(filePath);
		let fileContent = `import http from '@/api';\n`;
		fileContent += `import { ResultData } from '@/api/interface';\n`;
		fileContent += `import type { ${collectTypesForTag(operations)} } from './types/api-types';\n\n`;

		for (const operation of operations) {
			const apiName = generateApiName(operation.path, operation.operationId);

			// 如果接口已存在且内容没变，保留原有内容
			if (existingApis.has(`${apiName}Api`)) {
				fileContent += existingApis.get(`${apiName}Api`);
				continue;
			}

			// 生成新接口
			// ... 生成新接口的代码 ...
		}

		fs.writeFileSync(filePath, fileContent);
	}

	// 打印统计信息
	logger.info('接口文件统计:');
	for (const [fileName, count] of Object.entries(fileStats)) {
		logger.info(`${fileName}.ts: ${count} 个接口`);
	}

	// 所有文件生成完成后的消息
	if (generatedCount > 0) {
		logger.success(`成功生成 ${generatedCount} 个模块，共 ${totalInterfaces} 个接口！`);
	}

	// 生成日志文件
	const logPath = resolve(baseOutputPath, 'log');
	fs.mkdirSync(logPath, { recursive: true });

	const logContent = `/**
 * API 生成器运行日志
 * 记录间: ${new Date().toISOString()}
 */

interface ApiGeneratorLog {
    totalApiCount: number;
    generatedModules: number;
    allTags: string[];
    mappedTags: string[];
    unmappedTags: string[];
    tagStats: Record<string, number>;
}

export const apiGeneratorLog: ApiGeneratorLog = {
    totalApiCount: ${totalApiCount},
    generatedModules: ${generatedCount},
    allTags: ${JSON.stringify(Array.from(allTags), null, 4)},
    mappedTags: ${JSON.stringify(Object.keys(tagNameMap), null, 4)},
    unmappedTags: ${JSON.stringify(Array.from(allTags).filter(tag => !tagNameMap[tag]), null, 4)},
    tagStats: ${JSON.stringify(tagStats, null, 4)}
};`;

	fs.writeFileSync(resolve(logPath, 'log.ts'), logContent);
}

function collectTypesForTag(operations: PathItem[]): string {
	const types = new Set<string>();

	for (const operation of operations) {
		// 收集响应类型
		const content = operation.responses?.['200']?.content;
		const responseSchema = content?.['application/json']?.schema || content?.['*/*']?.schema;

		if (responseSchema?.$ref) {
			types.add((responseSchema.$ref.split('/').pop() as string) || '');
		}
		if (responseSchema?.type === 'array' && responseSchema.items?.$ref) {
			types.add((responseSchema.items.$ref.split('/').pop() as string) || '');
		}

		// 收集请求类型
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
					types.add((param.schema.$ref.split('/').pop() as string) || '');
				}
				// 如参数是数组类型，也需要收集数组项的类型
				if (param.schema.type === 'array' && param.schema.items?.$ref) {
						types.add((param.schema.items.$ref.split('/').pop() as string) || '');
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

	// 处理基本类型
	if (schema.type === 'string') return 'string';
	if (schema.type === 'number' || schema.type === 'integer') return 'number';
	if (schema.type === 'boolean') return 'boolean';

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
					// logger.info('找到以下数据类型定���:');
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

					// 统计接口总数
					const totalPaths = Object.entries(apiDoc.paths as Record<string, Record<string, unknown>>).reduce((count, [_, methods]) => {
						return count + Object.keys(methods).length;
					}, 0);

					logger.info(`OpenAPI 文档中共有 ${totalPaths} 个接口定义`);

					// 修改 generateApiFiles 函数调用前的路径处理
					const processedPaths = Object.entries(apiDoc.paths).reduce((acc: Record<string, Record<string, PathItem>>, [path, methods]) => {
						acc[path] = Object.entries(methods as Record<string, unknown>).reduce((methodAcc: Record<string, PathItem>, [method, operation]) => {
							methodAcc[method] = {
								...operation as PathItem,
								path,
								method: method.toUpperCase()
							};
							return methodAcc;
						}, {});
						return acc;
					}, {});

					generateApiFiles(processedPaths);
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

