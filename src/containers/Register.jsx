import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts'
import { registerSchema } from '../services/schemas'
import { Alert, Form } from '../components'

export default function Register() {
    const navigate = useNavigate()
    const [{ statusCode }, userDispatch] = useContext(UserContext)
    const [alertCode, setAlertCode] = useState(100)

    const handleRegister = async value => {
        setAlertCode(102)
        await userDispatch({ type: 'register', value })
        if ([201, 202].includes(statusCode)) navigate('/')
    }
    useEffect(() => setAlertCode(statusCode), [statusCode])
    useEffect(() => setAlertCode(100), [])

    return <>
        <Alert alertCode={alertCode} />
        <br />
        <Form
            name='Register'
            action={handleRegister}
            schema={registerSchema}
            rememberMe={true}
        />
    </>
}