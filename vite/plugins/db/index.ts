import Database from 'better-sqlite3';
import type { Database as DatabaseType } from 'better-sqlite3';
import { resolve } from 'node:path';
import fs from 'node:fs';
import logger from '../../../src/utils/logger';

const DB_PATH = resolve(process.cwd(), '.api-db/api-history.db');
const REQUIRED_TABLES = ['types', 'type_properties'];

export function initDB(): DatabaseType {
    try {
        // 确保目录存在
        const dbDir = resolve(process.cwd(), '.api-db');
        if (!fs.existsSync(dbDir)) {
            fs.mkdirSync(dbDir, { recursive: true });
            logger.info('创建数据库目录');
        }

        // 检查数据库文件是否存在
        const isNewDb = !fs.existsSync(DB_PATH);
        if (isNewDb) {
            logger.info('创建新的数据库文件');
        }

        const db = new Database(DB_PATH);

        // 检查所有必需的表是否存在
        const existingTables = db.prepare(`
            SELECT name FROM sqlite_master
            WHERE type='table' AND name IN (${REQUIRED_TABLES.map(() => '?').join(',')})
        `).all(...REQUIRED_TABLES).map(row => (row as { name: string }).name);

        const missingTables = REQUIRED_TABLES.filter(table => !existingTables.includes(table));

        if (missingTables.length > 0) {
            logger.info(`缺少表: ${missingTables.join(', ')}, 开始创建...`);
            db.exec(`
                -- 创建类型表
                CREATE TABLE IF NOT EXISTS types (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, -- 主键ID
                    name TEXT NOT NULL, -- 类型名称
                    description TEXT, -- 描述
                    type TEXT NOT NULL, -- 类型
                    properties TEXT, -- JSON 属性 字符串数组 存放的是类型id
                    additionalProperties TEXT, -- 附加属性
                    required TEXT,  -- JSON 数组字符串存储必需字段 -- 需求数组JSON
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- 创建时间
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- 更新时间
                    UNIQUE(name) -- 唯一约束
                );

                -- 创建类型属性表（添加自引用关系）
                CREATE TABLE IF NOT EXISTS type_properties (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, -- 主键ID
                    type_id INTEGER NOT NULL, -- 类型ID
                    parent_id INTEGER, -- 父属性ID，允许为空
                    name TEXT NOT NULL, -- 属性名称
                    type TEXT NOT NULL, -- 类型
                    additionalProperties TEXT, -- 附加属性
                    description TEXT, -- 描述
                    format TEXT, -- 格式化
                    is_required INTEGER NOT NULL, -- 是否必选
                    is_item_type INTEGER NOT NULL, -- 是否是数组项
                    required TEXT,  -- JSON 需求数组JSON 或者 是布尔值JSON
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- 创建时间
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- 更新时间
                    FOREIGN KEY (type_id) REFERENCES types(id), -- 外键约束
                    FOREIGN KEY (parent_id) REFERENCES type_properties(id), -- 自引用关系
                    UNIQUE(type_id, parent_id, name) -- 唯一约束
                );
            `);
            logger.success('数据库表创建完成');
        } else {
            logger.info('所有数据库表已存在');
        }

        return db;
    } catch (error) {
        logger.error('数据库初始化失败:', error);
        throw error;
    }
}
