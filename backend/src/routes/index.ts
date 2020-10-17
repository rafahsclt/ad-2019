import { Router } from 'express'

import userRouter from './users.routes'
import sessionRouter from './sessions.routes'

const mainRouter = Router()

mainRouter.use('/user', userRouter)
mainRouter.use('/session', sessionRouter)

export default mainRouter