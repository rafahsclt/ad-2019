import { Router } from 'express'

import EtherealMailProvider from '../providers/EtherealMailProvider'
import User from '../models/User'

const userRouter = Router()

const mailProvider = new EtherealMailProvider()

userRouter.get('/', async (request, response) => {
    const users = await User.find()

    return response.json(users)
})

userRouter.post('', async (request, response) => {
    try {
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
    } catch (err) {
        return response.status(400).json({ error: err.msg })
    }
})

userRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params

        const user = await User.findById(id)

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        return response.json(user)
    } catch (err) {
        return response.status(400).json({ error: err.msg })
    }
})

userRouter.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params

        const user = await User.findById(id)

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        await User.deleteOne(user, (err) => {
            if (err) throw new Error('Não foi possível deletar')
        })

        return response.json(user)

    } catch (err) {
        return response.status(400).json({ error: err.msg })
    }
})

userRouter.patch('/:id', async (request, response) => {
    try {

        const { id } = request.params
        const {
            name,
            email,
            giftTip1,
            giftTip2,
            isChosen
        } = request.body

        const changedUser = {
            name,
            email,
            giftTip1,
            giftTip2,
            isChosen
        }

        const user = await User.findByIdAndUpdate(id, changedUser)

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        return response.json(changedUser)
    } catch (err) {
        return response.status(400).json({ error: err.msg })
    }
})

userRouter.put('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const {
            name,
            email,
            giftTip1,
            giftTip2,
            isChosen,
            nameSF,
            gift1SF,
            gift2SF
        } = request.body

        const changedUser = {
            name,
            email,
            giftTip1,
            giftTip2,
            isChosen,
            nameSF,
            gift1SF,
            gift2SF
        }

        const user = await User.findByIdAndUpdate(id, changedUser)

        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        mailProvider.sendMail(
            email,
            `Bem vindo,
            
            O nome do seu amigo secreto é ${nameSF}.

            E aqui vai algumas dicas do que comprar de presente : 
                - ${gift1SF}
                - ${gift2SF}
            `
        )

        return response.json(changedUser)
    } catch (err) {
        return response.status(400).json({ error: err.msg })
    }
})

export default userRouter