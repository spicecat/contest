import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts'
import { loginSchema } from '../services/schemas'
import { Alert, Form } from '../components'

export default function Login() {
    const navigate = useNavigate()
    const [{ statusCode }, userDispatch] = useContext(UserContext)
    const [alertCode, setAlertCode] = useState(100)

    const handleLogin = async value => {
        setAlertCode(102)
        await userDispatch({ type: 'login', value })
    }
    const updateAlertCode = () => {
        setAlertCode(statusCode)
        if ([200, 201, 202].includes(statusCode)) navigate('/')
    }
    useEffect(updateAlertCode, [navigate, statusCode])

    return <>
        <Alert alertCode={alertCode} />
        <br />
        <Form
            name='Login'
            action={handleLogin}
            schema={loginSchema}
            rememberMe={false}
        />
    </>
}