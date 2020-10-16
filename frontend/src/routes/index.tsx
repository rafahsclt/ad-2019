import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'


import Landing from '../pages/Landing'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import Draw from '../pages/Draw'
import client from '../services/apollo'

import { AuthProvider } from '../context/AuthContext'

const Routes: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                <BrowserRouter>
                    <Route path="/" component={Landing} exact />
                    <Route path="/log-in" component={LogIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/draw" component={Draw} isPrivate />
                </BrowserRouter>
            </AuthProvider>
        </ApolloProvider>
    )
}

export default Routes