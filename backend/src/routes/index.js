import { Router } from 'express'
import { authRouter } from './auth.js'
import { collectionRouter } from './collection.js'
import { productRouter } from './product.js'

const rootRouter = Router()

rootRouter.get('/', (req, res) => {
  res.json({
    message: 'Server is online.',
  })
})

rootRouter.use('/auth', authRouter)
rootRouter.use('/collection', collectionRouter)
rootRouter.use('/product', productRouter)

export default rootRouter
