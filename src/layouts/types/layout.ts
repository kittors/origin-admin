import type { LanguageEnum } from '@/enums/LanguageEnum';

interface NavSetting {
	//是否显示导航栏
	showNav: boolean;
	//导航栏高度
	height: string;
}

interface LayoutSetting {
	//语言
	language: LanguageEnum;
	//导航栏配置
	navbar: NavSetting;
}

export type { LayoutSetting, NavSetting };
