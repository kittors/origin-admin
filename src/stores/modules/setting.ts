import type { LayoutSetting, NavSetting, SidebarSetting } from '@/layouts/types/layout';
import defaultSettings from '@/settings';
import { formatCSSValue } from '@/utils/layout';
import { defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', () => {
	const storageSetting = useStorage<LayoutSetting>('layout-setting', {
		language: defaultSettings.language,
		navbar: defaultSettings.navbar,
		sidebar: defaultSettings.sidebar,
	});

	const navbar = ref<NavSetting>(storageSetting.value.navbar);
	const sidebar = ref<SidebarSetting>(storageSetting.value.sidebar);

	const setNavbar = (navbarSetting: NavSetting) => {
		navbar.value = navbarSetting;
		document.documentElement.style.setProperty(
			'--navbar-height',
			`${formatCSSValue(navbarSetting.height, '50px')}`,
		);
		document.documentElement.style.setProperty(
			'--navbar-expand-size',
			`${formatCSSValue(navbarSetting.navbarExpand.size, '20px')}`,
		);
	};

	const setSidebar = (sidebarSetting: SidebarSetting) => {
		sidebar.value = sidebarSetting;
		document.documentElement.style.setProperty(
			'--sidebar-expand-width',
			`${formatCSSValue(sidebarSetting.expandWidth, '200px')}`,
		);
		document.documentElement.style.setProperty(
			'--sidebar-collapse-width',
			`${formatCSSValue(sidebarSetting.collapseWidth, '50px')}`,
		);
	};

	return {
		navbar,
		setNavbar,
		sidebar,
		setSidebar,
	};
});
