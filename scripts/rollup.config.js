const path = require('path')
const { projectList, keyPathMap, rootPath } = require('./base')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const json = require('@rollup/plugin-json')
/**
 * @typedef {import('rollup').RollupOptions} RollupOptions
 * @type {Array<RollupOptions>}
 */
const configs = projectList.map((name, idx) => {
  return {
    input: keyPathMap[name] + '/index.js',
    output: {
      file: path.resolve(rootPath, 'dist', name, 'rollup/main.js'),
      format: 'cjs',
      sourcemap: true
    },
    plugins: [json(), commonjs(), nodeResolve()]
  }
})

module.exports = configs
