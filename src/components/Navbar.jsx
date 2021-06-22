import React from 'react'
import Cookies from "universal-cookie"
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import DialogForm from './DialogForm'
import Logout from './Logout'

import { schema, register, login } from '../services/userService'

const cookies = new Cookies()

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }
}))

export default function Navbar({ page, theme }) {
    const classes = useStyles(theme)
    return (
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton edge='start' color='inherit' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title}>
                    {page}
                </Typography>
                {cookies.get('username') ?
                    <Logout /> :
                    <>
                        <DialogForm title="Register" action={register} fields={['username', 'password', 'confirm_password']} schema={schema.register} />
                        &nbsp;
                        <DialogForm title="Login" action={login} fields={['username', 'password']} schema={schema.login} />
                    </>}
            </Toolbar>
        </AppBar>

    )
}