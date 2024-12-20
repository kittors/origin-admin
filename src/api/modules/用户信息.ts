import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysUserBo, RListSysUserVo, TableDataInfoSysUserVo, PageQuery, RUserInfoVo, RListTreeLong, SysDeptBo, RSysUserInfoVo } from './types/api-types';

/**
 * @name 用户信息模块
 */

			/**
			 * 修改用户
			 * @description 修改用户
			 */
			export const systemUserEditApi = (params: SysUserBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/user`, params
				);
			};

			/**
			 * 新增用户
			 * @description 新增用户
			 */
			export const systemUserAddApi = (params: SysUserBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/user`, params
				);
			};

			/**
			 * 重置密码
			 * @description 重置密码
			 */
			export const systemUserResetPwdResetPwdApi = (params: SysUserBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/user/resetPwd`, params
				);
			};

			/**
			 * 状态修改
			 * @description 状态修改
			 */
			export const systemUserChangeStatusChangeStatusApi = (params: SysUserBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/user/changeStatus`, params
				);
			};

			/**
			 * 用户授权角色
			 * @description 用户授权角色
			 */
			export const systemUserAuthRoleInsertAuthRoleApi = (params: {
		userId: number;
		roleIds: number[]
	}) => {
				return http.put<ResultData<RVoid>>(
					`/system/user/authRole`, params
				);
			};

			/**
			 * 获取导入模板
			 * @description 获取导入模板
			 */
			export const systemUserImportTemplateImportTemplateApi = () => {
				return http.post<unknown>(
					`/system/user/importTemplate`
				);
			};

			/**
			 * 导入数据
			 * @description 导入数据
			 */
			export const systemUserImportDataImportDataApi = (params: FormData) => {
				return http.post<ResultData<RVoid>>(
					`/system/user/importData`, params, { headers: { "Content-Type": "multipart/form-data" } }
				);
			};

			/**
			 * 导出用户列表
			 * @description 导出用户列表
			 */
			export const systemUserExportExportApi = (params: {
		user: SysUserBo
	}) => {
				return http.post<unknown>(
					`/system/user/export`, params
				);
			};

			/**
			 * 根据用户ID串批量获取用户基础信息
			 * @description 根据用户ID串批量获取用户基础信息
			 */
			export const systemUserOptionselectOptionselectApi = (params: {
		userIds?: number[];
		deptId?: number
	}) => {
				return http.get<ResultData<RListSysUserVo>>(
					`/system/user/optionselect`, { params }
				);
			};

			/**
			 * 获取用户列表
			 * @description 获取用户列表
			 */
			export const systemUserListListApi = (params: {
		user: SysUserBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysUserVo>>(
					`/system/user/list`, { params }
				);
			};

			/**
			 * 获取部门下的所有用户信息
			 * @description 获取部门下的所有用户信息
			 */
			export const systemUserListDeptListByDeptApi = (params: {
		deptId: number
	}) => {
				return http.get<ResultData<RListSysUserVo>>(
					`/system/user/list/dept/${params.deptId}`, { params }
				);
			};

			/**
			 * 获取用户信息
			 * @description 获取用户信息
			 */
			export const systemUserGetInfoGetInfoApi = () => {
				return http.get<ResultData<RUserInfoVo>>(
					`/system/user/getInfo`
				);
			};

			/**
			 * 获取部门树列表
			 * @description 获取部门树列表
			 */
			export const systemUserDeptTreeDeptTreeApi = (params: {
		dept: SysDeptBo
	}) => {
				return http.get<ResultData<RListTreeLong>>(
					`/system/user/deptTree`, { params }
				);
			};

			/**
			 * 根据用户编号获取授权角色
			 * @description 根据用户编号获取授权角色
			 */
			export const systemUserAuthRoleAuthRoleApi = (params: {
		userId: number
	}) => {
				return http.get<ResultData<RSysUserInfoVo>>(
					`/system/user/authRole/${params.userId}`, { params }
				);
			};

			/**
			 * 根据用户编号获取详细信息
			 * @description 根据用户编号获取详细信息
			 */
			export const systemUserGetInfo_1Api = (params: {
		userId: number
	}) => {
				return http.get<ResultData<RSysUserInfoVo>>(
					`/system/user/${params.userId}`, { params }
				);
			};

			/**
			 * 根据用户编号获取详细信息
			 * @description 根据用户编号获取详细信息
			 */
			export const systemUserGetInfo_2Api = () => {
				return http.get<ResultData<RSysUserInfoVo>>(
					`/system/user/`
				);
			};

			/**
			 * 删除用户
			 * @description 删除用户
			 */
			export const systemUserRemove_1Api = (params: {
		userIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/user/${params.userIds}`, { params }
				);
			};
