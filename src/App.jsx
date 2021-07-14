import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Cookies from 'universal-cookie'

import './styles/App.css'
import Navbar from './components/Navbar'

import Submit from './containers/Submit'
import Login from './containers/Login'
import Register from './containers/Register'

const cookies = new Cookies()

export default function App() {
  const [page, setPage] = useState('Submit')

  return (
    <BrowserRouter>
      <Navbar page={page} username={cookies.get('username')} />
      <br />
      <Switch>
        <Route exact path="/submit">
          <Submit />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Submit /> {/* home page */}
        </Route>
        <Route>
          <Submit /> {/* page not found */}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
