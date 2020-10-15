import React, { createContext, useCallback } from 'react'

interface AuthContextData {
    name: string
    logIn(): Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const logIn = useCallback(async (email: string) => {

    },[])

    return (
        <AuthContext.Provider value={{ name: '', logIn}}>
            {children}
        </AuthContext.Provider>
    )
}

