const mode = import.meta.env.VITE_ROUTER_MODE;

/**
 * @description 使用递归过滤出需要渲染在左侧菜单的列表 (需剔除 isHide == true 的菜单)
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 * */
export function getShowMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
	const newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
	return newMenuList.filter((item) => {
		if (item.children?.length) {
			item.children = getShowMenuList(item.children);
		}
		return !item.meta?.isHide;
	});
}

/**
 * @description 使用递归找出所有面包屑存储到 pinia 中
 * @param {Array} menuList 菜单列表
 * @param {Array} parent 父级菜单
 * @param {Object} result 处理后的结果
 * @returns {Object}
 */
export const getAllBreadcrumbList = (
	menuList: Menu.MenuOptions[],
	parent: Menu.MenuOptions[] = [],
	result: Record<string, Menu.MenuOptions[]> = {},
): Record<string, Menu.MenuOptions[]> => {
	for (const item of menuList) {
		result[item.path] = [...parent, item];
		if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
	}
	return result;
};

/**
 * @description 使用递归扁平化菜单，方便添加动态路由
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 */
export function getFlatMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
	const newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
	return newMenuList.flatMap((item) => [
		item,
		...(item.children ? getFlatMenuList(item.children) : []),
	]);
}

/**
 * @description 获取不同路由模式所对应的 url + params
 * @returns {String}
 */
export function getUrlWithParams() {
	const url = {
		hash: location.hash.substring(1),
		history: location.pathname + location.search,
	};
	return url[mode];
}

/**
 * 检查并处理高度值字符串
 * @param value 高度值字符串
 * @param defaultValue 默认值（可选，默认为'50px'）
 * @returns 处理后的带px单位的字符串
 */
export const formatCSSUnit = (value: string, defaultValue = '50px'): string => {
	// 去除空格
	const trimmedValue = value.trim();

	// 如果已经是 "数字px" 格式
	if (/^\d+px$/.test(trimmedValue)) {
		return trimmedValue;
	}

	// 如果是纯数字
	if (/^\d+$/.test(trimmedValue)) {
		return `${trimmedValue}px`;
	}

	// 不合法的格式，返回默认值
	console.warn(`高度值格式不正确: ${value}，使用默认值: ${defaultValue}`);
	return defaultValue;
};
