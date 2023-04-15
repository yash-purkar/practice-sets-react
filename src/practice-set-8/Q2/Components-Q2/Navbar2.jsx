import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar2 = () => {
  return (
    <>
      <NavLink to="/" >All Todos</NavLink> |{" "}
      <NavLink to="/done">Done Todos</NavLink> |{" "}
      <NavLink to="/open">Open Todos</NavLink>
    </>
  )
}
