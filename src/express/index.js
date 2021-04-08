import { baz } from '../common/main'
import { random } from 'lodash'
import { reactive, isReactive } from 'vue'

import Express, { Router } from 'express'
const bodyParser = require('body-parser')
console.log(`baz:${baz()}`)
const state = reactive({
  name: 'John'
})
console.log(isReactive(state))

const app = Express()
app.use(bodyParser.json())
const router = Router()

router.all('/', (req, res) => {
  res.send('hello world from express ' + Date.now())
})
router.all('/random', (req, res) => {
  res.send(random())
})
app.use(router)
app.listen(8001)
console.log('express app listens at port 8001')
