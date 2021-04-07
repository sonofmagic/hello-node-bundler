const esbuild = require('esbuild')
const configs = require('./esbuild.config')

;(async () => {
  await Promise.all([
    configs.map(async (x) => {
      return await esbuild.build(x)
    })
  ])
})()
