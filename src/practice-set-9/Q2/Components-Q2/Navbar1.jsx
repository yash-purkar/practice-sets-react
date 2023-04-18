import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BooksContext } from '../Contexts-Q2/BooksContext'

const styles = {
  width: "800px",
  margin: "auto",
  display: "flex",
  justifyContent: "space-around"
}

export const Navbar1 = () => {
  const { favoriteBooks, readBooks } = useContext(BooksContext);
  return (
    <nav style={styles}>
      <NavLink to="/">All Books</NavLink>{" "}
      <NavLink to="/favorites">Favorites({favoriteBooks.length})</NavLink>{" "}
      <NavLink to="/read">Read({readBooks.length})</NavLink>{" "}
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  )
}
