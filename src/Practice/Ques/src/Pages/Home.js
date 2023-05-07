import React from 'react'
import {NavLink} from 'react-router-dom'
export const Home = () => {
  return (
    <>
    <h1>Welcome To Video Library</h1>
    <h3>Explore more videos by clicking button below👇</h3>
    <button><NavLink to="/videos">Explore Videos</NavLink></button>
    </>
  )
}