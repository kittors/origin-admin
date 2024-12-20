import logger from '@/utils/logger';
import type { App } from 'vue';

export default {
	install: (app: App) => {
		// 挂载到全局 window
		window.logger = logger;

		// 挂载到 Vue 全局属性
		app.config.globalProperties.$logger = logger;

		// 提供给 setup 使用
		app.provide('logger', logger);
	},
};
