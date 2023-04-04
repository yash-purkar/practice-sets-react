import React, { useState } from 'react'

export const Movies2 = ({ movies }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genreClickHandler = genre => setSelectedGenre(genre);

  const filteredGenre = selectedGenre ? movies.filter(({ genre }) => genre === selectedGenre) : movies
  return (
    <>
      <div>
        <button onClick={() => genreClickHandler("Action")}>action</button>
        <button onClick={() => genreClickHandler("Comedy")}>comedy</button>
        <button onClick={() => genreClickHandler("Drama")}>drama</button>
      </div>
      <ul>
        {
          filteredGenre.map(({ title, director, genre, releaseYear }, i) => <li key={i}>Title: {title} Director: {director} <strong>Genre: {genre}</strong> Release Year: {releaseYear}</li>)
        }
      </ul>
    </>

  )
}
