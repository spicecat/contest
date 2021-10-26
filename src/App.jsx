import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import Cookies from 'universal-cookie'

import './styles/App.css'

import { Navbar, Register, Login, Contests, Submit } from './containers'

const cookies = new Cookies()

export default function App() {
  const [page, setPage] = useState('Submit')

  return <BrowserRouter>
    <Navbar page={page} username={cookies.get('username')} />
    <div className='body'>
      <Paper className='paper' elevation={5}>
        <Switch>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/submit'>
            <Submit />
          </Route>
          <Route exact path='/'>
            <Contests />
          </Route>
          <Route>
            <Submit /> {/* page not found */}
          </Route>
        </Switch>
      </Paper>
    </div>
  </BrowserRouter>
}
