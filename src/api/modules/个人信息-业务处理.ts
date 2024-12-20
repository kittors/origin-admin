import http from '@/api';
import type { Result, ResultData, ResPage } from '@/api/interface';
import type { RProfileVo, RVoid, SysUserProfileBo, SysUserPasswordBo, RAvatarVo } from './types/api-types';

/**
 * @name 个人信息 业务处理模块
 */

			/**
			 * 个人信息
			 * @description 个人信息
			 */
			export const systemUserProfileProfileApi = () => {
				return http.get<ResultData<RProfileVo>>(
					`/system/user/profile`
				);
			};

			/**
			 * 修改用户信息
			 * @description 修改用户信息
			 */
			export const systemUserProfileUpdateProfileApi = (params: SysUserProfileBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/user/profile`, params
				);
			};

			/**
			 * 重置密码
			 * @description 重置密码
			 */
			export const systemUserProfileUpdatePwdUpdatePwdApi = (params: SysUserPasswordBo) => {
				return http.put<ResultData<RVoid>>(
					`/system/user/profile/updatePwd`, params
				);
			};

			/**
			 * 头像上传
			 * @description 头像上传
			 */
			export const systemUserProfileAvatarAvatarApi = (params: FormData) => {
				return http.post<ResultData<RAvatarVo>>(
					`/system/user/profile/avatar`, params, { headers: { "Content-Type": "multipart/form-data" } }
				);
			};
