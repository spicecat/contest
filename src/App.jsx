import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import Cookies from 'universal-cookie'

import './App.css'

import { Navbar, Register, Login, Contests, Contest, Submit, NotFound } from './containers'

const cookies = new Cookies()

export default function App() {

  return <BrowserRouter>
    <Navbar username={cookies.get('username')} />
    <div className='body'>
      <Paper className='paper' elevation={5}>
        <Routes>
          <Route path='/' element={<Contests />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='contest/:contest' element={<Contest />} />
          <Route path='submit' element={<Submit />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Paper>
    </div>
  </BrowserRouter>
}
