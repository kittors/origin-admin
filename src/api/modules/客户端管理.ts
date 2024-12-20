import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysClientBo, RSysClientVo, TableDataInfoSysClientVo, PageQuery } from './types/api-types';

/**
 * @name 客户端管理模块
 */

			/**
			 * 修改客户端管理
			 * @description 修改客户端管理
			 */
			export const systemClientEdit_11Api = (params: SysClientBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/client`, params
				);
			};

			/**
			 * 新增客户端管理
			 * @description 新增客户端管理
			 */
			export const systemClientAdd_11Api = (params: SysClientBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/client`, params
				);
			};

			/**
			 * 状态修改
			 * @description 状态修改
			 */
			export const systemClientChangeStatusChangeStatus_4Api = (params: SysClientBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/client/changeStatus`, params
				);
			};

			/**
			 * 导出客户端管理列表
			 * @description 导出客户端管理列表
			 */
			export const systemClientExportExport_8Api = (params: {
		bo: SysClientBo
	}) => {
				return http.post<unknown>(
					`/system/client/export`, params
				);
			};

			/**
			 * 获取客户端管理详细信息
			 * @description 获取客户端管理详细信息
			 */
			export const systemClientGetInfo_13Api = (params: {
		id: number
	}) => {
				return http.get<ResultData<RSysClientVo>>(
					`/system/client/${params.id}`, { params }
				);
			};

			/**
			 * 查询客户端管理列表
			 * @description 查询客户端管理列表
			 */
			export const systemClientListList_12Api = (params: {
		bo: SysClientBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysClientVo>>(
					`/system/client/list`, { params }
				);
			};

			/**
			 * 删除客户端管理
			 * @description 删除客户端管理
			 */
			export const systemClientRemove_12Api = (params: {
		ids: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/client/${params.ids}`, { params }
				);
			};
