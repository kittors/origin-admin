import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysMenuBo, RSysMenuVo, RListTreeLong, RMenuTreeSelectVo, RListSysMenuVo, RListRouterVo } from './types/api-types';

/**
 * @name 菜单信息模块
 */

			/**
			 * 修改菜单
			 * @description 修改菜单
			 */
			export const systemMenuEdit_6Api = (params: SysMenuBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/menu`, params
				);
			};

			/**
			 * 新增菜单
			 * @description 新增菜单
			 */
			export const systemMenuAdd_6Api = (params: SysMenuBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/menu`, params
				);
			};

			/**
			 * 根据菜单编号获取详细信息
			 * @description 根据菜单编号获取详细信息
			 */
			export const systemMenuGetInfo_8Api = (params: {
		menuId: number
	}) => {
				return http.get<ResultData<RSysMenuVo>>(
					`/system/menu/${params.menuId}`, { params }
				);
			};

			/**
			 * 删除菜单
			 * @description 删除菜单
			 */
			export const systemMenuRemove_7Api = (params: {
		menuId: number
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/menu/${params.menuId}`, { params }
				);
			};

			/**
			 * 获取菜单下拉树列表
			 * @description 获取菜单下拉树列表
			 */
			export const systemMenuTreeselectTreeselectApi = (params: {
		menu: SysMenuBo
	}) => {
				return http.get<ResultData<RListTreeLong>>(
					`/system/menu/treeselect`, { params }
				);
			};

			/**
			 * 加载对应租户套餐菜单列表树
			 * @description 加载对应租户套餐菜单列表树
			 */
			export const systemMenuTenantPackageMenuTreeselectTenantPackageMenuTreeselectApi = (params: {
		packageId: number
	}) => {
				return http.get<ResultData<RMenuTreeSelectVo>>(
					`/system/menu/tenantPackageMenuTreeselect/${params.packageId}`, { params }
				);
			};

			/**
			 * 加载对应角色菜单列表树
			 * @description 加载对应角色菜单列表树
			 */
			export const systemMenuRoleMenuTreeselectRoleMenuTreeselectApi = (params: {
		roleId: number
	}) => {
				return http.get<ResultData<RMenuTreeSelectVo>>(
					`/system/menu/roleMenuTreeselect/${params.roleId}`, { params }
				);
			};

			/**
			 * 获取菜单列表
			 * @description 获取菜单列表
			 */
			export const systemMenuListList_7Api = (params: {
		menu: SysMenuBo
	}) => {
				return http.get<ResultData<RListSysMenuVo>>(
					`/system/menu/list`, { params }
				);
			};

			/**
			 * 获取路由信息
			 * @description 获取路由信息
			 */
			export const systemMenuGetRoutersGetRoutersApi = () => {
				return http.get<ResultData<RListRouterVo>>(
					`/system/menu/getRouters`
				);
			};
