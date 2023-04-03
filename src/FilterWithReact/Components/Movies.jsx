import React, { useState } from 'react'

export const Movies = ({ movies }) => {
  const [inputRating, setInputRating] = useState(0);

  const ratingChangeHandler = (e) => setInputRating(e.target.value);

  const filteredMovies = movies.filter(({ rating }) => rating >= inputRating)

  return (
    <div>
      <input type="number" onChange={ratingChangeHandler} />
      <ul>
        {
          filteredMovies.map(({ title, director, rating, genre }) => <li>{title}, {director}, <strong>{rating}</strong>, {genre}</li>)
        }
      </ul>
    </div>
  )
}
