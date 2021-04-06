// const webpack = require('webpack')
const path = require('path')
// const nodeExternals = require('webpack-node-externals')
const { keyPathMap, rootPath, projectList } = require('./base')
/**
 * @typedef {import('webpack').Configuration} Configuration
 * @type {Array<Configuration>}
 */
const configs = projectList.map((name, idx) => {
  return {
    mode: 'development',
    entry: keyPathMap[name],
    output: {
      path: path.resolve(rootPath, 'dist', name, 'webpack'),
      library: {
        type: 'commonjs2'
      }
    },
    target: 'node',
    // resolve: {
    //   // alias: {
    //   //   // '@': path.resolve(__dirname, '..', 'src'),
    //   //   // '~': path.resolve(__dirname, '..')
    //   // }
    // },
    devtool: 'source-map'
    // externals: [nodeExternals()]
  }
})

module.exports = configs
