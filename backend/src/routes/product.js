import { Router } from 'express'
import product from '../controllers/product/index.js'

const productRouter = Router()

productRouter.get('/:slug/image', product.image)

export { productRouter }
