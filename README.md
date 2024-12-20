# Origin Admin

一个基于 Vue 3 + TypeScript + Vite 的现代化后台管理系统模板。

## 🚀 特性

- ⚡️ [Vue 3](https://v3.vuejs.org/)、[Vite](https://vitejs.dev/)、[TypeScript](https://www.typescriptlang.org/) - 现代化开发体验
- 📦 [组件自动导入](https://github.com/antfu/unplugin-vue-components)
- 🎨 [Element Plus](https://element-plus.org/) - 流行的 Vue 3 组件库
- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🦾 TypeScript 支持
- 📦 [Pinia](https://pinia.vuejs.org/) 状态管理
- 🔐 基于角色的权限控制

## 📦 预设环境

- Node.js 16.x
- pnpm 7.x

## 🎮 开发

```bash
# 克隆项目
git clone https://github.com/kittors/origin-admin.git

# 进入项目目录
cd origin-admin

# 安装依赖
pnpm install

# 启动服务
pnpm dev
```

## 📦 构建

```bash
# 构建正式环境
pnpm build
```

## 🔧 测试

```bash
# 单元测试
pnpm test:unit

# E2E 测试
pnpm test:e2e

# 在 Chromium 中运行 E2E 测试
pnpm test:e2e --project=chromium

# 调试模式下运行 E2E 测试
pnpm test:e2e --debug
```

## 🔨 代码质量

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 使用 husky 进行 Git Hook 管理
- 使用 commitlint 进行提交信息规范化

## 📝 开发工具推荐

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 IDE 支持
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 🌟 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 开源协议

[MIT License](LICENSE) © 2024-PRESENT [Your Name]
