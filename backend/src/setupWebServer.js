import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import rootRouter from './routes/index.js'
import { errorHandler } from './controllers/error.js'

export default async function setupWebServer() {
  const app = express()
  const port = process.env.PORT || 3000

  app.use(express.json())
  app.use(cors())
  app.use(morgan('tiny'))

  app.use('/api/v1', rootRouter)
  app.use(errorHandler)

  await new Promise((res) => app.listen(port, res))

  console.log(`Server has started on http://localhost:${port}/`)
}
