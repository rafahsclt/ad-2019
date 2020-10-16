import { Router } from 'express'

import User from '../models/User'

const userRouter = Router()
const sessionRouter = Router()

userRouter.get('/', async (request, response) => {
    const users = await User.find()

    return response.json(users)
})

userRouter.post('', async (request, response) => {
    const { 
        name,
        email,
        giftTip1,
        giftTip2,
    } = request.body

    const user = await User.create({
        name,
        email,
        giftTip1,
        giftTip2,
    })

    return response.json(user)
})

userRouter.get('/:id', async (request, response) => {
    const { id } = request.params

    const user = await User.findById(id)

    if(!user) {
        throw new Error('Usuário não encontrado')
    }

    return response.json(user)
})

userRouter.delete('/:id', async (request, response) => {
    const { id } = request.params

     const user = await User.findById(id)

     if(!user) {
        throw new Error('Usuário não encontrado')
     } 

     await User.deleteOne(user, (err) => {
        if(err) throw new Error('Não foi possível deletar')
     })

     return response.json(user)
})

userRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { 
        name,
        email,
        giftTip1,
        giftTip2
     } = request.body

    const changedUser = {
        name,
        email,
        giftTip1,
        giftTip2
    }

    const user = await User.findByIdAndUpdate(id, changedUser)

    if(!user) {
        throw new Error('Usuário não encontrado')
    }

    return response.json(changedUser)
})

sessionRouter.post('/', async (request, response) => {
    try {
        const { email } = request.body

        const user = await User.findOne({ email })

        if(!user) {
            throw new Error('E-mail não cadastrado')
        }

        return response.json(user)
    } catch(err) {
        return response.status(400).json({ error: err.msg })
    }
})


export { userRouter, sessionRouter }