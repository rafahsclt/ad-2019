import React, { createContext, useCallback, useState, useEffect } from 'react'
import api from '../services/api'

interface AuthContextData {
    user: object
    logIn(credentials: LogInCredentials): Promise<void>
    signOut(): void
}

interface LogInCredentials {
    email: string
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
            const user = await api.post('/sessions', { email })

            setUser(user)

            localStorage.setItem('@AD-2019:', JSON.stringify(user))
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

