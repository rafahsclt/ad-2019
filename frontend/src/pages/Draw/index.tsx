import React, { useState, useCallback } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { FiPower, FiEdit, FiUser, FiCheckCircle, FiXCircle } from 'react-icons/fi'

import { Container, 
    Content, 
    Participants, 
    MyUser, 
    ChosenUser, 
    User, 
    ParticipantBox } from './styles'

interface User {
    id: string
    name: string
    email: string
    giftTips: string[]
    isChosen: boolean
}

const GET_USERS = gql`
    query GetUser {
        UnchosenUsers {
            id,
            name,
            email,
            giftTips,
            isChosen
        }
    }
`

const UPDATE_CHOSEN_USER = gql`
    mutation UpdateChosenUser($id: String!) {
        updateChosenUser(id: $id) {
            id,
            name,
            email,
            giftTips,
            isChosen
        }
    }
`

const CREATE_USER = gql`
    mutation CreateUser($name: String!, $email: String!, $giftTips: [String!]) {
        createUser(name: $name, email: $email, giftTips: $giftTips) {
            id,
            name,
            email,
            giftTips,
            isChosen,
            yourSecretFriend
        }
    }
`

const users = [
    {
        id: 1,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 2,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 3,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 4,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 5,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 6,
        name: 'Rafael Leonen',
        isChosen: false
    },
    {
        id: 7,
        name: 'Rafael Leonen',
        isChosen: false
    },
    {
        id: 8,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 9,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 10,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 11,
        name: 'Rafael Leonen',
        isChosen: true
    },
    {
        id: 12,
        name: 'Rafael Leonen',
        isChosen: false
    },
    {
        id: 13,
        name: 'Rafael Leonen',
        isChosen: false
    },
    {
        id: 14,
        name: 'Rafael Leonen',
        isChosen: true
    },
]

const Draw: React.FC = () => {
    const [chosenUser, setChosenUser] = useState<User>()
    const [participants, setParticipants] = useState(users)

   /* const drawRandomPeople = useCallback(async (users: User[]) => {
        const quantityOfUsers = users.length

        const chNumber = Math.floor(Math.random() * quantityOfUsers)

        const chUser = users[chNumber]

        await updateChosenUser({
            variables: { id: chUser.id }
        })

        setChosenUser(chUser)

        return chUser
    }, [])

    

    const { loading, error, data } = useQuery(GET_USERS, {
        onCompleted: data => drawRandomPeople(data.UnchosenUsers)
    })

    const [updateChosenUser] = useMutation(UPDATE_CHOSEN_USER)
    // const [createUser] = useMutation(CREATE_USER)

    if (!loading && !error && data) {
        
    } */

    return (
        <Container>
            <Content>
                <Participants>
                    <header>
                        <h1>Participantes</h1>
                    </header>
                    <main>
                        {participants.map(user => (
                            <ParticipantBox 
                                key={user.id}
                                
                            >
                                <div>
                                    <FiUser size={22} color="#fff"/>
                                    <span>{user.name}</span>
                                </div>
                                {user.isChosen ? 
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
                                <button>
                                    <FiPower size={26} color="#fff" />
                                </button>
                            </div>
                        </header>
                        <main>
                            <h2>Nome : Rafael Leonen</h2>
                            <h2>Email : rafah.sclt@gmail.com</h2>
                            <span>Suas prefêrencias de presente</span>
                            <ul>
                                <li>Roupa</li>
                                <li>Chocolate</li>
                            </ul>
                        </main>
                    </MyUser>
                    <ChosenUser>
                        <header>
                            <h1>Pessoa sorteada</h1>
                        </header>
                        <main>
                            <h2>Letícia Silva</h2>
                            <span>Dicas de presente</span>
                            <ul>
                                <li>Roupa</li>
                                <li>Chocolate</li>
                            </ul>
                        </main>
                    </ChosenUser>
                </User>
            </Content>
        </Container>
    )
}

export default Draw