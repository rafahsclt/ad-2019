import { gql } from 'apollo-server'

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        giftTip1: String
        giftTip2: String
        isChosen: Boolean
        nameSF: String
        gift1SF: String
        gift2SF: String
    }

    type Query {
        users: [User!]
        user(id: ID!): User
        authenticate(email: String!): User
        unchosenUsers: [User]
    }

    type Mutation {
        createUser(name: String!, email: String!, giftTip1: String, giftTip2: String): User
        updateChosenUser(id: String!): User
        updateSecretUser(id: String!, nameSF: String!, gift1SF: String!, gift2SF: String!): User
    }
`

export default typeDefs