import React from 'react'

export const ShowMovie2 = ({ title, year, genre }) => {
  return (
    <li>
      <h2>{title}</h2>
      <div>{year}</div>
      <div>{genre}</div>
    </li>
  )
}
