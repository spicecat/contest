import React from 'react'
import { useState, useEffect } from 'react'
import { register } from '../services/userService'
import { registerSchema } from '../services/schemas'
import { Alert, Form } from '../components'
export default function Register() {
    const [statusCode, setStatusCode] = useState(100)

    useEffect(() => {
        if ([201, 202].includes(statusCode)) window.location.href = '/'
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