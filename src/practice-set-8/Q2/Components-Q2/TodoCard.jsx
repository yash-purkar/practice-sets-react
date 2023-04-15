import React from 'react'

export const TodoCard = ({ id, title, description, isCompleted }) => {
  return (
    <li key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {isCompleted ? "Done" : "Not Done"}</p>
    </li>
  )
}
