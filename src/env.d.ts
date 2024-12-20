/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_ROUTER_MODE: string;
	readonly VITE_GLOB_APP_TITLE: string;
	readonly VITE_OPENAPI_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
