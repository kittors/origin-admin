import http from '@/api';
import { ResultData } from '@/api/interface';
import type { SysOperLogBo, RVoid, SysLogininforBo, TableDataInfoSysOperLogVo, PageQuery, TableDataInfoSysUserOnline, TableDataInfoSysLogininforVo, RCacheListInfoVo } from './types/api-types';


	/**
	 * 导出操作日志记录列表
	 * @description 导出操作日志记录列表
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorOperlogExportExport_12Api = (params: {
		operLog: SysOperLogBo
	}) => {
		return http.post<ResultData<string>>(
			`/monitor/operlog/export`, params
		);
	};

	/**
	 * 强退当前在线设备
	 * @description 强退当前在线设备
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorOnlineRemoveApi = (params: {
		tokenId: string
	}) => {
		return http.post<RVoid>(
			`/monitor/online/${params.tokenId}`, params
		);
	};

	/**
	 * 强退用户
	 * @description 强退用户
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorOnlineForceLogoutApi = (params: {
		tokenId: string
	}) => {
		return http.delete<RVoid>(
			`/monitor/online/${params.tokenId}`, { params }
		);
	};

	/**
	 * 导出系统访问记录列表
	 * @description 导出系统访问记录列表
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorLogininforExportExport_13Api = (params: {
		logininfor: SysLogininforBo
	}) => {
		return http.post<ResultData<string>>(
			`/monitor/logininfor/export`, params
		);
	};

	/**
	 * 获取操作日志记录列表
	 * @description 获取操作日志记录列表
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorOperlogListList_18Api = (params: {
		operLog: SysOperLogBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysOperLogVo>(
			`/monitor/operlog/list`, { params }
		);
	};

	/**
	 * 获取当前用户登录在线设备
	 * @description 获取当前用户登录在线设备
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorOnlineGetInfo_20Api = () => {
		return http.get<TableDataInfoSysUserOnline>(
			`/monitor/online`
		);
	};

	/**
	 * 获取在线用户监控列表
	 * @description 获取在线用户监控列表
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorOnlineListList_19Api = (params: {
		ipaddr: string;
		userName: string
	}) => {
		return http.get<TableDataInfoSysUserOnline>(
			`/monitor/online/list`, { params }
		);
	};

	/**
	 * 
	 * @description 
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorLogininforUnlockUnlockApi = (params: {
		userName: string
	}) => {
		return http.get<RVoid>(
			`/monitor/logininfor/unlock/${params.userName}`, { params }
		);
	};

	/**
	 * 获取系统访问记录列表
	 * @description 获取系统访问记录列表
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorLogininforListList_20Api = (params: {
		logininfor: SysLogininforBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysLogininforVo>(
			`/monitor/logininfor/list`, { params }
		);
	};

	/**
	 * 获取缓存监控列表
	 * @description 获取缓存监控列表
	 * @date 2024-12-22T13:24:59.351Z
	 */
	export const monitorCacheGetInfo_21Api = () => {
		return http.get<RCacheListInfoVo>(
			`/monitor/cache`
		);
	};

	/**
	 * 批量删除操作日志记录
	 * @description 批量删除操作日志记录
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const monitorOperlogRemove_23Api = (params: {
		operIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/monitor/operlog/${params.operIds}`, { params }
		);
	};

	/**
	 * 清理操作日志记录
	 * @description 清理操作日志记录
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const monitorOperlogCleanCleanApi = () => {
		return http.delete<RVoid>(
			`/monitor/operlog/clean`
		);
	};

	/**
	 * 批量删除登录日志
	 * @description 批量删除登录日志
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const monitorLogininforRemove_24Api = (params: {
		infoIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/monitor/logininfor/${params.infoIds}`, { params }
		);
	};

	/**
	 * 清理系统访问记录
	 * @description 清理系统访问记录
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const monitorLogininforCleanClean_1Api = () => {
		return http.delete<RVoid>(
			`/monitor/logininfor/clean`
		);
	};
