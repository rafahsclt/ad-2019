import express from 'express'
import cors from 'cors'

import './database'

import mainRouter from './routes'

const server = express()

server.use(cors())
server.use(express.json())

server.use(mainRouter)

server.listen(3333, () => console.log('Servidor Iniciado!'))