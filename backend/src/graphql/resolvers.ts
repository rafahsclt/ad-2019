import User from '../models/User'

interface ISchema {
    id: string
    name: string
    email: string
    giftTip1: string
    giftTip2: string
    isChosen: boolean
    nameSF: string
    gift1SF: string
    gift2SF: string
}

export default {
    Query: {
        users: () => User.find(),
        user: (_: Object, { id }: ISchema) => User.findById(id),
        authenticate: (_:Object, { email }: ISchema) => User.findOne({ email }),
        unchosenUsers: async () => User.find({ isChosen: null })
    },

    Mutation: {
        createUser: (_: Object, { name, email, giftTip1, giftTip2 }: ISchema) => User.create({ name, email, giftTip1, giftTip2 }),
        updateChosenUser: async (_: Object, { id }: ISchema) => {
            const user = await User.findByIdAndUpdate(id , { isChosen: true })

            if(!user) {
                throw new Error('Usuário não encontrado!')
            }

            return user
        },
        updateSecretUser: async (_: Object, { id, nameSF, gift1SF, gift2SF }: ISchema) => {
            const user = await User.findByIdAndUpdate(id, { nameSF, gift1SF, gift2SF })

            if(!user) {
                throw new Error('Usuário não encontrado')
            }

            return user
        }
    },
}