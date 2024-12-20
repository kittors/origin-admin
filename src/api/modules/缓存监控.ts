import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RCacheListInfoVo } from './types/api-types';

/**
 * @name 缓存监控模块
 */

			/**
			 * 获取缓存监控列表
			 * @description 获取缓存监控列表
			 */
			export const monitorCacheGetInfo_16Api = () => {
				return http.get<ResultData<RCacheListInfoVo>>(
					`/monitor/cache`
				);
			};
