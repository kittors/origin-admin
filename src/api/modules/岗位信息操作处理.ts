import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysPostBo, RSysPostVo, RListSysPostVo, TableDataInfoSysPostVo, PageQuery } from './types/api-types';

/**
 * @name 岗位信息操作处理模块
 */

			/**
			 * 修改岗位
			 * @description 修改岗位
			 */
			export const systemPostEdit_4Api = (params: SysPostBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/post`, params
				);
			};

			/**
			 * 新增岗位
			 * @description 新增岗位
			 */
			export const systemPostAdd_4Api = (params: SysPostBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/post`, params
				);
			};

			/**
			 * 导出岗位列表
			 * @description 导出岗位列表
			 */
			export const systemPostExportExport_4Api = (params: {
		post: SysPostBo
	}) => {
				return http.post<unknown>(
					`/system/post/export`, params
				);
			};

			/**
			 * 根据岗位编号获取详细信息
			 * @description 根据岗位编号获取详细信息
			 */
			export const systemPostGetInfo_6Api = (params: {
		postId: number
	}) => {
				return http.get<ResultData<RSysPostVo>>(
					`/system/post/${params.postId}`, { params }
				);
			};

			/**
			 * 获取岗位选择框列表
			 * @description 获取岗位选择框列表
			 */
			export const systemPostOptionselectOptionselect_2Api = (params: {
		postIds?: number[];
		deptId?: number
	}) => {
				return http.get<ResultData<RListSysPostVo>>(
					`/system/post/optionselect`, { params }
				);
			};

			/**
			 * 获取岗位列表
			 * @description 获取岗位列表
			 */
			export const systemPostListList_5Api = (params: {
		post: SysPostBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysPostVo>>(
					`/system/post/list`, { params }
				);
			};

			/**
			 * 删除岗位
			 * @description 删除岗位
			 */
			export const systemPostRemove_5Api = (params: {
		postIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/post/${params.postIds}`, { params }
				);
			};
