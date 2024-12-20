import App from './App.vue';
import router from './routers';

// 样式
import '@/styles/index.scss';

// 全局状态管理
import pinia from '@/stores';

// ElementPlus
import ElementPlus from 'element-plus';

// 日志插件
import loggerPlugin from './plugins/logger';

import { updateLoggerEnv } from '@/utils/logger';

// 更新 logger 环境
updateLoggerEnv(import.meta.env.MODE);

// 创建 Vue 应用
const app = createApp(App);

app.use(pinia);
app.use(loggerPlugin);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
