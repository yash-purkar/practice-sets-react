import React, { useState } from 'react'

export const Movie3 = ({ moviesData }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredGenres = selectedGenre === 'All' ? moviesData : moviesData.filter(({ genre }) => genre === selectedGenre);

  const genres = ["All", "Action", "Crime", "Drama", "Horror", "Adventure"]
  return (
    <div>
      <form>
        {
          genres.map(genre => {
            return (
              <label>
                <input type="radio" name="movie" value={genre} checked={selectedGenre === genre} onChange={(e) => setSelectedGenre(e.target.value)} />
                {genre}
              </label>
            )
          })
        }
      </form>
      <ul>
        {
          filteredGenres.map(({ title, author, genre }) => {
            return (
              <li>
                <div>Title: {title}</div>
                <div>Author: {author}</div>
                <div>Genre: <strong>{genre}</strong></div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
