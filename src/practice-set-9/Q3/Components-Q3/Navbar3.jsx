import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar3 = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/menu">Menu</NavLink> |{" "}
      <NavLink to="/cart">Cart</NavLink>
    </>
  )
}
