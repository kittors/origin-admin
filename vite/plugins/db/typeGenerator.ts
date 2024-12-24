import type { Database } from 'better-sqlite3';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import logger from '../../../src/utils/logger';
import type { ExistingType, SchemaProperty } from './types';

export class TypeGenerator {
  private db: Database;

  // Java类型到TypeScript类型的映射
  private typeMapping: Record<string, string> = {
    'integer': 'number',
    'string': 'string',
    'boolean': 'boolean',
    'number': 'number',
    'float': 'number',
    'double': 'number',
    'long': 'number',
    'int': 'number',
    'date': 'string',
    'datetime': 'string',
    'binary': 'Blob',
    'byte': 'number',
    'void': 'void',
    'map': 'Record<string, any>',
    'file': 'File'
  };

  constructor(db: Database) {
    this.db = db;
  }



  private async generateTypeDefinitions(): Promise<string> {
    try {
      // 获取所有类型及其属性
      const types = this.db.prepare(`
        SELECT id, name, type, description, additionalProperties, required, created_at, updated_at FROM types
      `).all() as ExistingType[];

      let output = '// 自动生成的类型定义文件，请勿手动修改\n\n';

      for (const type of types) {
        output += `export interface ${type.name} {\n`;
        output += `  /** ${type.description} */\n`;
        const  properties = this.db.prepare(`
          SELECT * FROM type_properties WHERE type_id = ? AND parent_id IS NULL
        `).all(type.id) as SchemaProperty[];
          for (const prop of properties) {
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

  private generatePropertyDefinition(prop: SchemaProperty): string {
    let typeDefinition: string;

    if (prop.type === 'array') {
      // logger.info('数组项有子属性', prop);
      typeDefinition = this.generateArrayTypeDefinition(prop);
    } else {
      // 检查是否有子属性
      const childProperties = this.db.prepare(`
        SELECT * FROM type_properties WHERE parent_id = ?
      `).all(prop.id) as SchemaProperty[];

      if (childProperties.length > 0) {
        // 递归生成子属性的接口定义
        typeDefinition = '{\n';
        for (const childProp of childProperties) {
          typeDefinition += this.generatePropertyDefinition(childProp);
        }
        typeDefinition += '  }';
      } else {
        typeDefinition = this.typeMapping[prop.type] || prop.type;
      }
    }

    return `  ${prop.name}: ${typeDefinition};\n`;
  }

  private generateArrayTypeDefinition(prop: SchemaProperty): string {
    // 获取数组项的子属性
    const itemProperties = this.db.prepare(`
      SELECT * FROM type_properties WHERE parent_id = ?
    `).all(prop.id) as SchemaProperty[];
    logger.info('数组项有子属性', itemProperties);
    if (itemProperties.length > 0) {
      //
      // 递归生成数组项的接口定义
      let arrayType = '{\n';
      for (const itemProp of itemProperties) {
        arrayType += this.generatePropertyDefinition(itemProp);
      }
      arrayType += '  }[]';
      return arrayType;
    }

    return `${this.typeMapping[prop.type] || 'any'}[]`;
  }

  public async generateTypeFile(): Promise<void> {
    try {
      const typeDefinitions = await this.generateTypeDefinitions();

      // 确保目录存在
      const typeFilePath = resolve(process.cwd(), 'src/api/modules/type');
      await fs.mkdir(typeFilePath, { recursive: true });

      // 写入文件
      await fs.writeFile(
        resolve(typeFilePath, 'api-types.ts'),
        typeDefinitions,
        'utf-8'
      );

      logger.success('类型定义文件生成完成');
    } catch (error) {
      logger.error('生成类型文件失败:', error);
      throw error;
    }
  }
}
