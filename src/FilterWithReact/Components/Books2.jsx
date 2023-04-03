import React, { useState } from 'react'

export const Books2 = ({ books }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genreClickHandler = genre => setSelectedGenre(genre);

  const filteredGenre = selectedGenre ? books.filter(({ genre }) => genre === selectedGenre) : books;

  return (
    <div>
      <button onClick={() => genreClickHandler("Fiction")}>fiction</button>
      <button onClick={() => genreClickHandler("Non-fiction")}>non-fiction</button>
      <button onClick={() => genreClickHandler("Mystery")}>mystery</button>
      <ul>
        {
          filteredGenre.map(({ title, author, genre, publicationYear }, i) => <li key={i}>Title: {title} Author: {author} <strong>Genre: {genre}</strong> Publication Year: {publicationYear}</li>)
        }
      </ul>
    </div>
  )
}
