import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        giftTips: [String]
        isChosen: Boolean
        yourSecretFriend: String
    }

    type Query {
        users: [User!]
        user(id: ID!): User
        UnchosenUsers: [User]
    }

    type Mutation {
        createUser(name: String!, email: String!, giftTips: [String]): User
        updateChosenUser(id: String!): User
        updateSecretUser(id: String!, yourSecretFriend: String!): User
    }
`

export default typeDefs