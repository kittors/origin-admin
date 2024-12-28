import { HOME_URL, LOGIN_URL } from '@/config';
import type { RouteRecordRaw } from 'vue-router';

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: HOME_URL,
	},
	{
		path: LOGIN_URL,
		name: 'login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/layout',
		name: 'layout',
		component: () => import('@/layouts/index.vue'),
		// component: () => import("@/layouts/indexAsync.vue"),
		redirect: HOME_URL,
		children: [
			{
				path: HOME_URL.replace('/layout', ''), // 如果 HOME_URL 包含 /layout 前缀，需要去掉
				name: 'home',
				component: () => import('@/views/home/index.vue'), // 确保这个路径正确
				meta: {
					title: '首页',
				},
			},
		],
	},
];

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
	{
		path: '/403',
		name: '403',
		component: () => import('@/components/ErrorMessage/403.vue'),
		meta: {
			title: '403页面',
		},
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/components/ErrorMessage/404.vue'),
		meta: {
			title: '404页面',
		},
	},
	{
		path: '/500',
		name: '500',
		component: () => import('@/components/ErrorMessage/500.vue'),
		meta: {
			title: '500页面',
		},
	},
	// Resolve refresh page, route warnings
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/components/ErrorMessage/404.vue'),
	},
];
