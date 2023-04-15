import React, { useContext } from 'react'
import { TodosContext } from '../../Questions'
import { NavLink } from 'react-router-dom'

export const TodoCard = ({ id, title, description, isCompleted, noLine, noDetail, hideExpand }) => {
  const { handleTodoToggle } = useContext(TodosContext)
  const getDoneStyle = (isCompleted) => ({ textDecoration: isCompleted && !noLine ? "line-through" : "none" })
  return (
    <li key={id} >
      <h2 style={getDoneStyle(isCompleted)}>{title}</h2>
      <p style={getDoneStyle(isCompleted)}>{description}</p>

      {!hideExpand && <NavLink to={`/todo/${id}`}>Expand Todo</NavLink>}

      {noDetail && <p>Status: {isCompleted ? "Done" : "Not Done"}</p>}

      {
        <button onClick={() => { handleTodoToggle(id) }}>{isCompleted ? "Mark as Not Done" : "Mark as done"}</button>
      }

      <hr />
    </li>
  )
}
