import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import type { Database } from 'better-sqlite3';
import logger from '../../../src/utils/logger';
import { type ExistingProperty, type ExistingType, typeMapping } from './types';

export class TypeGenerator {
	private db: Database;

	constructor(db: Database) {
		this.db = db;
	}

	private replaceParaTags(text: string): string {
		return text
			.replace(/\n/g, '') // 移除所有换行符
			.replace(/<p>/g, '')
			.replace(/<\/p>/g, '') // 替换 <p> 标签为 *
			.replace(/<[^>]*>/g, ''); // 移除所有其他 HTML 标签
	}

	private async generateTypeDefinitions(): Promise<string> {
		try {
			// 获取所有类型及其属性
			const types = this.db
				.prepare(`
        SELECT * FROM types
      `)
				.all() as ExistingType[];

			let output = '// 自动生成的类型定义文件，请勿手动修改\n\n';

			for (const type of types) {
				// logger.debug(type);
				output += `/**\n * @description ${this.replaceParaTags(type.description)}\n * @createTime ${type.created_at}\n * @updateTime ${type.updated_at}\n**/\n`;

				output += `export interface ${type.name} {\n`;
				const properties = this.db
					.prepare(`
				  SELECT * FROM type_properties WHERE type_id = ?
				`)
					.all(type.id) as ExistingProperty[];
				// if (type.name === 'RouterVo') {
				// 	logger.debug('properties', properties);
				// }
				for (const prop of properties) {
					if (prop.description) {
						output += `  /** ${this.replaceParaTags(prop.description)} */\n`;
					}
					output += this.generatePropertyDefinition(prop);
				}

				output += '}\n\n';
			}

			return output;
		} catch (error) {
			logger.error('生成类型定义失败:', error);
			throw error;
		}
	}

	private generateArrayTypeDefinition(prop: ExistingProperty): string {
		if (prop.items) {
			const itemType =
				typeMapping[JSON.parse(prop.items).type] ||
				JSON.parse(prop.items).$ref.split('/').pop() ||
				'any';
			return `Array<${itemType}>`;
		}
		return 'Array<any>';
	}

	private generateObjectDefinition(prop: ExistingProperty) {
		if (prop.additionalProperties) {
			const objectType =
				typeMapping[JSON.parse(prop.additionalProperties).type] ||
				JSON.parse(prop.additionalProperties).$ref.split('/').pop() ||
				'any';
			return `Record<string, ${objectType}>`;
		}
		return 'Record<string, any>';
	}

	private generatePropertyDefinition(prop: ExistingProperty) {
		if (prop.type === 'array') {
			return `  ${prop.name}${prop.is_required ? ':' : '?:'} ${this.generateArrayTypeDefinition(prop)}; \n`;
		}

		if (prop.type === 'object') {
			return `  ${prop.name}${prop.is_required ? ':' : '?:'} ${this.generateObjectDefinition(prop)};\n`;
		}

		const typeValue = typeMapping[`${prop.type}:${prop.format}`];

		if (!typeValue) {
			return `  ${prop.name}${prop.is_required ? ':' : '?:'} ${prop.type};\n`;
		}
		return `  ${prop.name}${prop.is_required ? ':' : '?:'} ${typeValue};\n`;
	}

	public async generateTypeFile(): Promise<void> {
		try {
			const typeDefinitions = await this.generateTypeDefinitions();

			// 确保目录存在
			const typeFilePath = resolve(process.cwd(), 'src/api/modules/type');
			await fs.mkdir(typeFilePath, { recursive: true });

			// 写入文件
			await fs.writeFile(resolve(typeFilePath, 'api-types.ts'), typeDefinitions, 'utf-8');

			logger.success('类型定义文件生成完成');
		} catch (error) {
			logger.error('生成类型文件失败:', error);
			throw error;
		}
	}
}
