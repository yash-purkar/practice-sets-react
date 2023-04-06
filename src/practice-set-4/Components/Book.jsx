import React, { useState } from 'react'

const BooksList = ({ title, author }) => {
  return (
    <li>Title: {title}- Author: {author}</li>
  )
}


const genres = ["All Genres", "Classic", "Dystopian", "Young Adult"];

export const Book = ({ booksData }) => {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const filteredBooks = selectedGenre === "All Genres" ? booksData : booksData.filter(({ genre }) => selectedGenre === genre)

  return (
    <>
      {
        genres.map((genre, i) => <button key={i} onClick={() => setSelectedGenre(genre)} >{genre}</button>)
      }
      <ul>
        {filteredBooks.map(({ id, title, author, genre }) => {
          return <BooksList title={title} author={author} />
        })}
      </ul>
    </>
  )
}
