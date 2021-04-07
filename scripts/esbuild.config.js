// Bundling for node
const path = require('path')
const { projectList, rootPath, keyPathMap } = require('./base')

/**
 * jsdoc 类似 ts 的写法
 * @typedef {import('esbuild').BuildOptions} BuildOptions
 * @type {Array<BuildOptions & { write: false }> }
 */
const configs = projectList.map((name) => {
  return {
    entryPoints: [keyPathMap[name]],
    // inline any imported dependencies into the file itself
    bundle: true,
    platform: 'node',

    // lts
    target: ['node14'],
    outfile: path.resolve(rootPath, 'dist', name, 'esbuild/main.js'),
    sourcemap: true
  }
})

module.exports = configs
