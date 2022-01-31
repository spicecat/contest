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
            name='Register'
            action={handleRegister}
            schema={registerSchema}
            rememberMe={true}
        />
    </>
}