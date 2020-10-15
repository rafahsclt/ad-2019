import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/logo.png'

import { Container, Content, MainTextBox, Developer, Actions } from './styles'

const Landing: React.FC = () => {
    const history = useHistory()

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Amigo Secreto"/>

                <MainTextBox>
                    <h1>Venha fazer parte do amigo secreto</h1>
                    <p>Adireito.com</p>
                </MainTextBox>

                <Developer>
                    <strong>Developed by</strong>
                    <span>Rafael Leonen</span>
                </Developer>

                <Actions>
                    <button
                        onClick={() => history.push('/log-in')}
                    >
                        Fazer login
                        <FiLogIn size={20} color="#f00"/>
                    </button>
                    <Link to="/sign-up">Ainda não se cadastrou?</Link>
                </Actions>
            </Content>
        </Container>
    )
}

export default Landing