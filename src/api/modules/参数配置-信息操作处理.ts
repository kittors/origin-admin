import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysConfigBo, RSysConfigVo, TableDataInfoSysConfigVo, PageQuery, RString } from './types/api-types';

/**
 * @name 参数配置 信息操作处理模块
 */

			/**
			 * 修改参数配置
			 * @description 修改参数配置
			 */
			export const systemConfigEdit_10Api = (params: SysConfigBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/config`, params
				);
			};

			/**
			 * 新增参数配置
			 * @description 新增参数配置
			 */
			export const systemConfigAdd_10Api = (params: SysConfigBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/config`, params
				);
			};

			/**
			 * 根据参数键名修改参数配置
			 * @description 根据参数键名修改参数配置
			 */
			export const systemConfigUpdateByKeyUpdateByKeyApi = (params: SysConfigBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/config/updateByKey`, params
				);
			};

			/**
			 * 导出参数配置列表
			 * @description 导出参数配置列表
			 */
			export const systemConfigExportExport_7Api = (params: {
		config: SysConfigBo
	}) => {
				return http.post<unknown>(
					`/system/config/export`, params
				);
			};

			/**
			 * 根据参数编号获取详细信息
			 * @description 根据参数编号获取详细信息
			 */
			export const systemConfigGetInfo_12Api = (params: {
		configId: number
	}) => {
				return http.get<ResultData<RSysConfigVo>>(
					`/system/config/${params.configId}`, { params }
				);
			};

			/**
			 * 获取参数配置列表
			 * @description 获取参数配置列表
			 */
			export const systemConfigListList_11Api = (params: {
		config: SysConfigBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysConfigVo>>(
					`/system/config/list`, { params }
				);
			};

			/**
			 * 根据参数键名查询参数值
			 * @description 根据参数键名查询参数值
			 */
			export const systemConfigConfigKeyGetConfigKeyApi = (params: {
		configKey: string
	}) => {
				return http.get<ResultData<RString>>(
					`/system/config/configKey/${params.configKey}`, { params }
				);
			};

			/**
			 * 删除参数配置
			 * @description 删除参数配置
			 */
			export const systemConfigRemove_11Api = (params: {
		configIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/config/${params.configIds}`, { params }
				);
			};

			/**
			 * 刷新参数缓存
			 * @description 刷新参数缓存
			 */
			export const systemConfigRefreshCacheRefreshCache_1Api = () => {
				return http.delete<ResultData<RVoid>>(
					`/system/config/refreshCache`
				);
			};
