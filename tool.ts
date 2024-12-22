import http from '@/api';
import { ResultData } from '@/api/interface';
import type { RVoid, GenTable, RMapStringObject, RMapStringString, TableDataInfoGenTable, PageQuery, RObject, TableDataInfoGenTableColumn } from './types/api-types';


	/**
	 * 修改保存代码生成业务
	 * @description 修改保存代码生成业务
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenEditSaveApi = (params: GenTable) => {
		return http.put<RVoid>(
			`/tool/gen`, params
		);
	};

	/**
	 * 导入表结构（保存）
	 * @description 导入表结构（保存）
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenImportTableImportTableSaveApi = (params: {
		tables: string;
		dataName: string
	}) => {
		return http.post<RVoid>(
			`/tool/gen/importTable`, params
		);
	};

	/**
	 * 修改代码生成业务
	 * @description 修改代码生成业务
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenGetInfo_4Api = (params: {
		tableId: number
	}) => {
		return http.get<RMapStringObject>(
			`/tool/gen/${params.tableId}`, { params }
		);
	};

	/**
	 * 同步数据库
	 * @description 同步数据库
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenSynchDbSynchDbApi = (params: {
		tableId: number
	}) => {
		return http.get<RVoid>(
			`/tool/gen/synchDb/${params.tableId}`, { params }
		);
	};

	/**
	 * 预览代码
	 * @description 预览代码
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenPreviewPreviewApi = (params: {
		tableId: number
	}) => {
		return http.get<RMapStringString>(
			`/tool/gen/preview/${params.tableId}`, { params }
		);
	};

	/**
	 * 查询代码生成列表
	 * @description 查询代码生成列表
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenListGenListApi = (params: {
		genTable: GenTable;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoGenTable>(
			`/tool/gen/list`, { params }
		);
	};

	/**
	 * 查询数据源名称列表
	 * @description 查询数据源名称列表
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenGetDataNamesGetCurrentDataSourceNameListApi = () => {
		return http.get<RObject>(
			`/tool/gen/getDataNames`
		);
	};

	/**
	 * 生成代码（自定义路径）
	 * @description 生成代码（自定义路径）
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenGenCodeGenCodeApi = (params: {
		tableId: number
	}) => {
		return http.get<RVoid>(
			`/tool/gen/genCode/${params.tableId}`, { params }
		);
	};

	/**
	 * 生成代码（下载方式）
	 * @description 生成代码（下载方式）
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenDownloadDownloadApi = (params: {
		tableId: number
	}) => {
		return http.get<ResultData<string>>(
			`/tool/gen/download/${params.tableId}`, { params }
		);
	};

	/**
	 * 查询数据库列表
	 * @description 查询数据库列表
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenDbListDataListApi = (params: {
		genTable: GenTable;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoGenTable>(
			`/tool/gen/db/list`, { params }
		);
	};

	/**
	 * 查询数据表字段列表
	 * @description 查询数据表字段列表
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenColumnColumnListApi = (params: {
		tableId: number
	}) => {
		return http.get<TableDataInfoGenTableColumn>(
			`/tool/gen/column/${params.tableId}`, { params }
		);
	};

	/**
	 * 批量生成代码
	 * @description 批量生成代码
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenBatchGenCodeBatchGenCodeApi = (params: {
		tableIdStr: string
	}) => {
		return http.get<ResultData<string>>(
			`/tool/gen/batchGenCode`, { params }
		);
	};

	/**
	 * 删除代码生成
	 * @description 删除代码生成
	 * @date 2024-12-22T12:48:34.484Z
	 */
	export const toolGenRemove_8Api = (params: {
		tableIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/tool/gen/${params.tableIds}`, { params }
		);
	};
