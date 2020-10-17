import { Router } from 'express'

import User from '../models/User'

const profileRouter = Router()

profileRouter.delete('/:id', async (request, response) => {
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

profileRouter.put('/:id', async (request, response) => {
    try {
        const { id } = request.params

        const {
            name,
            email,
            giftTip1,
            giftTip2
        } = request.body

        await User.findByIdAndUpdate(id, {
            name,
            email,
            giftTip1,
            giftTip2
        })

        return response.status(200)
    } catch(err) {
        return response.status(400).json({ error: err.msg })
    }
})

export default profileRouter