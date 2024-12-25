import type { Database } from 'better-sqlite3';
import logger from '../../../src/utils/logger';
import type { ApiDoc, ExistingProperty, ExistingType, Schema, SchemaProperty } from './types';

const boolToInt = (name: string, required?: string[]): number => {
	const isRequired = required ? required.includes(name) : true;
	return isRequired ? 1 : 0;
};

export class TypeSchemaProcessor {
	private db: Database;
	private apiDoc: ApiDoc | null = null;
	private noUpdatedNum = 0;
	private insertNum = 0;
	private propertyInsertNum = 0;
	private noUpdatePropertyNum = 0;
	constructor(db: Database) {
		this.db = db;
	}

	// 处理类型数据
	private async insertType(
		name: string,
		schema: Schema,
		processedTypes: Set<string> = new Set(),
	): Promise<void> {
		try {
			// 检查是否已处理过该类型
			if (processedTypes.has(name)) {
				logger.info(`类型 ${name} 已处理过，跳过`);
				return;
			}

			// 添加到已处理类型集合
			processedTypes.add(name);
			if ('$ref' in schema) {
				logger.info(`类型 ${name} 包含 $ref`, schema);
			}
			// 构成标准数据
			const standardData = {
				name,
				description: schema.description ?? '',
				type: schema.type ?? '',
				properties: schema.properties ? JSON.stringify(schema.properties) : '',
				additionalProperties: schema.additionalProperties
					? JSON.stringify(schema.additionalProperties)
					: '',
				required: schema.required ? JSON.stringify(schema.required) : '',
			};

			const transaction = this.db.transaction(() => {
				// 查询是否存在
				const existingType = this.db
					.prepare('SELECT * FROM types WHERE name = ?')
					.get(name) as ExistingType;

				if (existingType) {
					// 获取现有的类型的所有数据
					const { description, type, properties, additionalProperties, required } =
						existingType;
					const hasChanges =
						standardData.name === existingType.name &&
						description === standardData.description &&
						type === standardData.type &&
						properties === standardData.properties &&
						additionalProperties === standardData.additionalProperties &&
						required === standardData.required;

					if (hasChanges) {
						this.noUpdatedNum++;
						return;
					}

					// 更新类型
					this.db
						.prepare(`UPDATE types SET
               description = ?,
               type = ?,
               properties = ?,
               additionalProperties = ?,
               required = ?,
               updated_at = CURRENT_TIMESTAMP
               WHERE id = ?`)
						.run(
							standardData.description,
							standardData.type,
							standardData.properties,
							standardData.additionalProperties,
							standardData.required,
							existingType.id,
						);
					logger.info(`类型 ${name} 已更新`, existingType);
					this.insertProperty(existingType.id, schema.properties, schema.required);
				} else {
					// 添加 INSERT 语句
					const result = this.db
						.prepare(`INSERT INTO types (
							name, description, type, properties,
							additionalProperties, required
						) VALUES (?, ?, ?, ?, ?, ?)`)
						.run(
							name,
							standardData.description,
							standardData.type,
							standardData.properties,
							standardData.additionalProperties,
							standardData.required,
						);
					this.insertNum++;
					// logger.info(`类型 ${name} 已插入`);
					// 使用新插入记录的 ID
					this.insertProperty(
						Number(result.lastInsertRowid),
						schema.properties,
						schema.required,
					);
				}
			});

			// 执行事务
			transaction();
		} catch (error) {
			logger.error(`类型 ${name} 处理失败:`, error);
			throw error;
		}
	}

	//处理属性数据
	private async insertProperty(
		id: number,
		properties?: Record<string, SchemaProperty>,
		required?: string[],
	) {
		// logger.info('properties', properties);
		// 如果没有属性就不需要在执行插入了
		if (!properties) return;

		for (const [name, property] of Object.entries(properties)) {
			if (property.$ref) {
				property.type = property.$ref.split('/').pop() ?? '';
			}
			const existingProperty = this.db
				.prepare('SELECT * FROM type_properties WHERE type_id = ? AND name = ?')
				.get(id, name) as ExistingProperty;

			if (existingProperty) {
				const hasChanges =
					existingProperty.type === (property.type ?? '') &&
					existingProperty.additionalProperties ===
						(property.additionalProperties
							? JSON.stringify(property.additionalProperties)
							: '') &&
					existingProperty.items ===
						(property.items ? JSON.stringify(property.items) : '') &&
					existingProperty.description === (property.description ?? '') &&
					existingProperty.format === (property.format ?? '') &&
					(required ? boolToInt(name, required) : 1) === existingProperty.is_required;
				if (hasChanges) {
					this.db
						.prepare(
							'UPDATE type_properties SET type = ?, additionalProperties = ?, items = ?, description = ?, format = ?, is_required = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
						)
						.run(
							property.type ?? '',
							property.additionalProperties
								? JSON.stringify(property.additionalProperties)
								: '',
							property.items ? JSON.stringify(property.items) : '',
							property.description ?? '',
							property.format ?? '',
							required ? boolToInt(name, required) : 1,
							existingProperty.id,
						);

					return;
				}
			} else {
				this.db
					.prepare(
						'INSERT INTO type_properties (type_id, name, type, additionalProperties,items, description, format, is_required) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
					)
					.run(
						id, // type_id
						name, // name
						property.type ?? '', // type
						property.additionalProperties
							? JSON.stringify(property.additionalProperties)
							: '', // additionalProperties
						property.items ? JSON.stringify(property.items) : '', // items
						property.description ?? '', // description
						property.format ?? '', // format
						required ? boolToInt(name, required) : 1, // is_required
					);
				this.noUpdatePropertyNum++;
				this.propertyInsertNum++;
			}
		}
	}

	private async deleteOldType(): Promise<void> {
		if (!this.apiDoc) {
			logger.warning('API文档为空，跳过删除旧类型');
			return;
		}

		// 获取数据库中所有现有的类型
		const existingTypes = this.db
			.prepare(`
      SELECT id, name FROM types
  `)
			.all() as { id: number; name: string }[];
		// 获取新文档中的所有类型名称
		const newTypeNames = new Set(Object.keys(this.apiDoc.components?.schemas || {}));
		// 找出需要删除的类型
		const typesToDelete = existingTypes.filter((type) => !newTypeNames.has(type.name));
		// 删除不再存在的类型及其关联的属性
		if (typesToDelete.length > 0) {
			const transaction = this.db.transaction(() => {
				for (const type of typesToDelete) {
					// 先删除类型的所有属性
					this.db
						.prepare(`
                        DELETE FROM type_properties WHERE type_id = ?
                    `)
						.run(type.id);

					// 再删除类型本身
					this.db
						.prepare(`
                        DELETE FROM types WHERE id = ?
                    `)
						.run(type.id);

					logger.info(`删除不再使用的类型: ${type.name}`);
				}
			});

			transaction();
		}
	}

	public async processApiDoc(apiDoc: ApiDoc): Promise<void> {
		try {
			this.apiDoc = apiDoc;
			this.noUpdatedNum = 0;
			this.propertyInsertNum = 0;
			this.insertNum = 0;
			this.noUpdatePropertyNum = 0;
			await this.deleteOldType();

			// 处理新的类型定义
			if (apiDoc.components?.schemas) {
				const schemasNum = Object.keys(apiDoc.components.schemas).length;
				logger.info(`文档中类型数据数量: ${schemasNum}`);

				for (const [name, schema] of Object.entries<Schema>(apiDoc.components.schemas)) {
					await this.insertType(name, schema);
				}
				logger.info(`无任何更新类型数量: ${this.noUpdatedNum}`);
				logger.info(`新增数量: ${this.insertNum}`);
				logger.info(`新增属性数量: ${this.propertyInsertNum}`);
				logger.info(`无更新属性数量: ${this.noUpdatePropertyNum}`);
				logger.success('所有类型数据处理完成');
			}
		} catch (error) {
			logger.error('数据插入失败:', error);
			throw error;
		}
	}
}
