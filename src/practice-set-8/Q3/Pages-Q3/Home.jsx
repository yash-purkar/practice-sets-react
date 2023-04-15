import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>Welcome John</h1>
      <NavLink to='/questions'>Show questions list</NavLink>
    </>
  )
}
