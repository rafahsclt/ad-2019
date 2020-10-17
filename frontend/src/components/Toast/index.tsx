import React, { useContext } from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { ToastContext } from '../../context/ToastContext'

import { Container, ToastContainer } from './styles'

interface ToastMessage {
    title: string
    description?: string
}

interface ToastMessageProps {
    messages: ToastMessage[]
}

const Toast: React.FC<ToastMessageProps> = ({ messages }) => {
    const { removeToast } = useContext(ToastContext)

    return (
        <Container>
            {messages.map((msg) => (
                <ToastContainer>
                    <FiAlertCircle size={20} />

                    <div>
                        <strong>{msg.title}</strong>
                        {msg.description && <p>{msg.description}</p>}
                    </div>

                    <button
                        onClick={removeToast}
                    >
                        <FiXCircle size={18} />
                    </button>
                </ToastContainer>
            ))}
        </Container>
    )
}

export default Toast