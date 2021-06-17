import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'

import { login } from '../services/userService'

export default function Login() {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => { setOpen(!open) }

    const [form, setForm] = useState({ username: '', password: '' })
    const handleInputChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async () => {
        const response = await login(form)
        console.log(response)
        if (response) {
            setForm({ username: '', password: '' })
            toggleOpen()
        } else {
            console.log()
        }
    }
    return (
        <>
            <Button color='inherit' variant='outlined' onClick={toggleOpen}>Login</Button>
            <Dialog open={open} keepMounted onClose={toggleOpen}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <TextField name='username' label='Username' onChange={handleInputChange} />
                    <TextField name='password' label='Password' onChange={handleInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button color='primary' onClick={handleSubmit}>Login</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}