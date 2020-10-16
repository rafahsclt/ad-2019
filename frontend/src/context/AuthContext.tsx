import React, { createContext, useCallback, useState, useEffect } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

interface AuthContextData {
    user: object
    logIn(credentials: LogInCredentials): Promise<void>
    signOut(): void
}

interface LogInCredentials {
    email: string
}

const LOGIN = gql`
  query Authenticate($email: String!) {
    authenticate(email: $email) {
      id,
      name,
      email,
      giftTip1,
      giftTip2,
      nameSF,
      gift1SF,
      gift2SF,
    }
  }
`



export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState(() => {
        const storagedUser = localStorage.getItem('@AD-2019:')

        console.log(storagedUser)

        if(storagedUser) return JSON.parse(storagedUser)

        return {}
    })

    const [Authenticate , { loading, data }] = useLazyQuery(LOGIN)

    const logIn = useCallback(async ({ email } : LogInCredentials) => {
        Authenticate({ variables: { email }})
    },[Authenticate])

    const signOut = useCallback(() => {
        localStorage.removeItem('@AD-2019:')
        setUser({})
    },[])

    useEffect(() => {
        if(!loading && data) {

            setUser(data.authenticate)

            localStorage.setItem('@AD-2019:', JSON.stringify(data.authenticate))
        }
    }, [data, setUser])

    return (
        <AuthContext.Provider value={{ user, logIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

