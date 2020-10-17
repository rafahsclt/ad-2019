import React, { useState, useCallback, useContext, useEffect } from 'react'
import { FiPower, FiEdit, FiUser, FiCheckCircle, FiXCircle } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import api from '../../services/api'

import Button from '../../components/Button'
import {
    Container,
    Content,
    Participants,
    MyUser,
    ChosenUser,
    User,
    ParticipantBox
} from './styles'


interface User {
    _id: string
    name: string
    email: string
    giftTip1: string
    giftTip2: string
    isChosen: boolean
    nameSF: string
    gift1SF: string
    gift2SF: string
}

const Draw: React.FC = () => {
    const [participants, setParticipants] = useState<User[]>([])
    const [myUser, setMyUser] = useState<User>({} as User)

    const history = useHistory()

    const { user, signOut } = useContext(AuthContext)

    useEffect(() => {
        const typedUser = user as User

        api.get('/user').then(response => {
            setParticipants(response.data)
        })

        api.get(`/user/${typedUser._id}`).then(response => {
            setMyUser(response.data)
        })
    }, [user])

    console.log(user)

    const drawRandomPeople = useCallback(async () => {
        const response = await api.get('/session')

        const typedUser = user as User

        const putResponse = await api.put(`/user/${typedUser._id}`, {
            ...typedUser,
            nameSF: response.data.name,
            gift1SF: response.data.giftTip1,
            gift2SF: response.data.giftTip2
        })

        setMyUser(putResponse.data)

        await api.patch(`/user/${response.data._id}`, {
            ...response.data,
            isChosen: true
        })
     }, [user])
 
    return (
        <Container>
            <Content>
                <Participants>
                    <header>
                        <h1>Participantes</h1>
                    </header>
                    <main>
                        {participants.map(participant => (
                            <ParticipantBox
                                key={participant._id}
                            >
                                <div>
                                    <FiUser size={22} color="#fff" />
                                    <span>{participant.name}</span>
                                </div>
                                {participant.isChosen ?
                                    <FiCheckCircle size={22} color="#0c0" />
                                    :
                                    <FiXCircle size={22} color="#000" />
                                }
                            </ParticipantBox>
                        ))}
                    </main>
                </Participants>
                <User>
                    <MyUser>
                        <header>
                            <h1>Seu usuário</h1>
                            <div>
                                <button>
                                    <FiEdit size={26} color="#fff" />
                                </button>
                                <button onClick={() => {
                                    signOut()
                                    history.push('/')
                                }}>
                                    <FiPower size={26} color="#fff" />
                                </button>
                            </div>
                        </header>
                        <main>
                            <h2>Nome : {myUser.name} </h2>
                            <h2>Email : {myUser.email}</h2>
                            <span>Suas prefêrencias de presente</span>
                            <ul>
                                <li>{myUser.giftTip1}</li>
                                <li>{myUser.giftTip2}</li>
                            </ul>

                        </main>
                    </MyUser>
                    <ChosenUser>
                        <header>
                            <h1>Pessoa sorteada</h1>
                        </header>
                        {
                            myUser.nameSF ?
                                <main>
                                    <h2>{myUser.nameSF}</h2>
                                    <span>Dicas de presente</span>
                                    <ul>
                                        <li>{myUser.gift1SF}</li>
                                        <li>{myUser.gift2SF}</li>
                                    </ul>
                                </main>
                                :
                                <>
                                    <h2>Você ainda não sorteou ninguém</h2>
                                    <Button
                                        style={{ marginTop: 40 }}
                                        onClick={drawRandomPeople}
                                    >
                                        Sortear uma pessoa
                                    </Button>
                                </>
                        }

                    </ChosenUser>
                </User>
            </Content>
        </Container>
    )
}

export default Draw