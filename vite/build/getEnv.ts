// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: ViteEnv & Recordable = {
		VITE_USER_NODE_ENV: 'development', // 默认值
		VITE_GLOB_APP_TITLE: '',
		VITE_PORT: 3000, // 默认值
		VITE_OPEN: false,
		VITE_REPORT: false,
		VITE_ROUTER_MODE: 'hash', // 默认值
		VITE_BUILD_COMPRESS: 'none', // 默认值
		VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: false,
		VITE_DROP_CONSOLE: false,
		VITE_PWA: false,
		VITE_DEVTOOLS: false,
		VITE_PUBLIC_PATH: '',
		VITE_API_URL: '',
		VITE_PROXY: [],
		VITE_OPENAPI_URL: '',
		VITE_CODEINSPECTOR: false,
		VITE_API_GENERATE: false,
		VITE_APP_BASE_API: '/dev-api',
		VITE_APP_SERVER_URL: 'http://localhost:8080'
	};
	for (const envName of Object.keys(envConf)) {
		const rawValue = envConf[envName] as string;
		let realName: string | boolean | number = rawValue.replace(/\\n/g, '\n');

		if (realName === 'true') realName = true;
		else if (realName === 'false') realName = false;

		// 根据 envName 进行类型转换
		switch (envName) {
			// 端口
			case 'VITE_PORT':
				ret.VITE_PORT = Number(realName);
				break;
			// 代理
			case 'VITE_PROXY':
				if (typeof realName === 'string') {
					try {
						ret.VITE_PROXY = JSON.parse(realName);
					} catch (error) {
						console.error(`Error parsing VITE_PROXY: ${error}`);
					}
				}
				break;
			// Vite node开发环境 development production test
			case 'VITE_USER_NODE_ENV':
				if (
					typeof realName === 'string' &&
					['development', 'production', 'test'].includes(realName)
				) {
					ret.VITE_USER_NODE_ENV = realName as 'development' | 'production' | 'test';
				}
				break;
			// 路由模式 hash history
			case 'VITE_ROUTER_MODE':
				if (typeof realName === 'string' && ['hash', 'history'].includes(realName)) {
					ret.VITE_ROUTER_MODE = realName as 'hash' | 'history';
				}
				break;
			// 打包的压缩方式 gzip brotli
			case 'VITE_BUILD_COMPRESS':
				if (
					typeof realName === 'string' &&
					['gzip', 'brotli', 'gzip,brotli', 'none'].includes(realName)
				) {
					ret.VITE_BUILD_COMPRESS = realName as
						| 'gzip'
						| 'brotli'
						| 'gzip,brotli'
						| 'none';
				}
				break;
			// 其他环境变量的转换...
			default:
				// 其他字符串类型的环境变量
				(ret as Recordable)[envName] = realName; // 仍然保持动态键的操作
				break;
		}
	}

	return ret;
}
