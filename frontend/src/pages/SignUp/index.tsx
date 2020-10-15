import React from 'react'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import logoImg from '../../assets/logo.png'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => {
    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="Amigo Secreto"/>

                <form>
                    <h1>Faça seu Cadastro.</h1>

                    <Input name="name" icon={FiUser} placeholder="Nome" />
                    <Input name="email" icon={FiMail} placeholder="Email" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                    <Input name="password_confirmation" icon={FiLock} type="password" placeholder="Confirmação de Senha" />

                    <Button type="submit">Registrar</Button>
                </form>

                <a href="">
                    <FiArrowLeft size={18} />
                    Voltar para Landing Page
                </a>
            </Content>
        </Container>
    )
}

export default SignUp