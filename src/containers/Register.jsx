import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

import { register } from '../services/userService'
import { registerSchema } from '../services/schemas'

import Form from '../components/Form'
import Alert from '../components/Alert'

const useStyles = makeStyles(theme => ({
    register: {
        margin: 'auto',
        padding: theme.spacing(2),
        width: theme.spacing(32)
    }
}))

export default function Register({ updateState }) {
    const classes = useStyles()

    const [statusCode, setStatusCode] = useState(100)
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState('Error')

    useEffect(() => {
        if (statusCode === 201) window.location.href = "/"
        else if (statusCode !== 100) { // don't show Alert on mount and reset
            setMsg({ 400: 'Bad Request', 409: 'Username Taken' }[statusCode] || 'Error')
            setOpen(true)
        }
    }, [statusCode])

    // reset statusCode
    useEffect(() => {
        if (!open) setStatusCode(100)
    }, [open])

    return (
        <Paper className={classes.register}>
            <Alert open={open} type='error' msg={msg} setOpen={setOpen} />
            <br />
            <Typography>Register</Typography>
            <Form name='register' action={async values => { setStatusCode(await register(values)) }
            } schema={registerSchema} />
        </Paper>
    )
}