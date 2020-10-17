import { Router } from 'express'

import User from '../models/User'

const sessionRouter = Router()

sessionRouter.get('/', async (request, response) => {
    const users = await User.find({ isChosen: false })

    const quantityOfUsers = users.length

    const chNumber = Math.floor(Math.random() * quantityOfUsers)

    const chUser = users[chNumber]

    return response.json(chUser)
})

sessionRouter.post('/', async (request, response) => {
    try {
        const { email } = request.body

        const user = await User.findOne({ email })

        if (!user) {
            throw new Error('E-mail não cadastrado')
        }

        return response.json(user)
    } catch (err) {
        return response.status(400).json({ error: err.msg })
    }
})

export default sessionRouter
