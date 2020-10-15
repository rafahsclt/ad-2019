import { Mongoose } from 'mongoose'
import User from '../models/User'

interface ISchema {
    id: string
    name: string
    email: string
    giftTips: string[]
    isChosen: boolean
    yourSecretFriend: string
}

export default {
    Query: {
        users: () => User.find(),
        user: (_: Object, { id }: ISchema) => User.findById(id),
        UnchosenUsers: async () => User.find({ isChosen: null })
    },

    Mutation: {
        createUser: (_: Object, { name, email, giftTips }: ISchema) => User.create({ name, email, giftTips }),
        updateChosenUser: async (_: Object, { id }: ISchema) => {
            const user = await User.findByIdAndUpdate(id , { isChosen: true })

            if(!user) {
                throw new Error('Usuário não encontrado!')
            }

            return user
        },
        updateSecretUser: async (_: Object, { id, yourSecretFriend }: ISchema) => {
            const user = await User.findByIdAndUpdate(id, { yourSecretFriend })

            if(!user) {
                throw new Error('Usuário não encontrado')
            }

            return user
        }
    },
}