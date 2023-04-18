import React, { useContext } from 'react'
import { BooksContext } from '../Contexts-Q2/BooksContext'
import { BookCard } from '../Components-Q2/BookCard';



export const Home1 = () => {
  const { booksData } = useContext(BooksContext);
  // console.log(booksData)
  return (
    <div style={{ width: "1200px", margin: "auto", padding: "2rem" }}>
      <ul >
        {
          booksData.map((book, i) => {
            return <BookCard book={book} key={book.id} i={i + 1} />
          })
        }
      </ul>
    </div>
  )
}
