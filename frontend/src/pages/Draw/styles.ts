import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #B71818 0%, #C44747 100%);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`
export const Participants = styled.div`
    margin-right: 20px;
    padding: 20px;
    height: 100%;
    width: 100%;

    border-radius: 22px;
    background-color: transparent;
    border: 5px solid #fff;

    display: flex;
    flex-direction: column;

    header {
        border-bottom: 2px solid #fff;
        padding-bottom: 12px;
        margin-bottom: 12px;
    }

    main {
        flex: 1;
        overflow-x: hidden;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 0;
        }

        scroll-behavior: smooth;
    }
`

export const User = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const MyUser = styled.div`
    margin-bottom: 20px;
    background-color: transparent;
    border: 5px solid #fff;
    height: 100%;
    width: 100%;

    border-radius: 22px;

    padding: 20px;

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        border-bottom: 2px solid #fff;
        padding-bottom: 12px;
        margin-bottom: 12px;
        

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        button {
            background: transparent;
            border: 0;

            margin-right: 15px;
        }
    }

    main {
        padding-top: 10px;
        padding-left: 30px;

        h2 {
            margin-bottom: 18px;
        }

        span {
            font-size: 20px;
        }

        ul {
            padding: 0 40px;

            li {
                margin-top: 12px;
            }
        }
    }
`

export const ChosenUser = styled.div`
    background-color: transparent;
    border: 5px solid #fff;
    height: 100%;
    width: 100%;

    border-radius: 22px;

    padding: 20px;
    
    header {
        border-bottom: 2px solid #fff;
        padding-bottom: 12px;
        margin-bottom: 12px;
    }

    main {
        padding-left: 30px;

        h2 {
            margin: 24px 0;
            font-size: 32px;
        }

        span {
            font-size: 20px;
        }

        ul {
            padding: 0 40px;

            li {
                margin-top: 12px;
            }
        }
    }
`

export const ParticipantBox = styled.section`
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 15px 10px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-right: 15px;
        }
    }
`