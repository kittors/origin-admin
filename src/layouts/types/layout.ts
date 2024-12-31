import type { LanguageEnum } from '@/enums/LanguageEnum';

interface NavbarExpand {
	//是否显示导航栏展开按钮
	show: boolean;
	//导航栏展开按钮宽度
	size: string;
}

interface NavSetting {
	//是否显示导航栏
	showNav: boolean;
	//导航栏高度
	height: string;
	//导航栏展开按钮
	navbarExpand: NavbarExpand;
	//是否显示深色模式切换按钮
	showDarkMode: boolean;
}

interface SidebarSetting {
	//是否显示logo
	showLogo: boolean;
	//侧边栏展开宽度
	expandWidth: string;
	//侧边栏折叠宽度
	collapseWidth: string;
	//是否显示侧边栏
	showSidebar: boolean;
}

interface SidebarExpand {
	// 是否展开侧边栏
	isExpand: boolean;
}

interface LayoutSetting {
	//语言
	language: LanguageEnum;
	//导航栏配置
	navbar: NavSetting;
	//侧边栏配置
	sidebar: SidebarSetting;
}

export type { LayoutSetting, NavSetting, SidebarSetting, SidebarExpand };
