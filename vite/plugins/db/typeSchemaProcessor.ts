import type { Database } from 'better-sqlite3';
import logger from '../../../src/utils/logger';
import type { Schema, SchemaProperty, ExistingType, ExistingProperty } from './types';

const boolToInt = (value: boolean): number => value ? 1 : 0;

export class TypeSchemaProcessor {
  private db: Database;
  private apiDoc: any;

  constructor(db: Database) {
    this.db = db;
  }

  private async insertType(name: string, schema: Schema, processedTypes: Set<string> = new Set()): Promise<void> {
    try {
        // 检查是否已处理过该类型
        if (processedTypes.has(name)) {
            logger.info(`类型 ${name} 已处理过，跳过`);
            return;
        }
        processedTypes.add(name);

        // 验证并规范化数据
        const normalizedData = {
            name,
            description: schema.description || '',
            type: schema.type || 'object',
            properties: schema.properties
            ? JSON.stringify(
              Object.entries(schema.properties).map(([propName, prop]) => ({
                        name: propName,
                        // 处理嵌套对象的类型
                        type: this.getPropertyType(prop),
                        description: prop.description || '',
                        format: prop.format || '',
                        isRequired: schema.required == null ? true : schema.required.includes(propName),
                        // 处理 additionalProperties
                        additionalProperties: prop.additionalProperties
                            ? JSON.stringify(prop.additionalProperties)
                            : null,
                        // 处理嵌套的 properties
                        properties: prop.properties
                            ? JSON.stringify(prop.properties)
                            : null,
                        ...(prop.items ? { items: JSON.stringify(prop.items) } : {})
                    }))
            ):null,
            // 处理顶层的 additionalProperties
            additionalProperties: schema.additionalProperties
                ? JSON.stringify(schema.additionalProperties)
                : null,
            required: JSON.stringify(schema.required || [])
        };
        const transaction = this.db.transaction(() => {
            const existingType = this.db.prepare(`
                SELECT id, name, description, type, properties, additionalProperties, required
                FROM types WHERE name = ?
            `).get(name) as ExistingType;

            let typeId: number;

            if (!existingType) {
                const insertStmt = this.db.prepare(`
                    INSERT INTO types (name, description, type, properties, additionalProperties, required)
                    VALUES (@name, @description, @type, @properties, @additionalProperties, @required)
                `);

                const result = insertStmt.run(normalizedData);
                typeId = Number(result.lastInsertRowid);
                logger.info(`类型 ${name} 插入成功，ID: ${typeId}`);
            } else {
                typeId = existingType.id;
                // 检查是否有实际变化
                const hasChanges =
                    existingType.description !== normalizedData.description ||
                    existingType.type !== normalizedData.type ||
                    existingType.properties !== normalizedData.properties ||
                    existingType.additionalProperties !== normalizedData.additionalProperties ||
                    existingType.required !== normalizedData.required;

                if (hasChanges) {
                    const updateStmt = this.db.prepare(`
                        UPDATE types
                        SET description = @description,
                            type = @type,
                            properties = @properties,
                            additionalProperties = @additionalProperties,
                            required = @required,
                            updated_at = CURRENT_TIMESTAMP
                        WHERE name = @name
                    `);

                    updateStmt.run(normalizedData);
                    logger.info(`类型 ${name} 数据有变化，更新成功`);
                } else {
                    logger.info(`类型 ${name} 数据无变化，跳过更新`);
                }
            }

            // 处理属性
            if (schema.properties) {
                // 获取现有属性以便后续比较
                const existingProperties = this.db.prepare(`
                    SELECT * FROM type_properties WHERE type_id = ?
                `).all(typeId) as ExistingProperty[];

                // 将现有属性转换为 Map 以便快速查找
                const existingPropsMap = new Map(
                    existingProperties.map(prop => [`${prop.parent_id}-${prop.name}`, prop])
                );

                // 处理新的属性
                const processedProps = new Set<string>();

                // 插入或更新属性
                for (const [propName, prop] of Object.entries(schema.properties)) {
                    const isRequired = schema.required?.includes(propName) ?? false;

                    // 插入顶层属性
                    const propId = this.insertPropertyWithNested(
                        typeId,
                        propName,
                        prop,
                        isRequired
                    );

                    // 标记该属性已处理
                    processedProps.add(`null-${propName}`);

                    // 处理嵌套属性
                    if (prop.properties) {
                        this.processNestedProperties(
                            typeId,
                            prop.properties,
                            propId,
                            prop.required || [],
                            processedProps
                        );
                    }

                    // 处理数组项的属性
                    if (prop.items?.properties) {
                        this.processNestedProperties(
                            typeId,
                            prop.items.properties,
                            propId,
                            prop.items.required || [],
                            processedProps
                        );
                    }
                }
                // 删除不再使用的属性
                for (const [key, prop] of existingPropsMap) {
                    if (!processedProps.has(key)) {
                        this.db.prepare(`
                            DELETE FROM type_properties WHERE id = ?
                        `).run(prop.id);
                        logger.info(`删除未使用的属性: ${prop.name}`);
                    }
                }
            }
        });

        // 执行事务
        transaction();

    } catch (error) {
        logger.error(`类型 ${name} 处理失败:`, error);
        throw error;
    }
  }

  private getPropertyType(prop: SchemaProperty): string {
    if (prop.type) return prop.type;
    if (prop.$ref) {
        // 从 "#/components/schemas/TestLeaveVo" 提取 "TestLeaveVo"
        return prop.$ref.split('/').pop() || 'unknown';
    }
    return 'unknown';
  }

  // 插入属性
  private insertPropertyWithNested(
    typeId: number,
    propName: string,
    prop: SchemaProperty,
    isRequired: boolean,
    parentPropId?: number
  ): number {
    // 将 undefined 转换为 null
    const parentId = parentPropId === undefined ? null : parentPropId;

    // 修改查询语句，正确处理 NULL 值比较
    const existingProp = this.db.prepare(`
        SELECT
            id,
            type_id,
            parent_id,
            name,
            type,
            additionalProperties,
            description,
            format,
            is_required,
            is_item_type,
            required
        FROM type_properties
        WHERE type_id = ?
        AND (
            CASE
                WHEN ? IS NULL THEN parent_id IS NULL
                ELSE parent_id = ?
            END
        )
        AND name = ?
    `).get(
        typeId,
        parentId,
        parentId,
        propName
    ) as ExistingProperty | undefined;

    const propData = {
        type_id: typeId,
        parent_id: parentId,
        name: propName,
        type: this.getPropertyType(prop),
        additionalProperties: JSON.stringify(prop.additionalProperties || null),
        description: prop.description || '',
        format: prop.format || '',
        is_required: boolToInt(isRequired),
        is_item_type: boolToInt(!!prop.items),
        required: JSON.stringify(prop.required || [])
    };

    if (existingProp) {
        // 检查是否有变化
        const hasChanges = Object.entries(propData).some(
            ([key, value]) => existingProp[key] !== value
        );

        if (hasChanges) {
            // 更新属性
            this.db.prepare(`
                UPDATE type_properties
                SET type = @type,
                    additionalProperties = @additionalProperties,
                    description = @description,
                    format = @format,
                    is_required = @is_required,
                    is_item_type = @is_item_type,
                    required = @required,
                    updated_at = CURRENT_TIMESTAMP
                WHERE id = ?
            `).run({...propData}, existingProp.id);
            logger.info(`属性 ${propName} 已更新`);
        } else {
            logger.info(`属性 ${propName} 无变化，跳过更新`);
        }
        return existingProp.id;
    }

    // 插入新属性
    const result = this.db.prepare(`
        INSERT INTO type_properties (
            type_id,
            parent_id,
            name,
            type,
            additionalProperties,
            description,
            format,
            is_required,
            is_item_type,
            required
        ) VALUES (
            @type_id,
            @parent_id,
            @name,
            @type,
            @additionalProperties,
            @description,
            @format,
            @is_required,
            @is_item_type,
            @required
        )
    `).run(propData);

    const newId = Number(result.lastInsertRowid);
    return newId;
  }

  public async processApiDoc(apiDoc: any): Promise<void> {
    try {
        this.apiDoc = apiDoc;

        // 获取数据库中所有现有的类型
        const existingTypes = this.db.prepare(`
            SELECT id, name FROM types
        `).all() as { id: number; name: string }[];

        // 获取新文档中的所有类型名称
        const newTypeNames = new Set(Object.keys(apiDoc.components?.schemas || {}));

        // 找出需要删除的类型
        const typesToDelete = existingTypes.filter(type => !newTypeNames.has(type.name));

        // 删除不再存在的类型及其关联的属性
        if (typesToDelete.length > 0) {
            const transaction = this.db.transaction(() => {
                for (const type of typesToDelete) {
                    // 先删除类型的所有属性
                    this.db.prepare(`
                        DELETE FROM type_properties WHERE type_id = ?
                    `).run(type.id);

                    // 再删除类型本身
                    this.db.prepare(`
                        DELETE FROM types WHERE id = ?
                    `).run(type.id);

                    logger.info(`删除不再使用的类型: ${type.name}`);
                }
            });

            transaction();
        }

        // 处理新的类型定义
        if (apiDoc.components?.schemas) {
            const schemasNum = Object.keys(apiDoc.components.schemas).length;
            for (const [name, schema] of Object.entries<Schema>(apiDoc.components.schemas)) {
                await this.insertType(name, schema);
            }
            logger.info(`文档中类型数据数量: ${schemasNum}`);
            logger.success('所有类型数据处理完成');
        }
    } catch (error) {
        logger.error('数据插入失败:', error);
        throw error;
    }
  }

  // 添加一个辅助法来查找引的 Schema
  private findSchemaByRef(ref: string): Schema | null {
    const parts = ref.split('/');
    const typeName = parts[parts.length - 1];
    return this.apiDoc?.components?.schemas?.[typeName] || null;
  }

  // 添加处理嵌套属性的方法
  private processNestedProperties(
    typeId: number,
    properties: Record<string, SchemaProperty>,
    parentPropId: number,
    required: string[] | string | null,
    processedProps: Set<string>
  ): void {
    const requiredArray = Array.isArray(required) ? required : [];

    for (const [propName, prop] of Object.entries(properties)) {
        const isRequired = requiredArray.includes(propName);

        // 插入嵌套属性
        const nestedPropId = this.insertPropertyWithNested(
            typeId,
            propName,
            prop,
            isRequired,
            parentPropId
        );

        // 标记该属性已处理
        processedProps.add(`${parentPropId}-${propName}`);

        // 递归处理更深层的嵌套属性
        if (prop.properties) {
            this.processNestedProperties(
                typeId,
                prop.properties,
                nestedPropId,
                prop.required || [],
                processedProps
            );
        }

        // 处理数组项的属性
        if (prop.items?.properties) {
            this.processNestedProperties(
                typeId,
                prop.items.properties,
                nestedPropId,
                prop.items.required || [],
                processedProps
            );
        }
    }
  }

}
