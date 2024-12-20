import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RSysOssUploadVo, TableDataInfoSysOssVo, SysOssBo, PageQuery, RListSysOssVo, RVoid } from './types/api-types';

/**
 * @name 文件上传 控制层模块
 */

			/**
			 * 上传OSS对象存储
			 * @description 上传OSS对象存储
			 */
			export const resourceOssUploadUploadApi = (params: FormData) => {
				return http.post<ResultData<RSysOssUploadVo>>(
					`/resource/oss/upload`, params, { headers: { "Content-Type": "multipart/form-data" } }
				);
			};

			/**
			 * 查询OSS对象存储列表
			 * @description 查询OSS对象存储列表
			 */
			export const resourceOssListList_13Api = (params: {
		bo: SysOssBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysOssVo>>(
					`/resource/oss/list`, { params }
				);
			};

			/**
			 * 查询OSS对象基于id串
			 * @description 查询OSS对象基于id串
			 */
			export const resourceOssListByIdsListByIdsApi = (params: {
		ossIds: number[]
	}) => {
				return http.get<ResultData<RListSysOssVo>>(
					`/resource/oss/listByIds/${params.ossIds}`, { params }
				);
			};

			/**
			 * 下载OSS对象
			 * @description 下载OSS对象
			 */
			export const resourceOssDownloadDownloadApi = (params: {
		ossId: number
	}) => {
				return http.get<unknown>(
					`/resource/oss/download/${params.ossId}`, { params }
				);
			};

			/**
			 * 删除OSS对象存储
			 * @description 删除OSS对象存储
			 */
			export const resourceOssRemove_13Api = (params: {
		ossIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/resource/oss/${params.ossIds}`, { params }
				);
			};
