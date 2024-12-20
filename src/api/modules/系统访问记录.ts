import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { SysLogininforBo, RVoid, TableDataInfoSysLogininforVo, PageQuery } from './types/api-types';

/**
 * @name 系统访问记录模块
 */

			/**
			 * 导出系统访问记录列表
			 * @description 导出系统访问记录列表
			 */
			export const monitorLogininforExportExport_10Api = (params: {
		logininfor: SysLogininforBo
	}) => {
				return http.post<unknown>(
					`/monitor/logininfor/export`, params
				);
			};

			/**
			 * 
			 * @description 
			 */
			export const monitorLogininforUnlockUnlockApi = (params: {
		userName: string
	}) => {
				return http.get<ResultData<RVoid>>(
					`/monitor/logininfor/unlock/${params.userName}`, { params }
				);
			};

			/**
			 * 获取系统访问记录列表
			 * @description 获取系统访问记录列表
			 */
			export const monitorLogininforListList_17Api = (params: {
		logininfor: SysLogininforBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysLogininforVo>>(
					`/monitor/logininfor/list`, { params }
				);
			};

			/**
			 * 批量删除登录日志
			 * @description 批量删除登录日志
			 */
			export const monitorLogininforRemove_16Api = (params: {
		infoIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/monitor/logininfor/${params.infoIds}`, { params }
				);
			};

			/**
			 * 清理系统访问记录
			 * @description 清理系统访问记录
			 */
			export const monitorLogininforCleanClean_1Api = () => {
				return http.delete<ResultData<RVoid>>(
					`/monitor/logininfor/clean`
				);
			};
