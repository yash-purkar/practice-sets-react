import React, { useContext } from 'react'
import { TodosContext } from '../../Questions'

export const TodoCard = ({ id, title, description, isCompleted, noLine }) => {
  const { handleTodoToggle } = useContext(TodosContext)

  return (
    <li key={id} style={{ textDecoration: isCompleted && !noLine ? "line-through" : "none" }}>
      <h2 >{title}</h2>
      <p>{description}</p>

      {
        <button onClick={() => { handleTodoToggle(id) }}>{isCompleted ? "Mark as Not Done" : "Mark as done"}</button>
      }

      {/* <p>Status: {isCompleted ? "Done" : "Not Done"}</p> */}
      <hr />
    </li>
  )
}
