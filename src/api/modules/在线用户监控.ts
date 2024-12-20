import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, TableDataInfoSysUserOnline } from './types/api-types';

/**
 * @name 在线用户监控模块
 */

			/**
			 * 强退当前在线设备
			 * @description 强退当前在线设备
			 */
			export const monitorOnlineRemoveApi = (params: {
		tokenId: string
	}) => {
				return http.post<ResultData<RVoid>>(
					`/monitor/online/${params.tokenId}`, params
				);
			};

			/**
			 * 强退用户
			 * @description 强退用户
			 */
			export const monitorOnlineForceLogoutApi = (params: {
		tokenId: string
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/monitor/online/${params.tokenId}`, { params }
				);
			};

			/**
			 * 获取当前用户登录在线设备
			 * @description 获取当前用户登录在线设备
			 */
			export const monitorOnlineGetInfo_15Api = () => {
				return http.get<ResultData<TableDataInfoSysUserOnline>>(
					`/monitor/online`
				);
			};

			/**
			 * 获取在线用户监控列表
			 * @description 获取在线用户监控列表
			 */
			export const monitorOnlineListList_16Api = (params: {
		ipaddr: string;
		userName: string
	}) => {
				return http.get<ResultData<TableDataInfoSysUserOnline>>(
					`/monitor/online/list`, { params }
				);
			};
