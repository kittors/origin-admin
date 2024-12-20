import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RVoid, SysDictTypeBo, SysDictDataBo, RSysDictTypeVo, RListSysDictTypeVo, TableDataInfoSysDictTypeVo, PageQuery, RSysDictDataVo, RListSysDictDataVo, TableDataInfoSysDictDataVo } from './types/api-types';

/**
 * @name 数据字典信息模块
 */

			/**
			 * 修改字典类型
			 * @description 修改字典类型
			 */
			export const systemDictTypeEdit_7Api = (params: SysDictTypeBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/dict/type`, params
				);
			};

			/**
			 * 新增字典类型
			 * @description 新增字典类型
			 */
			export const systemDictTypeAdd_7Api = (params: SysDictTypeBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/dict/type`, params
				);
			};

			/**
			 * 修改保存字典类型
			 * @description 修改保存字典类型
			 */
			export const systemDictDataEdit_8Api = (params: SysDictDataBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/dict/data`, params
				);
			};

			/**
			 * 新增字典类型
			 * @description 新增字典类型
			 */
			export const systemDictDataAdd_8Api = (params: SysDictDataBo) => {
				return http.post<ResultData<RVoid>>(
					`/system/dict/data`, params
				);
			};

			/**
			 * 导出字典类型列表
			 * @description 导出字典类型列表
			 */
			export const systemDictTypeExportExport_5Api = (params: {
		dictType: SysDictTypeBo
	}) => {
				return http.post<unknown>(
					`/system/dict/type/export`, params
				);
			};

			/**
			 * 导出字典数据列表
			 * @description 导出字典数据列表
			 */
			export const systemDictDataExportExport_6Api = (params: {
		dictData: SysDictDataBo
	}) => {
				return http.post<unknown>(
					`/system/dict/data/export`, params
				);
			};

			/**
			 * 查询字典类型详细
			 * @description 查询字典类型详细
			 */
			export const systemDictTypeGetInfo_9Api = (params: {
		dictId: number
	}) => {
				return http.get<ResultData<RSysDictTypeVo>>(
					`/system/dict/type/${params.dictId}`, { params }
				);
			};

			/**
			 * 获取字典选择框列表
			 * @description 获取字典选择框列表
			 */
			export const systemDictTypeOptionselectOptionselect_3Api = () => {
				return http.get<ResultData<RListSysDictTypeVo>>(
					`/system/dict/type/optionselect`
				);
			};

			/**
			 * 查询字典类型列表
			 * @description 查询字典类型列表
			 */
			export const systemDictTypeListList_8Api = (params: {
		dictType: SysDictTypeBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysDictTypeVo>>(
					`/system/dict/type/list`, { params }
				);
			};

			/**
			 * 查询字典数据详细
			 * @description 查询字典数据详细
			 */
			export const systemDictDataGetInfo_10Api = (params: {
		dictCode: number
	}) => {
				return http.get<ResultData<RSysDictDataVo>>(
					`/system/dict/data/${params.dictCode}`, { params }
				);
			};

			/**
			 * 根据字典类型查询字典数据信息
			 * @description 根据字典类型查询字典数据信息
			 */
			export const systemDictDataTypeDictTypeApi = (params: {
		dictType: string
	}) => {
				return http.get<ResultData<RListSysDictDataVo>>(
					`/system/dict/data/type/${params.dictType}`, { params }
				);
			};

			/**
			 * 查询字典数据列表
			 * @description 查询字典数据列表
			 */
			export const systemDictDataListList_9Api = (params: {
		dictData: SysDictDataBo;
		pageQuery: PageQuery
	}) => {
				return http.get<ResultData<TableDataInfoSysDictDataVo>>(
					`/system/dict/data/list`, { params }
				);
			};

			/**
			 * 删除字典类型
			 * @description 删除字典类型
			 */
			export const systemDictTypeRemove_8Api = (params: {
		dictIds: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/dict/type/${params.dictIds}`, { params }
				);
			};

			/**
			 * 刷新字典缓存
			 * @description 刷新字典缓存
			 */
			export const systemDictTypeRefreshCacheRefreshCacheApi = () => {
				return http.delete<ResultData<RVoid>>(
					`/system/dict/type/refreshCache`
				);
			};

			/**
			 * 删除字典类型
			 * @description 删除字典类型
			 */
			export const systemDictDataRemove_9Api = (params: {
		dictCodes: number[]
	}) => {
				return http.delete<ResultData<RVoid>>(
					`/system/dict/data/${params.dictCodes}`, { params }
				);
			};
