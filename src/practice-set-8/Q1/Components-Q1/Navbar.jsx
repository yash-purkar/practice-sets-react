import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({ fontWeight: isActive && "bold", color: isActive && "orange" })
  return (
    <nav>
      <NavLink to="/" style={getActiveStyle}>Products</NavLink>
      <br />
      <NavLink to="/cart" style={getActiveStyle}>My Cart</NavLink>
      <br />
      <NavLink to="/wishlist" style={getActiveStyle}>My Wishlist</NavLink>
    </nav>
  )
}
