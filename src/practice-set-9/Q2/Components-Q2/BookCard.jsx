import React, { useContext } from 'react'
import { BooksContext } from '../Contexts-Q2/BooksContext'
import { NavLink } from 'react-router-dom'

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid red",
  borderRadius: "1rem",
  padding: "1rem",
}
const btnStyle = {
  border: "1px solid black",
  padding: "5pxrem",
  textDecoration: "none",
  margin: "0.5rem",
  backgroundColor: "#fff",
  color: "#000"
}

export const BookCard = ({ book, i }) => {
  const { handleAddToFavorite, favoriteBooksId, handleMarkAsRead, readBooksId } = useContext(BooksContext);

  const { id, title, author, publisher, year, image, price, read } = book;

  const isRead = readBooksId.includes(id);

  return (
    <li style={styles}>
      <img src={image} alt="img" style={{ borderRadius: "1rem" }} />
      <p>{i}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <button onClick={() => handleMarkAsRead(book)} disabled={isRead}>{isRead ? "Already Read" : "Mark as Read"}</button> {" "}
      {
        favoriteBooksId.includes(id) ? <NavLink to="/favorites" style={btnStyle}>Go to Favorite</NavLink> : <button style={btnStyle} onClick={() => handleAddToFavorite(book)}>Add to Favorite</button>
      }
    </li>
  )
}


