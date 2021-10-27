import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import Cookies from 'universal-cookie'

import './App.css'

import { Navbar, Register, Login, Contests, Contest, Submit, NotFound } from './containers'

const cookies = new Cookies()

export default function App() {
  const [page, setPage] = useState('Submit')

  return <BrowserRouter>
    <Navbar page={page} username={cookies.get('username')} />
    <div className='body'>
      <Paper className='paper' elevation={5}>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path={['/', '/contest']} component={Contests} />
          <Route exact path='/contest/:contest' component={Contest} />
          <Route exact path='/submit' component={Submit} />
          <Route component={NotFound} />
        </Switch>
      </Paper>
    </div>
  </BrowserRouter>
}
