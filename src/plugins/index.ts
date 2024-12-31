import type { App } from 'vue';

// 预设动画
import animate from '@/plugins/animate';

// 日志插件
import logger from '@/plugins/logger';

export default function installPlugin(app: App) {
	app.use(animate);
	app.use(logger);
}
