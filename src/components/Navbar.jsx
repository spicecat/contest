import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import Login from './Login'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }
}))

export default function Navbar({ page, theme }) {
    const classes = useStyles(theme)
    console.log('theme', theme)
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title}>
                    {page}
                </Typography>
                <Login />
            </Toolbar>
        </AppBar>

    )
}