import { Router } from 'express'
import collection from '../controllers/collection/index.js'

const collectionRouter = Router()

collectionRouter.get('/:slug', collection.get)

export { collectionRouter }
