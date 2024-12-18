import { PluginOption } from "vite";
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import createCompression from './compression'
import createAutoImport from './auto-import';
import createComponents from './components';
import createIcons from './icons';
import path from 'path';
export default (viteEnv: ViteEnv): (PluginOption | PluginOption[])[] => {
    const { VITE_GLOB_APP_TITLE, VITE_REPORT, VITE_DEVTOOLS, VITE_PWA, VITE_CODEINSPECTOR } = viteEnv;
    return [
        vue(),
        vueJsx(),
        // devTools
        VITE_DEVTOOLS && vueDevTools(),
        // 创建打包压缩配置
        createCompression(viteEnv),
        // 自动import 相关函数
        createAutoImport(path),
        // 自动注册导入常用组件
        createComponents(path),
        // 自动注册常用图标
        createIcons(),
    ];
}