import { Router } from 'express'

import auth from '../controllers/auth/index.js'

const authRouter = Router()

authRouter.post('/login', auth.login)

export { authRouter }
