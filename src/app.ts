import cors from 'cors';
import express from 'express';
import routes from './routes/index'
require('dotenv/config')

const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }))

routes(app)

const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
