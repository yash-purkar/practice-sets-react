import React, { useContext } from 'react'
import { BooksContext } from '../Contexts-Q2/BooksContext'
import { BookCard } from '../Components-Q2/BookCard';

export const Read = () => {
  const { readBooks } = useContext(BooksContext);
  return (
    <>
      <ul>
        {readBooks.map((book, i) => {
          return <BookCard book={book} i={i + 1} />
        })}
      </ul>
    </>
  )
}
