import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import type { PluginOption } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import generateApi from './apiGenerator';
import createAutoImport from './auto-import';
import createComponents from './components';
import createCompression from './compression';
import createIcons from './icons';
export default (viteEnv: ViteEnv): (PluginOption | PluginOption[])[] => {
	const {
		VITE_GLOB_APP_TITLE,
		VITE_REPORT,
		VITE_DEVTOOLS,
		VITE_PWA,
		VITE_CODEINSPECTOR,
		VITE_API_GENERATE,
	} = viteEnv;
	return [
		vue(),
		vueJsx(),
		// devTools
		VITE_DEVTOOLS && vueDevTools(),
		// 生成api
		VITE_API_GENERATE && generateApi(viteEnv),
		// 创建打包压缩配置
		createCompression(viteEnv),
		// 自动import 相关函数
		createAutoImport(path),
		// 自动注册导入常用组件
		createComponents(path),
		// 自动注册常用图标
		createIcons(),
	];
};
