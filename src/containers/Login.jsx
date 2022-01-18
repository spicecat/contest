import React, { useState, useEffect, useNavigate } from 'react'
import { login } from '../services/userService'
import { loginSchema } from '../services/schemas'
import { Alert, Form } from '../components'

export default function Login() {
    const navigate = useNavigate()
    const [statusCode, setStatusCode] = useState(100)

    useEffect(() => {
        if ([201, 202].includes(statusCode)) navigate('/')
    }, [statusCode])

    return <>
        <Alert statusCode={statusCode} />
        <br />
        <Form
            name='Login'
            action={async values => {
                setStatusCode(102)
                setStatusCode(await login(values))
            }}
            schema={loginSchema}
            rememberMe={false}
        />
    </>
}