import { Router } from 'express'

import userRouter from './users.routes'
import sessionRouter from './sessions.routes'
import profileRouter from './profiles.routes'

const mainRouter = Router()

mainRouter.use('/user', userRouter)
mainRouter.use('/session', sessionRouter)
mainRouter.use('/profile', profileRouter)

export default mainRouter