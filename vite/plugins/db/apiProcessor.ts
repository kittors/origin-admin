import type { Database } from 'better-sqlite3';
import logger from '../../../src/utils/logger';
import type { ApiDoc, ExistingApi, ExistingModule, PathItem } from './types';
export class ApiProcessor {
	private db: Database;
	private apiDoc: ApiDoc | null = null;
	private noUpdatedNum = 0;
	private insertNum = 0;
	constructor(db: Database) {
		this.db = db;
	}

	private async deleteOldApi(): Promise<void> {
		if (!this.apiDoc) {
			logger.warning('API文档为空，跳过删除类型');
			return;
		}

		// 获取数据库中所有的接口数据
		const existingAPI = this.db.prepare('SELECT * FROM api_doc_content').all() as ExistingApi[];
		// 找到新文档中的所有接口PATH
		const newAPIPaths = new Set(Object.keys(this.apiDoc.paths || {}));
		// 找出需要删除的接口数据
		const PathsToDelete = existingAPI.filter((item) => !newAPIPaths.has(item.path));
		// 删除不存在的接口数据
		if (PathsToDelete.length > 0) {
			const transaction = this.db.transaction(() => {
				for (const path of PathsToDelete) {
					this.db.prepare('DELETE FROM api_doc_content WHERE path = ?').run(path);
					logger.info(`删除不再使用的接口: ${path}`);
				}
			});

			transaction();
		}
	}

	private async deleteOldModule(): Promise<void> {
		if (!this.apiDoc) {
			logger.warning('API文档为空，跳过删除类型');
			return;
		}
		const existingModule = this.db
			.prepare('SELECT * FROM api_modules')
			.all() as ExistingModule[];

		// 从路径中提取模块名称
		const newModuleNames = new Set(
			Object.keys(this.apiDoc.paths || {})
				.map((path) => {
					// 处理根路径 "/"
					if (path === '/') return 'root';
					// 处理其他路径
					const segments = path.split('/');
					return segments[1] || 'root'; // 如果第一段为空，返回 'root'
				})
				.filter(Boolean),
		);

		const moduleToDelete = existingModule.filter((item) => !newModuleNames.has(item.name));

		// 处理需要删除的模块...
		if (moduleToDelete.length > 0) {
			const transaction = this.db.transaction(() => {
				for (const module of moduleToDelete) {
					// 首先删除引用该模块的所有 API 文档记录
					this.db
						.prepare('DELETE FROM api_doc_content WHERE modules_id = ?')
						.run(module.id);
					// 然后才能删除模块本身
					this.db.prepare('DELETE FROM api_modules WHERE name = ?').run(module.name);
					logger.info(`删除不再使用的模块: ${module.name}`);
				}
			});
			transaction();
		}
	}

	private async insertApi(
		path: string,
		method: string,
		methodItem: PathItem,
		processedAPIs: Set<string> = new Set(),
	): Promise<void> {
		try {
			if (processedAPIs.has(`${path}-${method}`)) {
				logger.info(`接口 ${path}-${method} 已处理过，跳过`);
				return;
			}
			// 添加到已处理接口集合
			processedAPIs.add(`${path}-${method}`);

			// 新增模块
			let moduleName = path.split('/')[1];
			if (path === '/') {
				moduleName = 'root';
			}
			let moduleId: number;
			// 如果已经有存在的模块 就不用插入数据
			const module = this.db
				.prepare('SELECT * FROM api_modules WHERE name = ?')
				.get(moduleName) as ExistingModule;
			if (module) {
				moduleId = module.id;
			} else {
				moduleId = Number(
					this.db.prepare('INSERT INTO api_modules (name) VALUES (?)').run(moduleName)
						.lastInsertRowid,
				);
			}
			// 构成标准数据
			const standardData = {
				modules_id: moduleId,
				method,
				path,
				tags: methodItem.tags ? JSON.stringify(methodItem.tags) : '',
				summary: methodItem.summary || '',
				description: methodItem.description || '',
				operationId: methodItem.operationId || '',
				parameters: methodItem.parameters ? JSON.stringify(methodItem.parameters) : '',
				requestBody: methodItem.requestBody ? JSON.stringify(methodItem.requestBody) : '',
				responses: methodItem.responses ? JSON.stringify(methodItem.responses) : '',
			};

			const transaction = this.db.transaction(() => {
				// 查询是否存在
				const existingAPI = this.db
					.prepare('SELECT * FROM api_doc_content WHERE method = ? AND path = ?')
					.get(method, path) as ExistingApi;
				if (existingAPI) {
					// 获取现有的接口数据
					const hasChanges =
						standardData.modules_id === existingAPI.modules_id &&
						standardData.tags === existingAPI.tags &&
						standardData.summary === existingAPI.summary &&
						standardData.description === existingAPI.description &&
						standardData.operationId === existingAPI.operationId &&
						standardData.parameters === existingAPI.parameters &&
						standardData.requestBody === existingAPI.requestBody &&
						standardData.responses === existingAPI.responses;

					if (hasChanges) {
						this.noUpdatedNum++;
						return;
					}

					// 更新接口
					this.db
						.prepare(`UPDATE api_doc_content SET
               modules_id = ?,
               tags = ?,
               summary = ?,
               description = ?,
               operationId = ?,
               parameters = ?,
               responses = ?,
               requestBody = ?,
               updated_at = CURRENT_TIMESTAMP
               WHERE id = ?`)
						.run(
							standardData.modules_id,
							standardData.tags,
							standardData.summary,
							standardData.description,
							standardData.operationId,
							standardData.parameters,
							standardData.requestBody,
							standardData.responses,
							existingAPI.id,
						);
					logger.info(`接口 ${path}-${method} 已更新`);
				} else {
					// 添加接口
					this.db
						.prepare(
							'INSERT INTO api_doc_content (modules_id, method, path, tags, summary, description, operationId, parameters, requestBody, responses) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
						)
						.run(
							standardData.modules_id,
							standardData.method,
							standardData.path,
							standardData.tags,
							standardData.summary,
							standardData.description,
							standardData.operationId,
							standardData.parameters,
							standardData.requestBody,
							standardData.responses,
						);
					this.insertNum++;
					// logger.info(`接口 ${path}-${method} 已插入`);
				}
			});
			transaction();
		} catch (error) {
			logger.error('接口数据插入失败:', error);
			throw error;
		}
	}
	// 处理API文档
	public async processApiDoc(apiDoc: ApiDoc): Promise<void> {
		try {
			this.apiDoc = apiDoc;
			this.noUpdatedNum = 0;
			this.insertNum = 0;

			await this.deleteOldApi();
			await this.deleteOldModule();
			if (apiDoc.paths) {
				const pathsNum = Object.keys(apiDoc.paths).length;
				logger.info(`文档中接口Path数量: ${pathsNum}`);
				for (const [path, pathItem] of Object.entries(apiDoc.paths)) {
					for (const [method, methodItem] of Object.entries(pathItem)) {
						await this.insertApi(path, method, methodItem);
					}
				}
				logger.info(`无任何更新接口数量: ${this.noUpdatedNum}`);
				logger.info(`新增数量: ${this.insertNum}`);
				logger.success('所有接口数据处理完成');
			}
		} catch (error) {
			logger.error('接口数据插入失败:', error);
			throw error;
		}
	}
}
