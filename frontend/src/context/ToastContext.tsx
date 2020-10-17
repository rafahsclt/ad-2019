import React, { createContext, useCallback, useState } from 'react'

import Toast from '../components/Toast'

interface ToastContextData {
    addToast(message: ToastMessage): void
    removeToast(): void
}

interface ToastMessage {
    title: string
    description?: string
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC =  ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([])

    const addToast = useCallback(({title, description}: ToastMessage) => {
        const toast = {
            title,
            description
        }

        setMessages(oldMessage => [...oldMessage, toast])
    }, [])

    const removeToast = useCallback(() => {
        setMessages([])
    }, [])

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <Toast messages={messages} />
        </ToastContext.Provider>
    )
}

export {ToastProvider, ToastContext }