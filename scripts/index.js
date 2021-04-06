const rollup = require('rollup')
const rollupConfigs = require('./rollup.config')
const webpack = require('webpack')
const webpackConfigs = require('./webpack.config')
async function build () {
  await Promise.all(
    rollupConfigs.map(async (x) => {
      const { output, ...input } = x
      const bundle = await rollup.rollup(input)
      await bundle.write(output)
      await bundle.close()
    })
  )

  await Promise.all(
    webpackConfigs.map((x) => {
      return new Promise((resolve, reject) => {
        webpack(x, (err, stats) => {
          if (err || stats.hasErrors()) {
            reject(err)
          }
          resolve()
        })
      })
    })
  )
}

build()
