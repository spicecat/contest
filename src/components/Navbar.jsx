import React from 'react'
import Cookies from 'universal-cookie'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import DialogForm from './DialogForm'
import Logout from './Logout'

import { register, login } from '../services/userService'
import { registerSchema, loginSchema } from '../services/schemas'

const cookies = new Cookies()

const useStyles = makeStyles(theme => ({
    menuButton: { marginRight: theme.spacing(2), },
    userControl: { marginLeft: 'auto' }
}))

export default function Navbar({ page }) {
    const classes = useStyles()

    return (
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton color='inherit' className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography>
                    {page}
                </Typography>
                <div className={classes.userControl}>
                    {cookies.get('username') ?
                        <Logout /> :
                        <>
                            <DialogForm name='Register' action={register} schema={registerSchema} />
                            &nbsp;
                            <DialogForm name='Login' action={login} schema={loginSchema} />
                        </>}
                </div>
            </Toolbar>
        </AppBar >

    )
}