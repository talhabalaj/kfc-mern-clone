import { Router } from 'express'
import product from 'controllers/product'

const productRouter = Router()

productRouter.get('/:slug', product.get)
productRouter.get('/:slug/image', product.image)
productRouter.post('/list', product.list)

export { productRouter }
