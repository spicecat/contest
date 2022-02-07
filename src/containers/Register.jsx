import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts'
import { registerSchema as schema } from '../services/schemas'
import { AlertForm } from '../components'

export default function Register() {
    const navigate = useNavigate()
    const [{ statusCode }, userDispatch] = useContext(UserContext)

    const handleRegister = async value => {
        await userDispatch({ type: 'register', value })
    }

    return <AlertForm
        name='Register'
        action={handleRegister}
        statusCode={statusCode}
        onSuccess={() => navigate('/')}
        schema={schema}
    />
}