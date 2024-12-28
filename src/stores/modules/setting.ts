import type { LayoutSetting, NavSetting } from '@/layouts/types/layout';
import defaultSettings from '@/settings';
import { formatHeightValue } from '@/utils/layout';
import { defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', () => {
	const storageSetting = useStorage<LayoutSetting>('layout-setting', {
		language: defaultSettings.language,
		navbar: defaultSettings.navbar,
	});

	const navbar = ref<NavSetting>(storageSetting.value.navbar);

	const setNavbar = (navbarSetting: NavSetting) => {
		navbar.value = navbarSetting;
		document.documentElement.style.setProperty(
			'--navbar-height',
			`${formatHeightValue(navbarSetting.height)}`,
		);
	};

	return {
		navbar,
		setNavbar,
	};
});
