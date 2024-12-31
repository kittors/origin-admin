/**
 * 检查并处理CSS值字符串
 * @param value CSS值字符串
 * @param defaultValue 默认值（可选，默认为'50px'）
 * @returns 处理后的带px单位的字符串
 */
export const formatCSSValue = (value: string, defaultValue = '50px'): string => {
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
	logger.warning(`CSS值格式不正确: ${value}，使用默认值: ${defaultValue}`);
	return defaultValue;
};
