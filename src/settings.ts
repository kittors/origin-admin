import { LanguageEnum } from '@/enums/LanguageEnum';
import type { LayoutSetting } from '@/layouts/types/layout';

const setting: LayoutSetting = {
	// 语言
	language: LanguageEnum.zh_CN,
	// 导航栏配置
	navbar: {
		// 是否显示导航栏
		showNav: true,
		// 导航栏高度
		height: '50px',
		// 导航栏展开按钮
		navbarExpand: {
			show: true,
			size: '20px',
		},
		// 是否显示深色模式切换按钮
		showDarkMode: true,
	},
	// 侧边栏配置
	sidebar: {
		// 是否显示侧边栏
		showSidebar: true,
		// 是否显示logo
		showLogo: true,
		// 展开宽度
		expandWidth: '200px',
		// 折叠宽度
		collapseWidth: '50px',
	},
};

export default setting;
