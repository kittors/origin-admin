import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysNoticeBo, RSysNoticeVo, TableDataInfoSysNoticeVo, PageQuery } from './types/api-types';

/**
 * @name 公告 信息操作处理模块
 */

			/**
			 * 修改通知公告
			 * @description 修改通知公告
			 */
			export const systemNoticeEdit_5Api = (params: SysNoticeBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/notice`, params
				);
			};

			/**
			 * 新增通知公告
			 * @description 新增通知公告
			 */
			export const systemNoticeAdd_5Api = (params: SysNoticeBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/notice`, params
				);
			};

			/**
			 * 根据通知公告编号获取详细信息
			 * @description 根据通知公告编号获取详细信息
			 */
			export const systemNoticeGetInfo_7Api = (params: {
		noticeId: number
	}) => {
				return http.get<ResultData<RSysNoticeVo>>(
					`/system/notice/${params.noticeId}`, { params }
				);
			};

			/**
			 * 获取通知公告列表
			 * @description 获取通知公告列表
			 */
			export const systemNoticeListList_6Api = (params: {
		notice: SysNoticeBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysNoticeVo>>(
					`/system/notice/list`, { params }
				);
			};

			/**
			 * 删除通知公告
			 * @description 删除通知公告
			 */
			export const systemNoticeRemove_6Api = (params: {
		noticeIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/notice/${params.noticeIds}`, { params }
				);
			};
