import React, { useState, useEffect, useNavigate } from 'react'
import { register } from '../services/userService'
import { registerSchema } from '../services/schemas'
import { Alert, Form } from '../components'
export default function Register() {
    const navigate = useNavigate()
    const [statusCode, setStatusCode] = useState(100)

    useEffect(() => {
        if ([201, 202].includes(statusCode)) navigate('/')
    }, [statusCode])

    return <>
        <Alert statusCode={statusCode} />
        <br />
        <Form
            name='Register'
            action={async values => {
                setStatusCode(102)
                setStatusCode(await register(values))
            }}
            schema={registerSchema}
            rememberMe={true}
        />
    </>
}