import { DEFAULT_PRIMARY } from '@/config';
import { useAppStore } from '@/stores/modules/app';
import { asideTheme } from '@/styles/theme/aside';
import { headerTheme } from '@/styles/theme/header';
import { menuTheme } from '@/styles/theme/menu';
import { getDarkColor, getLightColor } from '@/utils/color';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import type { Theme } from './interface';

/**
 * @description 全局主题 hooks
 * */
export const useTheme = () => {
	const globalStore = useAppStore();
	const { primary, isDark, isGrey, isWeak, layout, asideInverted, headerInverted } =
		storeToRefs(globalStore);

	// 切换暗黑模式 ==> 同时修改主题颜色、侧边栏、头部颜色
	const switchDark = () => {
		const html = document.documentElement as HTMLElement;
		if (isDark.value) {
			html.classList.add('dark');
		} else {
			html.classList.remove('dark');
		}
		changePrimary(primary.value);
		setAsideTheme();
		setHeaderTheme();
	};

	// 修改主题颜色
	const changePrimary = (value: string | null) => {
		const primaryColor = value || DEFAULT_PRIMARY;
		if (!value) {
			ElMessage({ type: 'success', message: `主题颜色已重置为 ${DEFAULT_PRIMARY}` });
		}

		document.documentElement.style.setProperty('--el-color-primary', primaryColor);
		document.documentElement.style.setProperty(
			'--el-color-primary-dark-2',
			isDark.value
				? `${getLightColor(primaryColor, 0.2)}`
				: `${getDarkColor(primaryColor, 0.3)}`,
		);
		for (let i = 1; i <= 9; i++) {
			const lightColor = isDark.value
				? `${getDarkColor(primaryColor, i / 10)}`
				: `${getLightColor(primaryColor, i / 10)}`;
			document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, lightColor);
		}
		globalStore.setGlobalState('primary', primaryColor);
	};

	// 灰色和弱色切换
	const changeGreyOrWeak = (type: Theme.GreyOrWeakType, value: boolean) => {
		const body = document.body as HTMLElement;
		if (!value) return body.removeAttribute('style');
		const styles: Record<Theme.GreyOrWeakType, string> = {
			grey: 'filter: grayscale(1)',
			weak: 'filter: invert(80%)',
		};
		body.setAttribute('style', styles[type]);
		const propName = type === 'grey' ? 'isWeak' : 'isGrey';
		globalStore.setGlobalState(propName, false);
	};

	// 设置菜单样式
	const setMenuTheme = () => {
		let type: Theme.ThemeType = 'light';
		if (layout.value === 'transverse' && headerInverted.value) type = 'inverted';
		if (layout.value !== 'transverse' && asideInverted.value) type = 'inverted';
		if (isDark.value) type = 'dark';
		const theme = menuTheme[type] || menuTheme.light;
		for (const [key, value] of Object.entries(theme)) {
			document.documentElement.style.setProperty(key, value);
		}
	};

	// 设置侧边栏样式
	const setAsideTheme = () => {
		let type: Theme.ThemeType = 'light';
		if (asideInverted.value) type = 'inverted';
		if (isDark.value) type = 'dark';
		const theme = asideTheme[type] || asideTheme.light;
		for (const [key, value] of Object.entries(theme)) {
			document.documentElement.style.setProperty(key, value);
		}
		setMenuTheme();
	};

	// 设置头部样式
	const setHeaderTheme = () => {
		let type: Theme.ThemeType = 'light';
		if (headerInverted.value) type = 'inverted';
		if (isDark.value) type = 'dark';
		const theme = headerTheme[type] || headerTheme.light;
		for (const [key, value] of Object.entries(theme)) {
			document.documentElement.style.setProperty(key, value);
		}
		setMenuTheme();
	};

	// init theme
	const initTheme = () => {
		switchDark();
		if (isGrey.value) changeGreyOrWeak('grey', true);
		if (isWeak.value) changeGreyOrWeak('weak', true);
	};

	return {
		initTheme,
		switchDark,
		changePrimary,
		changeGreyOrWeak,
		setAsideTheme,
		setHeaderTheme,
	};
};
