import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home4 = () => {
  return (
    <>
      <h1>Welcome to video library.</h1>
      <h2>To browse all videos, click the below button or go to the videos page.</h2>
      <button><NavLink to="/videos">Explore Videos</NavLink></button>
    </>
  )
}
