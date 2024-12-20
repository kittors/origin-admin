import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysTenantPackageBo, RSysTenantPackageVo, RListSysTenantPackageVo, TableDataInfoSysTenantPackageVo, PageQuery } from './types/api-types';

/**
 * @name 租户套餐管理模块
 */

			/**
			 * 修改租户套餐
			 * @description 修改租户套餐
			 */
			export const systemTenantPackageEdit_2Api = (params: SysTenantPackageBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/tenant/package`, params
				);
			};

			/**
			 * 新增租户套餐
			 * @description 新增租户套餐
			 */
			export const systemTenantPackageAdd_2Api = (params: SysTenantPackageBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/tenant/package`, params
				);
			};

			/**
			 * 状态修改
			 * @description 状态修改
			 */
			export const systemTenantPackageChangeStatusChangeStatus_1Api = (params: SysTenantPackageBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/tenant/package/changeStatus`, params
				);
			};

			/**
			 * 导出租户套餐列表
			 * @description 导出租户套餐列表
			 */
			export const systemTenantPackageExportExport_1Api = (params: {
		bo: SysTenantPackageBo
	}) => {
				return http.post<unknown>(
					`/system/tenant/package/export`, params
				);
			};

			/**
			 * 获取租户套餐详细信息
			 * @description 获取租户套餐详细信息
			 */
			export const systemTenantPackageGetInfo_4Api = (params: {
		packageId: number
	}) => {
				return http.get<ResultData<RSysTenantPackageVo>>(
					`/system/tenant/package/${params.packageId}`, { params }
				);
			};

			/**
			 * 查询租户套餐下拉选列表
			 * @description 查询租户套餐下拉选列表
			 */
			export const systemTenantPackageSelectListSelectListApi = () => {
				return http.get<ResultData<RListSysTenantPackageVo>>(
					`/system/tenant/package/selectList`
				);
			};

			/**
			 * 查询租户套餐列表
			 * @description 查询租户套餐列表
			 */
			export const systemTenantPackageListList_1Api = (params: {
		bo: SysTenantPackageBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysTenantPackageVo>>(
					`/system/tenant/package/list`, { params }
				);
			};

			/**
			 * 删除租户套餐
			 * @description 删除租户套餐
			 */
			export const systemTenantPackageRemove_3Api = (params: {
		packageIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/tenant/package/${params.packageIds}`, { params }
				);
			};
