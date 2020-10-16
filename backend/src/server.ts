import express from 'express'

import './database'

import { userRouter, sessionRouter } from './routes'

const server = express()
server.use(express.json())

server.use('/user', userRouter)
server.use('/session', sessionRouter)

server.listen(3333, () => console.log('Servidor Iniciado!')
)