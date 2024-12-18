/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ROUTER_MODE: string
    readonly VITE_GLOB_APP_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
} 