import type { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';

/**
 * @description 根据 compress 配置，生成不同的压缩规则
 * @param viteEnv
 */
export default (viteEnv: ViteEnv): PluginOption | PluginOption[] => {
	const { VITE_BUILD_COMPRESS = 'none', VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
	const compressList = VITE_BUILD_COMPRESS.split(',');
	const plugins: PluginOption[] = [];
	if (compressList.includes('gzip')) {
		plugins.push(
			viteCompression({
				ext: '.gz',
				algorithm: 'gzip',
				deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
			}),
		);
	}
	if (compressList.includes('brotli')) {
		plugins.push(
			viteCompression({
				ext: '.br',
				algorithm: 'brotliCompress',
				deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
			}),
		);
	}
	return plugins;
};
