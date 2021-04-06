import Express, { Router } from 'express'

const app = Express()

const router = Router()

router.all('/', (req, res) => {
  res.send('hello world from express ' + Date.now())
})
app.use(router)
app.listen(8001)
console.log('express app listens at port 8001')