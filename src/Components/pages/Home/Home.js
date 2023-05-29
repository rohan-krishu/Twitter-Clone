import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Link to={'/sign-up'} >Sign Up/Register</Link>
        Home
    </div>
  )
}
