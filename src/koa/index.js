import '../common/main'
import Koa from 'koa'
import Router from '@koa/router'
import { random } from 'lodash'
const app = new Koa()

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
