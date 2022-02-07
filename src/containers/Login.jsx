import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts'
import { loginSchema as schema } from '../services/schemas'
import { AlertForm } from '../components'

export default function Login() {
    const navigate = useNavigate()
    const [{ statusCode }, userDispatch] = useContext(UserContext)

    const handleLogin = async value => {
        await userDispatch({ type: 'login', value })
    }

    return <AlertForm
        name='Login'
        action={handleLogin}
        statusCode={statusCode}
        onSuccess={() => navigate('/')}
        schema={schema}
    />
}