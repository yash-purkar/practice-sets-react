import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Products</NavLink>
      <br />
      <NavLink to="/cart">My Cart</NavLink>
      <br />
      <NavLink to="/wishlist">My Wishlist</NavLink>
    </nav>
  )
}
