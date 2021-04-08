import { baz } from '../common/main'
import { random } from 'lodash'
import { reactive, isReactive } from 'vue'

import Koa from 'koa'
import Router from '@koa/router'
const bodyParser = require('koa-bodyparser')
console.log(`baz:${baz()}`)
const state = reactive({
  name: 'John'
})
console.log(isReactive(state))
const app = new Koa()
app.use(bodyParser())
const router = new Router()

router.all('/', (ctx) => {
  ctx.body = 'hello world from koa ' + Date.now()
})

router.all('/random', (ctx) => {
  ctx.body = random()
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8002)
console.log('koa app listens at port 8002')
