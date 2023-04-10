import React from 'react'

export const ShowMovie = ({ movie: { title, year, rating } }) => {
  return (
    <li>
      <p>Name: {title}</p>
      <p>Year: {year}</p>
      <p>Ratings: {rating}</p>
    </li>
  )
}
