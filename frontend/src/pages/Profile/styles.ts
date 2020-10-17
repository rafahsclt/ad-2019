import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(90deg, #B71818 0%, #C44747 100%);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    padding: 20px;

    width: 100%;
    max-width: 700px;

    height: 90%;
    max-height: 700px;

    border: 2px solid #fff;
    border-radius: 12px;

    header {
        border-bottom: 2px solid #fff;
        padding-bottom: 12px;
        margin-bottom: 12px;
    }

    form {
        h2 {
            margin-top: 15px;
        }

        button {
            margin: 20px 0;
        }
    }

`