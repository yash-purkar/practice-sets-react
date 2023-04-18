import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {

  return (
    <>

      <ul>
        <li><NavLink to="/inbox">Inbox</NavLink></li>
        <li><NavLink to="/sent">Sent</NavLink></li>
      </ul>


    </>
  )
}
