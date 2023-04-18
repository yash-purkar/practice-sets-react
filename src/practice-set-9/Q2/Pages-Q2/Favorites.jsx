import React, { useContext } from 'react'
import { BooksContext } from '../Contexts-Q2/BooksContext'
import { BookCard } from '../Components-Q2/BookCard'

export const Favorites = () => {
  const { favoriteBooks } = useContext(BooksContext)
  return (
    <>
      <ul>
        {favoriteBooks.map((book, i) => {
          return <BookCard book={book} i={i + 1} />
        })}
      </ul>
    </>
  )
}
