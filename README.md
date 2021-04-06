# hello-node-bundler

## Bundling for node (1), webpack , rollup and esbuild

环境:

- Nodejs 14.x (LTS)
- [webpack](https://www.npmjs.com/package/webpack) 5.x
- [rollup](https://www.npmjs.com/package/rollup) 2.x
- [esbuild](https://www.npmjs.com/package/esbuild) 0.11.x

### 前言

> 古有孔子曰： 茴香豆 的 **茴** 字有**四**种写法

> 今有一沙子来介绍 打包nodejs项目的三样工具

> ps: gulp 2年不更新了

先说一下，本篇文章打包的都是 nodejs 项目，不是前端页面

那么前端页面打包成 dist 部署，很好理解

为啥要打包 nodejs 项目呢？

让我们从 nodejs 的部署开始讲起

### nodejs 部署

先来一张非常有名的图

![heavy object](./heavy.webp)

node_modules:

npm包自身依赖非常的深

npm作者不按照规范，发布时传了很多垃圾进去

prune算法也无法做有效的清理

更不用说.bin/binary,还有一些包在安装完成的npm hook里下载大文件了(说的就是你 puppeteer )

算法更新后 flat 的结构，让人点开后还要滚很久

devDependencies和dependencies依赖问题，有
```shell
npm i --production
//or
yarn --production
```
可以在普通安装之后，自动把之前的 devDependencies 依赖给干掉 , 但是还是治标不治本

很多commonjs 的包都有 SideEffect , 在引入的时候会执行代码，导致一些问题

### 打包

打包nodejs有很多的缺点,最大的问题就在于，破坏了目录结构，
这直接导致，遇到一些 子进程的执行，或者文件流路径不对，会出错

好处当然有很多，比如你再也见不到 node_modules 里，有些人上传的 markdown啊，还有一些乱七八糟的配置文件和LICENSE了

而且代码上也可以加混淆，反正有 source-map 调试也一点问题也没有。