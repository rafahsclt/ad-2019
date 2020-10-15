import { ApolloServer } from 'apollo-server'

import './database'

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(4000).then(( { url } ) => {
    console.log(`🚀  Server ready at ${url}`)
})