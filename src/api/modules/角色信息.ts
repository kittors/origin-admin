import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysRoleBo, SysUserRole, RSysRoleVo, RListSysRoleVo, TableDataInfoSysRoleVo, PageQuery, RDeptTreeSelectVo, TableDataInfoSysUserVo, SysUserBo } from './types/api-types';

/**
 * @name 角色信息模块
 */

			/**
			 * 修改保存角色
			 * @description 修改保存角色
			 */
			export const systemRoleEdit_3Api = (params: SysRoleBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/role`, params
				);
			};

			/**
			 * 新增角色
			 * @description 新增角色
			 */
			export const systemRoleAdd_3Api = (params: SysRoleBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/role`, params
				);
			};

			/**
			 * 修改保存数据权限
			 * @description 修改保存数据权限
			 */
			export const systemRoleDataScopeDataScopeApi = (params: SysRoleBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/role/dataScope`, params
				);
			};

			/**
			 * 状态修改
			 * @description 状态修改
			 */
			export const systemRoleChangeStatusChangeStatus_3Api = (params: SysRoleBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/role/changeStatus`, params
				);
			};

			/**
			 * 批量选择用户授权
			 * @description 批量选择用户授权
			 */
			export const systemRoleAuthUserSelectAllSelectAuthUserAllApi = (params: {
		roleId: number;
		userIds: number[]
	}) => {
				return http.put<ResultData<RVoid>>(
					`/system/role/authUser/selectAll`, params
				);
			};

			/**
			 * 取消授权用户
			 * @description 取消授权用户
			 */
			export const systemRoleAuthUserCancelCancelAuthUserApi = (params: SysUserRole) => {
				return http.put<ResultData<RVoid>>(
					`/system/role/authUser/cancel`, params
				);
			};

			/**
			 * 批量取消授权用户
			 * @description 批量取消授权用户
			 */
			export const systemRoleAuthUserCancelAllCancelAuthUserAllApi = (params: {
		roleId: number;
		userIds: number[]
	}) => {
				return http.put<ResultData<RVoid>>(
					`/system/role/authUser/cancelAll`, params
				);
			};

			/**
			 * 导出角色信息列表
			 * @description 导出角色信息列表
			 */
			export const systemRoleExportExport_3Api = (params: {
		role: SysRoleBo
	}) => {
				return http.post<unknown>(
					`/system/role/export`, params
				);
			};

			/**
			 * 根据角色编号获取详细信息
			 * @description 根据角色编号获取详细信息
			 */
			export const systemRoleGetInfo_5Api = (params: {
		roleId: number
	}) => {
				return http.get<ResultData<RSysRoleVo>>(
					`/system/role/${params.roleId}`, { params }
				);
			};

			/**
			 * 获取角色选择框列表
			 * @description 获取角色选择框列表
			 */
			export const systemRoleOptionselectOptionselect_1Api = (params: {
		roleIds?: number[]
	}) => {
				return http.get<ResultData<RListSysRoleVo>>(
					`/system/role/optionselect`, { params }
				);
			};

			/**
			 * 获取角色信息列表
			 * @description 获取角色信息列表
			 */
			export const systemRoleListList_4Api = (params: {
		role: SysRoleBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysRoleVo>>(
					`/system/role/list`, { params }
				);
			};

			/**
			 * 获取对应角色部门树列表
			 * @description 获取对应角色部门树列表
			 */
			export const systemRoleDeptTreeRoleDeptTreeselectApi = (params: {
		roleId: number
	}) => {
				return http.get<ResultData<RDeptTreeSelectVo>>(
					`/system/role/deptTree/${params.roleId}`, { params }
				);
			};

			/**
			 * 查询未分配用户角色列表
			 * @description 查询未分配用户角色列表
			 */
			export const systemRoleAuthUserUnallocatedListUnallocatedListApi = (params: {
		user: SysUserBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysUserVo>>(
					`/system/role/authUser/unallocatedList`, { params }
				);
			};

			/**
			 * 查询已分配用户角色列表
			 * @description 查询已分配用户角色列表
			 */
			export const systemRoleAuthUserAllocatedListAllocatedListApi = (params: {
		user: SysUserBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysUserVo>>(
					`/system/role/authUser/allocatedList`, { params }
				);
			};

			/**
			 * 删除角色
			 * @description 删除角色
			 */
			export const systemRoleRemove_4Api = (params: {
		roleIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/role/${params.roleIds}`, { params }
				);
			};
