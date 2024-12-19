import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig({
	test: {
		environment: 'jsdom',
		exclude: ['e2e/**', 'node_modules/**'],
		root: fileURLToPath(new URL('./', import.meta.url)),
	},
	...viteConfig,
});
