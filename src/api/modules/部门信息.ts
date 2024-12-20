import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysDeptBo, RSysDeptVo, RListSysDeptVo } from './types/api-types';

/**
 * @name 部门信息模块
 */

			/**
			 * 修改部门
			 * @description 修改部门
			 */
			export const systemDeptEdit_9Api = (params: SysDeptBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/dept`, params
				);
			};

			/**
			 * 新增部门
			 * @description 新增部门
			 */
			export const systemDeptAdd_9Api = (params: SysDeptBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/dept`, params
				);
			};

			/**
			 * 根据部门编号获取详细信息
			 * @description 根据部门编号获取详细信息
			 */
			export const systemDeptGetInfo_11Api = (params: {
		deptId: number
	}) => {
				return http.get<ResultData<RSysDeptVo>>(
					`/system/dept/${params.deptId}`, { params }
				);
			};

			/**
			 * 删除部门
			 * @description 删除部门
			 */
			export const systemDeptRemove_10Api = (params: {
		deptId: number
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/dept/${params.deptId}`, { params }
				);
			};

			/**
			 * 获取部门选择框列表
			 * @description 获取部门选择框列表
			 */
			export const systemDeptOptionselectOptionselect_4Api = (params: {
		deptIds?: number[]
	}) => {
				return http.get<ResultData<RListSysDeptVo>>(
					`/system/dept/optionselect`, { params }
				);
			};

			/**
			 * 获取部门列表
			 * @description 获取部门列表
			 */
			export const systemDeptListList_10Api = (params: {
		dept: SysDeptBo
	}) => {
				return http.get<ResultData<RListSysDeptVo>>(
					`/system/dept/list`, { params }
				);
			};

			/**
			 * 查询部门列表（排除节点）
			 * @description 查询部门列表（排除节点）
			 */
			export const systemDeptListExcludeExcludeChildApi = (params: {
		deptId: number
	}) => {
				return http.get<ResultData<RListSysDeptVo>>(
					`/system/dept/list/exclude/${params.deptId}`, { params }
				);
			};
