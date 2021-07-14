import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Cookies from 'universal-cookie'

import './styles/App.css'
import Navbar from './components/Navbar'

import Submit from './containers/Submit'
import Login from './containers/Login'
import Register from './containers/Register'

const cookies = new Cookies()

export default function App() {
  const [page, setPage] = useState('Submit')
  const [username, setUsername] = useState()

  return (
    <BrowserRouter>
      <Navbar page={page} username={username} setUsername={setUsername} />
      <br />
      <Switch>
        <Route exact path="/submit">
          <Submit />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register updateState={setUsername} />
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
