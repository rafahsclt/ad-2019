import React, { useContext, useRef, useCallback } from 'react'
import { FiArrowLeft, FiMail } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import logoImg from '../../assets/logo.png'
import getValidationError from '../../utils/getValidationError'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { AuthContext } from '../../context/AuthContext'

import { Container, Content, Background } from './styles'

interface FormData {
    email: string
}

const LogIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const { user, logIn } = useContext(AuthContext)
    const history = useHistory()

    const handleSubmit = useCallback(async (data: FormData): Promise<void> => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                        .email('Digite um email válido')
                        .required('Email obrigatório')
            })

            await schema.validate(data, {
                abortEarly: false
            }) 

            await logIn({
                email: data.email
            })

            history.push('/draw')
        } catch (err) {
            console.log(err)
            const errors = getValidationError(err)
            formRef.current?.setErrors(errors)
        }
    },[logIn])

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Amigo Secreto"/>

                <Form onSubmit={handleSubmit} ref={formRef}>
                    <h1>Faça seu login.</h1>

                    <Input name="email" icon={FiMail} placeholder="Email" />

                    <Button type="submit">Entrar</Button>
                </Form>

                <Link to="/">
                    <FiArrowLeft size={18} />
                    Voltar para Landing Page
                </Link>
            </Content>
            <Background />
        </Container>
    )
}

export default LogIn