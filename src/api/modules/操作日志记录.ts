import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { SysOperLogBo, TableDataInfoSysOperLogVo, PageQuery, RVoid } from './types/api-types';

/**
 * @name 操作日志记录模块
 */

			/**
			 * 导出操作日志记录列表
			 * @description 导出操作日志记录列表
			 */
			export const monitorOperlogExportExport_9Api = (params: {
		operLog: SysOperLogBo
	}) => {
				return http.post<unknown>(
					`/monitor/operlog/export`, params
				);
			};

			/**
			 * 获取操作日志记录列表
			 * @description 获取操作日志记录列表
			 */
			export const monitorOperlogListList_15Api = (params: {
		operLog: SysOperLogBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysOperLogVo>>(
					`/monitor/operlog/list`, { params }
				);
			};

			/**
			 * 批量删除操作日志记录
			 * @description 批量删除操作日志记录
			 */
			export const monitorOperlogRemove_15Api = (params: {
		operIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/monitor/operlog/${params.operIds}`, { params }
				);
			};

			/**
			 * 清理操作日志记录
			 * @description 清理操作日志记录
			 */
			export const monitorOperlogCleanCleanApi = () => {
				return http.delete<ResultData<RVoid>>(
					`/monitor/operlog/clean`
				);
			};
