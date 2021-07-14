import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

import { login } from '../services/userService'
import { loginSchema } from '../services/schemas'

import Form from '../components/Form'
import Alert from '../components/Alert'

const useStyles = makeStyles(theme => ({
    login: {
        margin: 'auto',
        padding: theme.spacing(2),
        width: theme.spacing(32),
    }
}))

export default function Login() {
    const classes = useStyles()

    const [statusCode, setStatusCode] = useState(100)
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState('Error')

    useEffect(() => {
        if (statusCode === 202) window.location.href = "/"
        else if (statusCode !== 100) { // don't show Alert on mount and reset
            setMsg({ 400: 'Bad Request', 401: 'Incorrect username or password' }[statusCode] || 'Error')
            setOpen(true)
        }
    }, [statusCode])

    // reset statusCode
    useEffect(() => {
        if (!open) setStatusCode(100)
    }, [open])
    return (
        <Paper className={classes.login}>
            <Alert open={open} type='error' msg={msg} setOpen={setOpen} />
            <br />
            <Typography>Login</Typography>
            <Form name='Login' action={async values => { setStatusCode(await login(values)) }} schema={loginSchema} />
        </Paper>
    )
}