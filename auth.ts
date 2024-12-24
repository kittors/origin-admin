import http from '@/api';
import { ResultData } from '@/api/interface';
import type { RVoid, SocialLoginBody, RegisterBody, RLoginVo, RLoginTenantVo, RCaptchaVo, RString } from './types/api-types';


	/**
	 * 第三方登录回调业务处理 绑定授权
	 * @description 第三方登录回调业务处理 绑定授权
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authSocialCallbackSocialCallbackApi = (params: SocialLoginBody) => {
		return http.post<RVoid>(
			`/auth/social/callback`, params
		);
	};

	/**
	 * 用户注册
	 * @description 用户注册
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authRegisterRegisterApi = (params: RegisterBody) => {
		return http.post<RVoid>(
			`/auth/register`, params
		);
	};

	/**
	 * 退出登录
	 * @description 退出登录
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authLogoutLogoutApi = () => {
		return http.post<RVoid>(
			`/auth/logout`
		);
	};

	/**
	 * 登录方法
	 * @description 登录方法
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authLoginLoginApi = (params: Record<string, unknown>) => {
		return http.post<RLoginVo>(
			`/auth/login`, params
		);
	};

	/**
	 * 登录页面租户下拉框
	 * @description 登录页面租户下拉框
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authTenantListTenantListApi = () => {
		return http.get<RLoginTenantVo>(
			`/auth/tenant/list`
		);
	};

	/**
	 * 生成验证码
	 * @description 生成验证码
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authCodeGetCodeApi = () => {
		return http.get<RCaptchaVo>(
			`/auth/code`
		);
	};

	/**
	 * 第三方登录请求
	 * @description 第三方登录请求
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authBindingAuthBindingApi = (params: {
		source: string;
		tenantId: string;
		domain: string
	}) => {
		return http.get<RString>(
			`/auth/binding/${params.source}`, { params }
		);
	};

	/**
	 * 取消授权
	 * @description 取消授权
	 * @date 2024-12-22T13:24:59.352Z
	 */
	export const authUnlockUnlockSocialApi = (params: {
		socialId: number
	}) => {
		return http.delete<RVoid>(
			`/auth/unlock/${params.socialId}`, { params }
		);
	};
