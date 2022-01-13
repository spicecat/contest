import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout, Register, Login, Contests, Contest, Problem, Submit, NotFound } from './containers'

export default function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Contests />} />
        <Route path='contest' element={<Contests />} />
        <Route path='contest/:contest' element={<Contest />}>
          <Route path=':problem' element={<Problem />} />
        </Route>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='submit' element={<Submit />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
}
