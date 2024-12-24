import http from '@/api';
import { ResultData } from '@/api/interface';
import type { RVoid, SysUserBo, RProfileVo, SysUserProfileBo, SysUserPasswordBo, SysTenantBo, SysTenantPackageBo, SysRoleBo, SysUserRole, SysPostBo, SysNoticeBo, SysMenuBo, SysDictTypeBo, SysDictDataBo, SysDeptBo, SysConfigBo, SysClientBo, RAvatarVo, RListSysUserVo, TableDataInfoSysUserVo, PageQuery, RUserInfoVo, RListTreeLong, RSysUserInfoVo, RSysTenantVo, RSysTenantPackageVo, RListSysTenantPackageVo, TableDataInfoSysTenantPackageVo, TableDataInfoSysTenantVo, RListSysSocialVo, RSysRoleVo, RListSysRoleVo, TableDataInfoSysRoleVo, RDeptTreeSelectVo, RSysPostVo, RListSysPostVo, TableDataInfoSysPostVo, RSysNoticeVo, TableDataInfoSysNoticeVo, RSysMenuVo, RMenuTreeSelectVo, RListSysMenuVo, RListRouterVo, RSysDictTypeVo, RListSysDictTypeVo, TableDataInfoSysDictTypeVo, RSysDictDataVo, RListSysDictDataVo, TableDataInfoSysDictDataVo, RSysDeptVo, RListSysDeptVo, RSysConfigVo, TableDataInfoSysConfigVo, RString, RSysClientVo, TableDataInfoSysClientVo } from './types/api-types';


	/**
	 * 修改用户
	 * @description 修改用户
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserEdit_3Api = (params: SysUserBo) => {
		return http.put<RVoid>(
			`/system/user`, params
		);
	};

	/**
	 * 新增用户
	 * @description 新增用户
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserAdd_3Api = (params: SysUserBo) => {
		return http.post<RVoid>(
			`/system/user`, params
		);
	};

	/**
	 * 重置密码
	 * @description 重置密码
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserResetPwdResetPwdApi = (params: SysUserBo) => {
		return http.put<RVoid>(
			`/system/user/resetPwd`, params
		);
	};

	/**
	 * 个人信息
	 * @description 个人信息
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserProfileProfileApi = () => {
		return http.get<RProfileVo>(
			`/system/user/profile`
		);
	};

	/**
	 * 修改用户信息
	 * @description 修改用户信息
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserProfileUpdateProfileApi = (params: SysUserProfileBo) => {
		return http.put<RVoid>(
			`/system/user/profile`, params
		);
	};

	/**
	 * 重置密码
	 * @description 重置密码
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserProfileUpdatePwdUpdatePwdApi = (params: SysUserPasswordBo) => {
		return http.put<RVoid>(
			`/system/user/profile/updatePwd`, params
		);
	};

	/**
	 * 状态修改
	 * @description 状态修改
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserChangeStatusChangeStatusApi = (params: SysUserBo) => {
		return http.put<RVoid>(
			`/system/user/changeStatus`, params
		);
	};

	/**
	 * 用户授权角色
	 * @description 用户授权角色
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserAuthRoleInsertAuthRoleApi = (params: {
		userId: number;
		roleIds: number[]
	}) => {
		return http.put<RVoid>(
			`/system/user/authRole`, params
		);
	};

	/**
	 * 修改租户
	 * @description 修改租户
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantEdit_4Api = (params: SysTenantBo) => {
		return http.put<RVoid>(
			`/system/tenant`, params
		);
	};

	/**
	 * 新增租户
	 * @description 新增租户
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantAdd_4Api = (params: SysTenantBo) => {
		return http.post<RVoid>(
			`/system/tenant`, params
		);
	};

	/**
	 * 修改租户套餐
	 * @description 修改租户套餐
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantPackageEdit_5Api = (params: SysTenantPackageBo) => {
		return http.put<RVoid>(
			`/system/tenant/package`, params
		);
	};

	/**
	 * 新增租户套餐
	 * @description 新增租户套餐
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantPackageAdd_5Api = (params: SysTenantPackageBo) => {
		return http.post<RVoid>(
			`/system/tenant/package`, params
		);
	};

	/**
	 * 状态修改
	 * @description 状态修改
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantPackageChangeStatusChangeStatus_1Api = (params: SysTenantPackageBo) => {
		return http.put<RVoid>(
			`/system/tenant/package/changeStatus`, params
		);
	};

	/**
	 * 状态修改
	 * @description 状态修改
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantChangeStatusChangeStatus_2Api = (params: SysTenantBo) => {
		return http.put<RVoid>(
			`/system/tenant/changeStatus`, params
		);
	};

	/**
	 * 修改保存角色
	 * @description 修改保存角色
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleEdit_6Api = (params: SysRoleBo) => {
		return http.put<RVoid>(
			`/system/role`, params
		);
	};

	/**
	 * 新增角色
	 * @description 新增角色
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleAdd_6Api = (params: SysRoleBo) => {
		return http.post<RVoid>(
			`/system/role`, params
		);
	};

	/**
	 * 修改保存数据权限
	 * @description 修改保存数据权限
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleDataScopeDataScopeApi = (params: SysRoleBo) => {
		return http.put<RVoid>(
			`/system/role/dataScope`, params
		);
	};

	/**
	 * 状态修改
	 * @description 状态修改
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleChangeStatusChangeStatus_3Api = (params: SysRoleBo) => {
		return http.put<RVoid>(
			`/system/role/changeStatus`, params
		);
	};

	/**
	 * 批量选择用户授权
	 * @description 批量选择用户授权
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleAuthUserSelectAllSelectAuthUserAllApi = (params: {
		roleId: number;
		userIds: number[]
	}) => {
		return http.put<RVoid>(
			`/system/role/authUser/selectAll`, params
		);
	};

	/**
	 * 取消授权用户
	 * @description 取消授权用户
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleAuthUserCancelCancelAuthUserApi = (params: SysUserRole) => {
		return http.put<RVoid>(
			`/system/role/authUser/cancel`, params
		);
	};

	/**
	 * 批量取消授权用户
	 * @description 批量取消授权用户
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleAuthUserCancelAllCancelAuthUserAllApi = (params: {
		roleId: number;
		userIds: number[]
	}) => {
		return http.put<RVoid>(
			`/system/role/authUser/cancelAll`, params
		);
	};

	/**
	 * 修改岗位
	 * @description 修改岗位
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemPostEdit_7Api = (params: SysPostBo) => {
		return http.put<RVoid>(
			`/system/post`, params
		);
	};

	/**
	 * 新增岗位
	 * @description 新增岗位
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemPostAdd_7Api = (params: SysPostBo) => {
		return http.post<RVoid>(
			`/system/post`, params
		);
	};

	/**
	 * 修改通知公告
	 * @description 修改通知公告
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemNoticeEdit_8Api = (params: SysNoticeBo) => {
		return http.put<RVoid>(
			`/system/notice`, params
		);
	};

	/**
	 * 新增通知公告
	 * @description 新增通知公告
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemNoticeAdd_8Api = (params: SysNoticeBo) => {
		return http.post<RVoid>(
			`/system/notice`, params
		);
	};

	/**
	 * 修改菜单
	 * @description 修改菜单
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemMenuEdit_9Api = (params: SysMenuBo) => {
		return http.put<RVoid>(
			`/system/menu`, params
		);
	};

	/**
	 * 新增菜单
	 * @description 新增菜单
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemMenuAdd_9Api = (params: SysMenuBo) => {
		return http.post<RVoid>(
			`/system/menu`, params
		);
	};

	/**
	 * 修改字典类型
	 * @description 修改字典类型
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemDictTypeEdit_10Api = (params: SysDictTypeBo) => {
		return http.put<RVoid>(
			`/system/dict/type`, params
		);
	};

	/**
	 * 新增字典类型
	 * @description 新增字典类型
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemDictTypeAdd_10Api = (params: SysDictTypeBo) => {
		return http.post<RVoid>(
			`/system/dict/type`, params
		);
	};

	/**
	 * 修改保存字典类型
	 * @description 修改保存字典类型
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemDictDataEdit_11Api = (params: SysDictDataBo) => {
		return http.put<RVoid>(
			`/system/dict/data`, params
		);
	};

	/**
	 * 新增字典类型
	 * @description 新增字典类型
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemDictDataAdd_11Api = (params: SysDictDataBo) => {
		return http.post<RVoid>(
			`/system/dict/data`, params
		);
	};

	/**
	 * 修改部门
	 * @description 修改部门
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemDeptEdit_12Api = (params: SysDeptBo) => {
		return http.put<RVoid>(
			`/system/dept`, params
		);
	};

	/**
	 * 新增部门
	 * @description 新增部门
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemDeptAdd_12Api = (params: SysDeptBo) => {
		return http.post<RVoid>(
			`/system/dept`, params
		);
	};

	/**
	 * 修改参数配置
	 * @description 修改参数配置
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemConfigEdit_13Api = (params: SysConfigBo) => {
		return http.put<RVoid>(
			`/system/config`, params
		);
	};

	/**
	 * 新增参数配置
	 * @description 新增参数配置
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemConfigAdd_13Api = (params: SysConfigBo) => {
		return http.post<RVoid>(
			`/system/config`, params
		);
	};

	/**
	 * 根据参数键名修改参数配置
	 * @description 根据参数键名修改参数配置
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemConfigUpdateByKeyUpdateByKeyApi = (params: SysConfigBo) => {
		return http.put<RVoid>(
			`/system/config/updateByKey`, params
		);
	};

	/**
	 * 修改客户端管理
	 * @description 修改客户端管理
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemClientEdit_14Api = (params: SysClientBo) => {
		return http.put<RVoid>(
			`/system/client`, params
		);
	};

	/**
	 * 新增客户端管理
	 * @description 新增客户端管理
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemClientAdd_14Api = (params: SysClientBo) => {
		return http.post<RVoid>(
			`/system/client`, params
		);
	};

	/**
	 * 状态修改
	 * @description 状态修改
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemClientChangeStatusChangeStatus_4Api = (params: SysClientBo) => {
		return http.put<RVoid>(
			`/system/client/changeStatus`, params
		);
	};

	/**
	 * 头像上传
	 * @description 头像上传
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserProfileAvatarAvatarApi = (params: FormData) => {
		return http.post<RAvatarVo>(
			`/system/user/profile/avatar`, params, { headers: { "Content-Type": "multipart/form-data" } }
		);
	};

	/**
	 * 获取导入模板
	 * @description 获取导入模板
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserImportTemplateImportTemplateApi = () => {
		return http.post<ResultData<string>>(
			`/system/user/importTemplate`
		);
	};

	/**
	 * 导入数据
	 * @description 导入数据
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserImportDataImportDataApi = (params: FormData) => {
		return http.post<RVoid>(
			`/system/user/importData`, params, { headers: { "Content-Type": "multipart/form-data" } }
		);
	};

	/**
	 * 导出用户列表
	 * @description 导出用户列表
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemUserExportExport_3Api = (params: {
		user: SysUserBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/user/export`, params
		);
	};

	/**
	 * 导出租户套餐列表
	 * @description 导出租户套餐列表
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantPackageExportExport_4Api = (params: {
		bo: SysTenantPackageBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/tenant/package/export`, params
		);
	};

	/**
	 * 导出租户列表
	 * @description 导出租户列表
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemTenantExportExport_5Api = (params: {
		bo: SysTenantBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/tenant/export`, params
		);
	};

	/**
	 * 导出角色信息列表
	 * @description 导出角色信息列表
	 * @date 2024-12-22T13:24:59.345Z
	 */
	export const systemRoleExportExport_6Api = (params: {
		role: SysRoleBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/role/export`, params
		);
	};

	/**
	 * 导出岗位列表
	 * @description 导出岗位列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemPostExportExport_7Api = (params: {
		post: SysPostBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/post/export`, params
		);
	};

	/**
	 * 导出字典类型列表
	 * @description 导出字典类型列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemDictTypeExportExport_8Api = (params: {
		dictType: SysDictTypeBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/dict/type/export`, params
		);
	};

	/**
	 * 导出字典数据列表
	 * @description 导出字典数据列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemDictDataExportExport_9Api = (params: {
		dictData: SysDictDataBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/dict/data/export`, params
		);
	};

	/**
	 * 导出参数配置列表
	 * @description 导出参数配置列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemConfigExportExport_10Api = (params: {
		config: SysConfigBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/config/export`, params
		);
	};

	/**
	 * 导出客户端管理列表
	 * @description 导出客户端管理列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemClientExportExport_11Api = (params: {
		bo: SysClientBo
	}) => {
		return http.post<ResultData<string>>(
			`/system/client/export`, params
		);
	};

	/**
	 * 根据用户ID串批量获取用户基础信息
	 * @description 根据用户ID串批量获取用户基础信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserOptionselectOptionselectApi = (params: {
		userIds?: number[];
		deptId?: number
	}) => {
		return http.get<RListSysUserVo>(
			`/system/user/optionselect`, { params }
		);
	};

	/**
	 * 获取用户列表
	 * @description 获取用户列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserListList_3Api = (params: {
		user: SysUserBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysUserVo>(
			`/system/user/list`, { params }
		);
	};

	/**
	 * 获取部门下的所有用户信息
	 * @description 获取部门下的所有用户信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserListDeptListByDeptApi = (params: {
		deptId: number
	}) => {
		return http.get<RListSysUserVo>(
			`/system/user/list/dept/${params.deptId}`, { params }
		);
	};

	/**
	 * 获取用户信息
	 * @description 获取用户信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserGetInfoGetInfo_5Api = () => {
		return http.get<RUserInfoVo>(
			`/system/user/getInfo`
		);
	};

	/**
	 * 获取部门树列表
	 * @description 获取部门树列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserDeptTreeDeptTreeApi = (params: {
		dept: SysDeptBo
	}) => {
		return http.get<RListTreeLong>(
			`/system/user/deptTree`, { params }
		);
	};

	/**
	 * 根据用户编号获取授权角色
	 * @description 根据用户编号获取授权角色
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserAuthRoleAuthRoleApi = (params: {
		userId: number
	}) => {
		return http.get<RSysUserInfoVo>(
			`/system/user/authRole/${params.userId}`, { params }
		);
	};

	/**
	 * 根据用户编号获取详细信息
	 * @description 根据用户编号获取详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserGetInfo_6Api = (params: {
		userId: number
	}) => {
		return http.get<RSysUserInfoVo>(
			`/system/user/${params.userId}`, { params }
		);
	};

	/**
	 * 根据用户编号获取详细信息
	 * @description 根据用户编号获取详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemUserGetInfo_7Api = () => {
		return http.get<RSysUserInfoVo>(
			`/system/user/`
		);
	};

	/**
	 * 获取租户详细信息
	 * @description 获取租户详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantGetInfo_8Api = (params: {
		id: number
	}) => {
		return http.get<RSysTenantVo>(
			`/system/tenant/${params.id}`, { params }
		);
	};

	/**
	 * 同步租户套餐
	 * @description 同步租户套餐
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantSyncTenantPackageSyncTenantPackageApi = (params: {
		tenantId: string;
		packageId: number
	}) => {
		return http.get<RVoid>(
			`/system/tenant/syncTenantPackage`, { params }
		);
	};

	/**
	 * 同步租户字典
	 * @description 同步租户字典
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantSyncTenantDictSyncTenantDictApi = () => {
		return http.get<RVoid>(
			`/system/tenant/syncTenantDict`
		);
	};

	/**
	 * 获取租户套餐详细信息
	 * @description 获取租户套餐详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantPackageGetInfo_9Api = (params: {
		packageId: number
	}) => {
		return http.get<RSysTenantPackageVo>(
			`/system/tenant/package/${params.packageId}`, { params }
		);
	};

	/**
	 * 查询租户套餐下拉选列表
	 * @description 查询租户套餐下拉选列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantPackageSelectListSelectList_1Api = () => {
		return http.get<RListSysTenantPackageVo>(
			`/system/tenant/package/selectList`
		);
	};

	/**
	 * 查询租户套餐列表
	 * @description 查询租户套餐列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantPackageListList_4Api = (params: {
		bo: SysTenantPackageBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysTenantPackageVo>(
			`/system/tenant/package/list`, { params }
		);
	};

	/**
	 * 查询租户列表
	 * @description 查询租户列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantListList_5Api = (params: {
		bo: SysTenantBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysTenantVo>(
			`/system/tenant/list`, { params }
		);
	};

	/**
	 * 动态切换租户
	 * @description 动态切换租户
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantDynamicDynamicTenantApi = (params: {
		tenantId: string
	}) => {
		return http.get<RVoid>(
			`/system/tenant/dynamic/${params.tenantId}`, { params }
		);
	};

	/**
	 * 清除动态租户
	 * @description 清除动态租户
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemTenantDynamicClearDynamicClearApi = () => {
		return http.get<RVoid>(
			`/system/tenant/dynamic/clear`
		);
	};

	/**
	 * 查询社会化关系列表
	 * @description 查询社会化关系列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemSocialListList_6Api = () => {
		return http.get<RListSysSocialVo>(
			`/system/social/list`
		);
	};

	/**
	 * 根据角色编号获取详细信息
	 * @description 根据角色编号获取详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemRoleGetInfo_10Api = (params: {
		roleId: number
	}) => {
		return http.get<RSysRoleVo>(
			`/system/role/${params.roleId}`, { params }
		);
	};

	/**
	 * 获取角色选择框列表
	 * @description 获取角色选择框列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemRoleOptionselectOptionselect_1Api = (params: {
		roleIds?: number[]
	}) => {
		return http.get<RListSysRoleVo>(
			`/system/role/optionselect`, { params }
		);
	};

	/**
	 * 获取角色信息列表
	 * @description 获取角色信息列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemRoleListList_7Api = (params: {
		role: SysRoleBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysRoleVo>(
			`/system/role/list`, { params }
		);
	};

	/**
	 * 获取对应角色部门树列表
	 * @description 获取对应角色部门树列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemRoleDeptTreeRoleDeptTreeselectApi = (params: {
		roleId: number
	}) => {
		return http.get<RDeptTreeSelectVo>(
			`/system/role/deptTree/${params.roleId}`, { params }
		);
	};

	/**
	 * 查询未分配用户角色列表
	 * @description 查询未分配用户角色列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemRoleAuthUserUnallocatedListUnallocatedListApi = (params: {
		user: SysUserBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysUserVo>(
			`/system/role/authUser/unallocatedList`, { params }
		);
	};

	/**
	 * 查询已分配用户角色列表
	 * @description 查询已分配用户角色列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemRoleAuthUserAllocatedListAllocatedListApi = (params: {
		user: SysUserBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysUserVo>(
			`/system/role/authUser/allocatedList`, { params }
		);
	};

	/**
	 * 根据岗位编号获取详细信息
	 * @description 根据岗位编号获取详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemPostGetInfo_11Api = (params: {
		postId: number
	}) => {
		return http.get<RSysPostVo>(
			`/system/post/${params.postId}`, { params }
		);
	};

	/**
	 * 获取岗位选择框列表
	 * @description 获取岗位选择框列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemPostOptionselectOptionselect_2Api = (params: {
		postIds?: number[];
		deptId?: number
	}) => {
		return http.get<RListSysPostVo>(
			`/system/post/optionselect`, { params }
		);
	};

	/**
	 * 获取岗位列表
	 * @description 获取岗位列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemPostListList_8Api = (params: {
		post: SysPostBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysPostVo>(
			`/system/post/list`, { params }
		);
	};

	/**
	 * 根据通知公告编号获取详细信息
	 * @description 根据通知公告编号获取详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemNoticeGetInfo_12Api = (params: {
		noticeId: number
	}) => {
		return http.get<RSysNoticeVo>(
			`/system/notice/${params.noticeId}`, { params }
		);
	};

	/**
	 * 获取通知公告列表
	 * @description 获取通知公告列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemNoticeListList_9Api = (params: {
		notice: SysNoticeBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysNoticeVo>(
			`/system/notice/list`, { params }
		);
	};

	/**
	 * 根据菜单编号获取详细信息
	 * @description 根据菜单编号获取详细信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemMenuGetInfo_13Api = (params: {
		menuId: number
	}) => {
		return http.get<RSysMenuVo>(
			`/system/menu/${params.menuId}`, { params }
		);
	};

	/**
	 * 删除菜单
	 * @description 删除菜单
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemMenuRemove_15Api = (params: {
		menuId: number
	}) => {
		return http.delete<RVoid>(
			`/system/menu/${params.menuId}`, { params }
		);
	};

	/**
	 * 获取菜单下拉树列表
	 * @description 获取菜单下拉树列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemMenuTreeselectTreeselectApi = (params: {
		menu: SysMenuBo
	}) => {
		return http.get<RListTreeLong>(
			`/system/menu/treeselect`, { params }
		);
	};

	/**
	 * 加载对应租户套餐菜单列表树
	 * @description 加载对应租户套餐菜单列表树
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemMenuTenantPackageMenuTreeselectTenantPackageMenuTreeselectApi = (params: {
		packageId: number
	}) => {
		return http.get<RMenuTreeSelectVo>(
			`/system/menu/tenantPackageMenuTreeselect/${params.packageId}`, { params }
		);
	};

	/**
	 * 加载对应角色菜单列表树
	 * @description 加载对应角色菜单列表树
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemMenuRoleMenuTreeselectRoleMenuTreeselectApi = (params: {
		roleId: number
	}) => {
		return http.get<RMenuTreeSelectVo>(
			`/system/menu/roleMenuTreeselect/${params.roleId}`, { params }
		);
	};

	/**
	 * 获取菜单列表
	 * @description 获取菜单列表
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemMenuListList_10Api = (params: {
		menu: SysMenuBo
	}) => {
		return http.get<RListSysMenuVo>(
			`/system/menu/list`, { params }
		);
	};

	/**
	 * 获取路由信息
	 * @description 获取路由信息
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemMenuGetRoutersGetRoutersApi = () => {
		return http.get<RListRouterVo>(
			`/system/menu/getRouters`
		);
	};

	/**
	 * 查询字典类型详细
	 * @description 查询字典类型详细
	 * @date 2024-12-22T13:24:59.346Z
	 */
	export const systemDictTypeGetInfo_14Api = (params: {
		dictId: number
	}) => {
		return http.get<RSysDictTypeVo>(
			`/system/dict/type/${params.dictId}`, { params }
		);
	};

	/**
	 * 获取字典选择框列表
	 * @description 获取字典选择框列表
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictTypeOptionselectOptionselect_3Api = () => {
		return http.get<RListSysDictTypeVo>(
			`/system/dict/type/optionselect`
		);
	};

	/**
	 * 查询字典类型列表
	 * @description 查询字典类型列表
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictTypeListList_11Api = (params: {
		dictType: SysDictTypeBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysDictTypeVo>(
			`/system/dict/type/list`, { params }
		);
	};

	/**
	 * 查询字典数据详细
	 * @description 查询字典数据详细
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictDataGetInfo_15Api = (params: {
		dictCode: number
	}) => {
		return http.get<RSysDictDataVo>(
			`/system/dict/data/${params.dictCode}`, { params }
		);
	};

	/**
	 * 根据字典类型查询字典数据信息
	 * @description 根据字典类型查询字典数据信息
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictDataTypeDictTypeApi = (params: {
		dictType: string
	}) => {
		return http.get<RListSysDictDataVo>(
			`/system/dict/data/type/${params.dictType}`, { params }
		);
	};

	/**
	 * 查询字典数据列表
	 * @description 查询字典数据列表
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictDataListList_12Api = (params: {
		dictData: SysDictDataBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysDictDataVo>(
			`/system/dict/data/list`, { params }
		);
	};

	/**
	 * 根据部门编号获取详细信息
	 * @description 根据部门编号获取详细信息
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDeptGetInfo_16Api = (params: {
		deptId: number
	}) => {
		return http.get<RSysDeptVo>(
			`/system/dept/${params.deptId}`, { params }
		);
	};

	/**
	 * 删除部门
	 * @description 删除部门
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDeptRemove_18Api = (params: {
		deptId: number
	}) => {
		return http.delete<RVoid>(
			`/system/dept/${params.deptId}`, { params }
		);
	};

	/**
	 * 获取部门选择框列表
	 * @description 获取部门选择框列表
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDeptOptionselectOptionselect_4Api = (params: {
		deptIds?: number[]
	}) => {
		return http.get<RListSysDeptVo>(
			`/system/dept/optionselect`, { params }
		);
	};

	/**
	 * 获取部门列表
	 * @description 获取部门列表
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDeptListList_13Api = (params: {
		dept: SysDeptBo
	}) => {
		return http.get<RListSysDeptVo>(
			`/system/dept/list`, { params }
		);
	};

	/**
	 * 查询部门列表（排除节点）
	 * @description 查询部门列表（排除节点）
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDeptListExcludeExcludeChildApi = (params: {
		deptId: number
	}) => {
		return http.get<RListSysDeptVo>(
			`/system/dept/list/exclude/${params.deptId}`, { params }
		);
	};

	/**
	 * 根据参数编号获取详细信息
	 * @description 根据参数编号获取详细信息
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemConfigGetInfo_17Api = (params: {
		configId: number
	}) => {
		return http.get<RSysConfigVo>(
			`/system/config/${params.configId}`, { params }
		);
	};

	/**
	 * 获取参数配置列表
	 * @description 获取参数配置列表
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemConfigListList_14Api = (params: {
		config: SysConfigBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysConfigVo>(
			`/system/config/list`, { params }
		);
	};

	/**
	 * 根据参数键名查询参数值
	 * @description 根据参数键名查询参数值
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemConfigConfigKeyGetConfigKeyApi = (params: {
		configKey: string
	}) => {
		return http.get<RString>(
			`/system/config/configKey/${params.configKey}`, { params }
		);
	};

	/**
	 * 获取客户端管理详细信息
	 * @description 获取客户端管理详细信息
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemClientGetInfo_18Api = (params: {
		id: number
	}) => {
		return http.get<RSysClientVo>(
			`/system/client/${params.id}`, { params }
		);
	};

	/**
	 * 查询客户端管理列表
	 * @description 查询客户端管理列表
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemClientListList_15Api = (params: {
		bo: SysClientBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysClientVo>(
			`/system/client/list`, { params }
		);
	};

	/**
	 * 删除用户
	 * @description 删除用户
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemUserRemove_9Api = (params: {
		userIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/user/${params.userIds}`, { params }
		);
	};

	/**
	 * 删除租户
	 * @description 删除租户
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemTenantRemove_10Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/tenant/${params.ids}`, { params }
		);
	};

	/**
	 * 删除租户套餐
	 * @description 删除租户套餐
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemTenantPackageRemove_11Api = (params: {
		packageIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/tenant/package/${params.packageIds}`, { params }
		);
	};

	/**
	 * 删除角色
	 * @description 删除角色
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemRoleRemove_12Api = (params: {
		roleIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/role/${params.roleIds}`, { params }
		);
	};

	/**
	 * 删除岗位
	 * @description 删除岗位
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemPostRemove_13Api = (params: {
		postIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/post/${params.postIds}`, { params }
		);
	};

	/**
	 * 删除通知公告
	 * @description 删除通知公告
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemNoticeRemove_14Api = (params: {
		noticeIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/notice/${params.noticeIds}`, { params }
		);
	};

	/**
	 * 删除字典类型
	 * @description 删除字典类型
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictTypeRemove_16Api = (params: {
		dictIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/dict/type/${params.dictIds}`, { params }
		);
	};

	/**
	 * 刷新字典缓存
	 * @description 刷新字典缓存
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictTypeRefreshCacheRefreshCacheApi = () => {
		return http.delete<RVoid>(
			`/system/dict/type/refreshCache`
		);
	};

	/**
	 * 删除字典类型
	 * @description 删除字典类型
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemDictDataRemove_17Api = (params: {
		dictCodes: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/dict/data/${params.dictCodes}`, { params }
		);
	};

	/**
	 * 删除参数配置
	 * @description 删除参数配置
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemConfigRemove_19Api = (params: {
		configIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/config/${params.configIds}`, { params }
		);
	};

	/**
	 * 刷新参数缓存
	 * @description 刷新参数缓存
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemConfigRefreshCacheRefreshCache_1Api = () => {
		return http.delete<RVoid>(
			`/system/config/refreshCache`
		);
	};

	/**
	 * 删除客户端管理
	 * @description 删除客户端管理
	 * @date 2024-12-22T13:24:59.347Z
	 */
	export const systemClientRemove_20Api = (params: {
		ids: number[]
	}) => {
		return http.delete<RVoid>(
			`/system/client/${params.ids}`, { params }
		);
	};
