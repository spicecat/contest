import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../assets/404.jpeg'

export default function NotFound() {
  return <div>
    <strong>Page not found!</strong>
    <p><Link to='/'>Return Home</Link></p>
    <img src={notFound} alt='Not Found' />
  </div>
}