import { LOGIN_URL } from '@/config';
import router from '@/routers/index';
import { useAuthStore } from '@/stores/modules/auth';
import { useUserStore } from '@/stores/modules/user';
import { ElNotification } from 'element-plus';
import type { RouteRecordRaw } from 'vue-router';

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue');

/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
	const userStore = useUserStore();
	const authStore = useAuthStore();

	try {
		// 1.获取菜单列表 && 按钮权限列表
		await authStore.getAuthMenuList();
		await authStore.getAuthButtonList();

		// 2.判断当前用户有没有菜单权限
		if (!authStore.authMenuListGet.length) {
			ElNotification({
				title: '无权限访问',
				message: '当前账号无任何菜单权限，请联系系统管理员！',
				type: 'warning',
				duration: 3000,
			});
			userStore.setToken('');
			router.replace(LOGIN_URL);
			return Promise.reject('No permission');
		}

		// 3.添加动态路由
		for (const item of authStore.flatMenuListGet) {
			if (item.children) {
				item.children = undefined;
			}
			if (item.component && typeof item.component === 'string') {
				item.component = modules[`/src/views${item.component}.vue`];
			}
			if (item.meta.isFull) {
				router.addRoute(item as unknown as RouteRecordRaw);
			} else {
				router.addRoute('layout', item as unknown as RouteRecordRaw);
			}
		}
	} catch (error) {
		// 当按钮 || 菜单请求出错时，重定向到登陆页
		userStore.setToken('');
		router.replace(LOGIN_URL);
		return Promise.reject(error);
	}
};
