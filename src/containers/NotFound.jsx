import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <>
    <div>
      <strong>Page not found!</strong>
      <p><Link to='/'>Return Home</Link></p>
    </div>
    <img src='https://http.cat/404' alt='Not Found'/>
  </>
}