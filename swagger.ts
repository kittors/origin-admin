import http from '@/api';
import { ResultData } from '@/api/interface';
import type { RString } from './types/api-types';


	/**
	 * 上传请求 必须使用 @RequestPart 注解标注为文件
	 * @description 上传请求 必须使用 @RequestPart 注解标注为文件
	 * @date 2024-12-22T13:24:59.350Z
	 */
	export const swaggerDemoUploadUploadApi = (params: FormData) => {
		return http.post<RString>(
			`/swagger/demo/upload`, params, { headers: { "Content-Type": "multipart/form-data" } }
		);
	};
