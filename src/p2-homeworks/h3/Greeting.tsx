import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onEnter, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass


    return (
        <div className={s.greeting}>

                <input onKeyDown={onEnter}
                       value={name}
                       onChange={setNameCallback}
                       className={inputClass}/>
                <span>{error}</span>

            <button className={s.button} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
