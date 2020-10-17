import React, { useCallback, useContext, useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { FiUser, FiMail, FiGift} from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { AuthContext } from '../../context/AuthContext'
import { ToastContext } from '../../context/ToastContext'
import api from '../../services/api'
import getValidationError from '../../utils/getValidationError'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Container, Content } from './styles'
import { User } from '../Draw/styles'

interface User {
    _id: string
    name: string
    email: string
    giftTip1: string
    giftTip2: string
}

const Profile: React.FC = () => {
    const { user, signOut } = useContext(AuthContext)
    const { addToast } = useContext(ToastContext)

    const typedUser = user as User
    const history = useHistory()
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data) => {
        try {
            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                        .email('Digite um email válido')
                        .required('Email obrigatório'),
                gift: Yup.string().max(10, 'Máximo 10 caractéres').notRequired(),
                gift2: Yup.string().max(10, 'Máximo 10 caractéres').notRequired()
            })

            await schema.validate(data, {
                abortEarly: false
            }) 

            await api.post(`/profile/${typedUser._id}`, { 
                name: data.name,
                email: data.email,
                giftTip1: data.gift,
                giftTip2: data.gift2                
            })

            history.push('/log-in')
        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationError(err)
                formRef.current?.setErrors(errors)

                addToast({
                    title: 'Erro na validação',
                    description: `${errors.name} - ${errors.email}`
                })
            }

            history.push('/log-in')
        }
    }, [typedUser._id, history, addToast])

    const deleteUser = useCallback(async () => {
        await api.delete(`/profile/${typedUser._id}`)
        signOut()
        history.push('/')
    }, [history, signOut, typedUser._id])

    return (
        <Container>
            <Content>
                <header>
                    <h1>Seu Perfil</h1>
                </header>

                <Form onSubmit={handleSubmit} ref={formRef}>
                    <h2>Nome</h2>
                    <Input name="name" icon={FiUser} placeholder="Nome" defaultValue={typedUser.name} />
                    <h2>Email</h2>
                    <Input name="email" icon={FiMail} placeholder="Email" defaultValue={typedUser.email} />
                    <h2>Dica de presente 1</h2>
                    <Input name="gift" icon={FiGift} placeholder="Dica de presente" defaultValue={typedUser.giftTip1} />
                    <h2>Dica de presente 2</h2>
                    <Input name="gift2" icon={FiGift} placeholder="Dica de presente 2" defaultValue={typedUser.giftTip2} />

                    <Button type="submit">Alterar Usuário</Button>
                </Form>
                
                <Button
                    onClick={deleteUser}
                >
                    Deletar Usuário
                </Button>
            </Content>
        </Container>
    )
}

export default Profile