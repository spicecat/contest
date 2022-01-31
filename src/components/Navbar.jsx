import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { UserContext } from '../contexts'

export default function Navbar({ page }) {
    const [{ username }, userDispatch] = useContext(UserContext)

    const handleLogout = async () => {
        await userDispatch({ type: 'logout' })
    }

    return <AppBar position='static'>
        <Toolbar variant='dense'>
            <Link to='/'>
                <IconButton color='inherit' className='menu-button'>
                    <MenuIcon />
                </IconButton>
            </Link>
            &nbsp;
            <Typography>{page}</Typography>
            <span className='user-control' />
            {username ?
                <>
                    <Typography>Logged in as: {username}</Typography>
                    &nbsp;
                    <Button color='inherit' variant='outlined' size='small' onClick={handleLogout}>Logout</Button>
                </> :
                <>
                    <Button color='inherit' variant='outlined' size='small' to='/register' component={Link}>Register</Button>
                    &nbsp;
                    <Button color='inherit' variant='outlined' size='small' to='/login' component={Link}>Login</Button>
                </>}
        </Toolbar>
    </AppBar>
}