import React from 'react'

import './styles/App.css'
import Navbar from './components/Navbar'
import Submit from './containers/Submit'

export default function App() {
  return (
    <>
      <Navbar page='Submit' />
      <Submit />
    </>
  )
}
