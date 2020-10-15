import styled from 'styled-components'
import { shade } from 'polished'

import landingImg from '../../assets/landing.png'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #B71818 0%, #C44747 100%);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    position: relative;

    width: 100%;
    max-width: 1100px;

    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    img {
        width: 300px;
        height: 300px;
    }

    background: url(${landingImg}) no-repeat 60% center;
`

export const MainTextBox = styled.main`
    h1 {
        max-width: 350px;
        font-size: 66px;
        font-weight: 900;
        line-height: 76px;
    }

    p {
        margin-top: 20px;
        font-size: 24px;
        line-height: 34px;
    }
`

export const Developer = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    flex-direction: column;

    font-size: 24px;
    line-height: 34px;
    text-align: right;

    strong {
        font-weight: bolder;
    }
`

export const Actions = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 24px;
        padding: 12px 20px;
        border: 0;
        border-radius: 12px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #f00;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#fff')}
        }

        svg {
            margin-left: 8px;
        }

        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        font-size: 20px;

        color: #fff;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#fff')}
        }
    }
`