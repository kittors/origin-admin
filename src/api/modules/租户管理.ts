import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysTenantBo, RSysTenantVo, TableDataInfoSysTenantVo, PageQuery } from './types/api-types';

/**
 * @name 租户管理模块
 */

			/**
			 * 修改租户
			 * @description 修改租户
			 */
			export const systemTenantEdit_1Api = (params: SysTenantBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/tenant`, params
				);
			};

			/**
			 * 新增租户
			 * @description 新增租户
			 */
			export const systemTenantAdd_1Api = (params: SysTenantBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/tenant`, params
				);
			};

			/**
			 * 状态修改
			 * @description 状态修改
			 */
			export const systemTenantChangeStatusChangeStatus_2Api = (params: SysTenantBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/tenant/changeStatus`, params
				);
			};

			/**
			 * 导出租户列表
			 * @description 导出租户列表
			 */
			export const systemTenantExportExport_2Api = (params: {
		bo: SysTenantBo
	}) => {
				return http.post<unknown>(
					`/system/tenant/export`, params
				);
			};

			/**
			 * 获取租户详细信息
			 * @description 获取租户详细信息
			 */
			export const systemTenantGetInfo_3Api = (params: {
		id: number
	}) => {
				return http.get<ResultData<RSysTenantVo>>(
					`/system/tenant/${params.id}`, { params }
				);
			};

			/**
			 * 同步租户套餐
			 * @description 同步租户套餐
			 */
			export const systemTenantSyncTenantPackageSyncTenantPackageApi = (params: {
		tenantId: string;
		packageId: number
	}) => {
				return http.get<ResultData<RVoid>>(
					`/system/tenant/syncTenantPackage`, { params }
				);
			};

			/**
			 * 同步租户字典
			 * @description 同步租户字典
			 */
			export const systemTenantSyncTenantDictSyncTenantDictApi = () => {
				return http.get<ResultData<RVoid>>(
					`/system/tenant/syncTenantDict`
				);
			};

			/**
			 * 查询租户列表
			 * @description 查询租户列表
			 */
			export const systemTenantListList_2Api = (params: {
		bo: SysTenantBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysTenantVo>>(
					`/system/tenant/list`, { params }
				);
			};

			/**
			 * 动态切换租户
			 * @description 动态切换租户
			 */
			export const systemTenantDynamicDynamicTenantApi = (params: {
		tenantId: string
	}) => {
				return http.get<ResultData<RVoid>>(
					`/system/tenant/dynamic/${params.tenantId}`, { params }
				);
			};

			/**
			 * 清除动态租户
			 * @description 清除动态租户
			 */
			export const systemTenantDynamicClearDynamicClearApi = () => {
				return http.get<ResultData<RVoid>>(
					`/system/tenant/dynamic/clear`
				);
			};

			/**
			 * 删除租户
			 * @description 删除租户
			 */
			export const systemTenantRemove_2Api = (params: {
		ids: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/tenant/${params.ids}`, { params }
				);
			};
