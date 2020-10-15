import styled from 'styled-components'
import { shade } from 'polished'

import SignUpBackground from '../../assets/signUpBackground.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;

    background: linear-gradient(90deg, #B71818 0%, #C44747 100%);

    width: 100%;
    max-width: 700px;

    img {
        height: 300px;
        width: 300px;
    }

    form {
        margin-bottom: 40px;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }
    }

    a {
        color: #f4ede8;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: color 0.2s;

        svg {
            margin-right: 6px;
        }

        &:hover {
            color: ${shade(0.2, '#f4ede8')}
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${SignUpBackground}) no-repeat center;
    background-size: cover;
`