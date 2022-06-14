import { Router } from 'express'
import collection from 'controllers/collection'

const collectionRouter = Router()

collectionRouter.get('/:slug', collection.get)

export { collectionRouter }
