// 返回项目路径
export const getNormalPath = (p: string): string => {
	if (p.length === 0 || !p || p === 'undefined') {
		return p;
	}
	const res = p.replace('//', '/');
	if (res[res.length - 1] === '/') {
		return res.slice(0, res.length - 1);
	}
	return res;
};
