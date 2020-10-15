import React from 'react'
import { FiArrowLeft, FiLock, FiUser } from 'react-icons/fi'

import logoImg from '../../assets/logo.png'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, Content, Background } from './styles'

const LogIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Amigo Secreto"/>

                <form>
                    <h1>Faça seu login.</h1>

                    <Input name="email" icon={FiUser} placeholder="Email" />
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                    <Button type="submit">Entrar</Button>
                </form>

                <a href="">
                    <FiArrowLeft size={18} />
                    Voltar para Landing Page
                </a>
            </Content>
            <Background />
        </Container>
    )
}

export default LogIn