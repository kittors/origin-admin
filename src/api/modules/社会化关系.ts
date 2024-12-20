import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RListSysSocialVo } from './types/api-types';

/**
 * @name 社会化关系模块
 */

			/**
			 * 查询社会化关系列表
			 * @description 查询社会化关系列表
			 */
			export const systemSocialListList_3Api = () => {
				return http.get<ResultData<RListSysSocialVo>>(
					`/system/social/list`
				);
			};
