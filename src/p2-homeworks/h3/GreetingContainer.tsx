import React, {ChangeEvent, KeyboardEvent, MouseEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {v1} from "uuid";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // need to fix any
        setError(false)
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        const trimmedName = name.trim()
        if (trimmedName) {
            addUserCallback(trimmedName)
            alert(`Hello ${trimmedName} !`)
        }
        else {
            setError(true)
        }
        setName('')
    }

    const totalUsers = users.length // need to fix

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            onEnter={onEnter}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

function setUsers(arg0: UserType[]) {
    throw new Error('Function not implemented.');
}

