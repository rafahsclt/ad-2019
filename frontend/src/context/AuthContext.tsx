import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

interface AuthContextData {
    user: object
    logIn(credentials: LogInCredentials): Promise<void>
    signOut(): void
}

interface LogInCredentials {
    email: string
}

interface User {
    _id: string
    name: string
    email: string
    giftTip1: string
    giftTip2: string
    isChosen: boolean
    nameSF: string
    gift1SF: string
    gift2SF: string
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storagedUser = localStorage.getItem('@AD-2019:')

        console.log(storagedUser)

        if(storagedUser) return JSON.parse(storagedUser)

        return {}
    })


    const logIn = useCallback(async ({ email } : LogInCredentials) => {
            const response = await api.post('/session', { email })

            setUser(response.data)

            localStorage.setItem('@AD-2019:', JSON.stringify(response.data))
    },[])

    const signOut = useCallback(() => {
        localStorage.removeItem('@AD-2019:')
        setUser({})
    },[])

    return (
        <AuthContext.Provider value={{ user, logIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

