const path = require('path')

const rootPath = path.resolve(__dirname, '..')

const srcPath = path.resolve(rootPath, 'src')

const projectEnum = {
  express: 'express',
  koa: 'koa'
}
const projectList = [projectEnum.express, projectEnum.koa]

const expressPath = path.resolve(srcPath, projectEnum.express)

const koaPath = path.resolve(srcPath, projectEnum.koa)

const keyPathMap = {
  express: expressPath,
  koa: koaPath
}

module.exports = {
  rootPath,
  srcPath,
  koaPath,
  expressPath,
  keyPathMap,
  projectEnum,
  projectList
}
