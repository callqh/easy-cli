# 快速搭建自己的CLI

借鉴`@antfu`的[`ni`](https://github.com/antfu/ni)的目录和依赖，快速搭建自己的CLI。

## 使用

1. 在`package.json`中修改自己的cli名称以及github地址
2. `pnpm i ` 安装依赖
3. `pnpm dev` 开发运行

## 可参考的依赖
- [`terminal-link`](https://www.npmjs.com/package/terminal-link)：在控制台生成可点击的链接
- [`find-up`](https://www.npmjs.com/package/find-up)：查找文件或目录
- [`fast-glob`](https://www.npmjs.com/package/fast-glob)：遍历文件系统查找对应规则的文件

## TODO
- [ ] 集成为CLI，命令快速生成
