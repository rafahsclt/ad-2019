import React, { useState, useCallback } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'

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

const Draw: React.FC = () => {
    const [chosenUser, setChosenUser] = useState<User>()

    const drawRandomPeople = useCallback(async (users: User[]) => {
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
        
    }

    return (
        <h1>{chosenUser?.name}</h1>
    )
}

export default Draw