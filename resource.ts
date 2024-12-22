import http from '@/api';
import { ResultData } from '@/api/interface';
import type { RVoid, SysOssConfigBo, RSysOssUploadVo, TableDataInfoSysOssVo, SysOssBo, PageQuery, RListSysOssVo, RSysOssConfigVo, TableDataInfoSysOssConfigVo } from './types/api-types';


	/**
	 * 修改对象存储配置
	 * @description 修改对象存储配置
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssConfigEdit_15Api = (params: SysOssConfigBo) => {
		return http.put<RVoid>(
			`/resource/oss/config`, params
		);
	};

	/**
	 * 新增对象存储配置
	 * @description 新增对象存储配置
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssConfigAdd_15Api = (params: SysOssConfigBo) => {
		return http.post<RVoid>(
			`/resource/oss/config`, params
		);
	};

	/**
	 * 状态修改
	 * @description 状态修改
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssConfigChangeStatusChangeStatus_5Api = (params: SysOssConfigBo) => {
		return http.put<RVoid>(
			`/resource/oss/config/changeStatus`, params
		);
	};

	/**
	 * 上传OSS对象存储
	 * @description 上传OSS对象存储
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssUploadUpload_1Api = (params: FormData) => {
		return http.post<RSysOssUploadVo>(
			`/resource/oss/upload`, params, { headers: { "Content-Type": "multipart/form-data" } }
		);
	};

	/**
	 * 建立 SSE 连接
	 * @description 建立 SSE 连接
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceSseConnectApi = () => {
		return http.get<unknown>(
			`/resource/sse`
		);
	};

	/**
	 * 向特定用户发送消息
	 * @description 向特定用户发送消息
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceSseSendSendApi = (params: {
		userId: number;
		msg: string
	}) => {
		return http.get<RVoid>(
			`/resource/sse/send`, { params }
		);
	};

	/**
	 * 向所有用户发送消息
	 * @description 向所有用户发送消息
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceSseSendAllSend_1Api = (params: {
		msg: string
	}) => {
		return http.get<RVoid>(
			`/resource/sse/sendAll`, { params }
		);
	};

	/**
	 * 关闭 SSE 连接
	 * @description 关闭 SSE 连接
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceSseCloseCloseApi = () => {
		return http.get<RVoid>(
			`/resource/sse/close`
		);
	};

	/**
	 * 短信验证码
	 * @description 短信验证码
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceSmsCodeSmsCodeApi = (params: {
		phonenumber: string
	}) => {
		return http.get<RVoid>(
			`/resource/sms/code`, { params }
		);
	};

	/**
	 * 查询OSS对象存储列表
	 * @description 查询OSS对象存储列表
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssListList_16Api = (params: {
		bo: SysOssBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysOssVo>(
			`/resource/oss/list`, { params }
		);
	};

	/**
	 * 查询OSS对象基于id串
	 * @description 查询OSS对象基于id串
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssListByIdsListByIdsApi = (params: {
		ossIds: number[]
	}) => {
		return http.get<RListSysOssVo>(
			`/resource/oss/listByIds/${params.ossIds}`, { params }
		);
	};

	/**
	 * 下载OSS对象
	 * @description 下载OSS对象
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssDownloadDownload_1Api = (params: {
		ossId: number
	}) => {
		return http.get<ResultData<string>>(
			`/resource/oss/download/${params.ossId}`, { params }
		);
	};

	/**
	 * 获取对象存储配置详细信息
	 * @description 获取对象存储配置详细信息
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssConfigGetInfo_19Api = (params: {
		ossConfigId: number
	}) => {
		return http.get<RSysOssConfigVo>(
			`/resource/oss/config/${params.ossConfigId}`, { params }
		);
	};

	/**
	 * 查询对象存储配置列表
	 * @description 查询对象存储配置列表
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssConfigListList_17Api = (params: {
		bo: SysOssConfigBo;
		pageQuery: PageQuery
	}) => {
		return http.get<TableDataInfoSysOssConfigVo>(
			`/resource/oss/config/list`, { params }
		);
	};

	/**
	 * 邮箱验证码
	 * @description 邮箱验证码
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceEmailCodeEmailCodeApi = (params: {
		email: string
	}) => {
		return http.get<RVoid>(
			`/resource/email/code`, { params }
		);
	};

	/**
	 * 删除OSS对象存储
	 * @description 删除OSS对象存储
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssRemove_21Api = (params: {
		ossIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/resource/oss/${params.ossIds}`, { params }
		);
	};

	/**
	 * 删除对象存储配置
	 * @description 删除对象存储配置
	 * @date 2024-12-22T12:48:34.485Z
	 */
	export const resourceOssConfigRemove_22Api = (params: {
		ossConfigIds: number[]
	}) => {
		return http.delete<RVoid>(
			`/resource/oss/config/${params.ossConfigIds}`, { params }
		);
	};
