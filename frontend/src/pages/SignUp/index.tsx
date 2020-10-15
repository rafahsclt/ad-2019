import React, { useRef } from 'react'
import { FiArrowLeft, FiMail, FiUser, FiGift } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'


import logoImg from '../../assets/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import getValidationError from '../../utils/getValidationError'
import { Container, Content, Background } from './styles'

interface FormData {
    name: string
    email: string
    gift: string
    gift2: string
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = async (data: FormData): Promise<void> => {
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
        } catch (err) {
            const errors = getValidationError(err)
            formRef.current?.setErrors(errors)
        }
    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="Amigo Secreto"/>

                <Form onSubmit={handleSubmit} ref={formRef}>
                    <h1>Faça seu Cadastro.</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="Email" />
                    <Input name="gift" icon={FiGift} placeholder="Dica de presente" />
                    <Input name="gift2" icon={FiGift} placeholder="Dica de presente 2" />

                    <Button type="submit">Registrar</Button>
                </Form>

                <Link to="/">
                    <FiArrowLeft size={18} />
                    Voltar para Landing Page
                </Link>
            </Content>
        </Container>
    )
}

export default SignUp