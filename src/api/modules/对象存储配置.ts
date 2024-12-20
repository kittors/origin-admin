import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysOssConfigBo, RSysOssConfigVo, TableDataInfoSysOssConfigVo, PageQuery } from './types/api-types';

/**
 * @name 对象存储配置模块
 */

			/**
			 * 修改对象存储配置
			 * @description 修改对象存储配置
			 */
			export const resourceOssConfigEdit_12Api = (params: SysOssConfigBo) => {
				return http.put<ResultData<RVoid>>(
					`/resource/oss/config`, params
				);
			};

			/**
			 * 新增对象存储配置
			 * @description 新增对象存储配置
			 */
			export const resourceOssConfigAdd_12Api = (params: SysOssConfigBo) => {
				return http.post<ResultData<RVoid>>(
					`/resource/oss/config`, params
				);
			};

			/**
			 * 状态修改
			 * @description 状态修改
			 */
			export const resourceOssConfigChangeStatusChangeStatus_5Api = (params: SysOssConfigBo) => {
				return http.put<ResultData<RVoid>>(
					`/resource/oss/config/changeStatus`, params
				);
			};

			/**
			 * 获取对象存储配置详细信息
			 * @description 获取对象存储配置详细信息
			 */
			export const resourceOssConfigGetInfo_14Api = (params: {
		ossConfigId: number
	}) => {
				return http.get<ResultData<RSysOssConfigVo>>(
					`/resource/oss/config/${params.ossConfigId}`, { params }
				);
			};

			/**
			 * 查询对象存储配置列表
			 * @description 查询对象存储配置列表
			 */
			export const resourceOssConfigListList_14Api = (params: {
		bo: SysOssConfigBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysOssConfigVo>>(
					`/resource/oss/config/list`, { params }
				);
			};

			/**
			 * 删除对象存储配置
			 * @description 删除对象存储配置
			 */
			export const resourceOssConfigRemove_14Api = (params: {
		ossConfigIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/resource/oss/config/${params.ossConfigIds}`, { params }
				);
			};
