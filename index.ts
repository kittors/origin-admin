import http from '@/api';
import { ResultData } from '@/api/interface';
import type {  } from './types/api-types';


	/**
	 * 访问首页，提示语
	 * @description 访问首页，提示语
	 * @date 2024-12-22T12:48:34.487Z
	 */
	export const indexApi = () => {
		return http.get<string>(
			`/`
		);
	};
