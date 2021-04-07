# hello-node-bundler

## Bundling for node (1), webpack , rollup and esbuild

[源码地址](https://github.com/sonofmagic/hello-node-bundler)

### 序言

> 古有孔子曰： 茴香豆 的 **茴** 字有**四**种写法

打包工具嘛，不在于多，而在于哪个可以使用更少的成本来达到我们的目的

本文代码运行环境如下  
- Nodejs 14.x (LTS)
- [webpack](https://www.npmjs.com/package/webpack) 5.x
- [rollup](https://www.npmjs.com/package/rollup) 2.x
- [esbuild](https://www.npmjs.com/package/esbuild) 0.11.x


### 正文

先说一下，本篇文章打包的都是 nodejs 项目，不是前端页面

那么前端页面打包成 dist 部署，很好理解, spa csr 嘛

ssr的 **多入口打包** or **服务端渲染客户端激活** 也容易理解

为啥要打包 nodejs 项目呢？ 有必要吗 ？ 这取决与我们自身遇到的场景

### 场景

让我们从 nodejs 的部署开始讲起
### nodejs 部署

先来一张非常有名的图

![heavy object](./assets/image/heavy.webp)

node_modules:

npm 包自身依赖非常的深

npm 作者不按照规范，发布时传了很多垃圾进去

prune 算法也无法做有效的清理

更不用说.bin/binary,还有一些包在安装完成的 npm hook 里下载大文件了(说的就是你 puppeteer )

算法更新后 flat 的结构，让人点开后还要滚很久

devDependencies 和 dependencies 依赖问题，有

```shell
npm i --production
//or
yarn --production
```

可以在普通安装之后，自动把之前的 devDependencies 依赖给干掉 , 但是还是治标不治本

很多 commonjs 的包都有 SideEffect , 在引入的时候会执行代码，导致一些问题


### Serverless 场景

layer + cloud function 的方式

通常，我们把 `node_modules` 打成 layer

自个的业务代码做成 cloud function , 并做一个关联绑定


上一个 webpack tree shaking 的[文档](https://webpack.js.org/guides/tree-shaking/#root)

#### Webpack Tree shaking info
> Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax, i.e. import and export. The name and concept have been popularized by the ES2015 module bundler rollup.

关键句 It relies on the static structure of ES2015 module syntax

#### Rollup 里提到了一句

> Even though this algorithm is not restricted to ES modules, they make it much more efficient as they allow Rollup to treat all modules together as a big abstract syntax tree with shared bindings.

然而 [tree-shaking issues](https://github.com/rollup/rollup/issues?q=label%3A%22b%C2%B3+%F0%9F%8C%B3+tree-shaking%22+)

所以我个人还是没有理解，一些朋友


[webpack-common-shake?](https://github.com/indutny/webpack-common-shake)
问题还是：
- node_modules里垃圾太多




### 打包

打包 nodejs 有很多的缺点,最大的问题就在于，破坏了目录结构，
这直接导致，遇到一些 子进程的执行，或者文件流路径不对，会出错

好处当然有很多，比如你再也见不到 node_modules 里，有些人上传的 markdown 啊，还有一些乱七八糟的配置文件和 LICENSE 了

而且代码上也可以加混淆，反正有 source-map 调试也一点问题也没有。

### webpack and rollup and esbuild

配置项都非常简单

在这里为了阅读起来方便，成本比较低，也没有加 babel / ts 这些玩意

ps: 当前版本的 esbuild 对 dynamic imports 默认是做 inline 处理的

## Q&A

---

Q: 为啥没有 gulp / grunt / browserify  
A: 感觉这些都是时代的眼泪

---

Q: 你个人推荐用什么打包nodejs  
A: 哪个喜欢用哪个，看具体需求吧，自个玩可以使用 esbuild 

--- 

## 附录

- [源码地址](https://github.com/sonofmagic/hello-node-bundler)
- [common-shake](https://github.com/indutny/common-shake)