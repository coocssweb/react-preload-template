# React Preload Template 🚀

React 项目模板，面向中大型前端应用，业界主流的拆包与路由预加载最佳实践，主要特点包括：

- ✨ **模块化路由管理** — 每个功能模块自维护自己的 `routes.ts` 和 `lazy.ts`，路由结构清晰、可扩展性强。
- ⚡️ **代码拆包与智能预加载** — 基于 `React.lazy` + 自定义 `lazyWithPreload` 封装，支持按需加载和浏览器空闲时智能预加载，提高首屏性能和导航流畅度。
- 🎯 **空闲预加载策略** — 支持基于路由关系的预加载，在用户空闲时预热后续页面资源，降低白屏和 chunk 加载失败的风险。
- 🎨 **暗黑模式与多主题** — 内置支持 CSS Variables，配套 `light.less` 和 `dark.less`，并通过 `tokens/` 维护品牌色（`colors.less`）和中性色（`neuter.less`），后期扩展多皮肤非常方便。
- 🛠 **现代构建配置** — 开发环境支持清晰的 chunk 命名（`webpackChunkName`），生产环境自动带 `contenthash`，兼顾调试体验和长期缓存。
- 🔍 **Lint-Staged & Husky 集成** — 预置了提交前自动 lint、格式化和提交信息校验，保证团队代码风格统一、提交规范。

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发环境
npm run dev

# 打包生产环境
npm run build
```
