import cors from 'cors';
import express from 'express';
require('dotenv/config')

const app = express()
app.use(express.json())
app.use(cors({
  origin: '*'
}))
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
