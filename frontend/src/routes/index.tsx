import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import Landing from '../pages/Landing'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import Draw from '../pages/Draw'
import client from '../services/apollo'

const Routes: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Route path="/" component={Landing} exact />
                <Route path="/log-in" component={LogIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/draw" component={Draw} />
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default Routes