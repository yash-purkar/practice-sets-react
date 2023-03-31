import React from 'react'

export const Todo = ({ todoItems }) => {
  const isGreen = isCompleted => isCompleted ? { color: "green" } : { color: "red" }
  return (
    <>
      {
        todoItems.map(({ id, title, description, isCompleted }) => {
          return (
            <div key={id}>
              <h2 style={isGreen(isCompleted)}>{title}</h2>
              <p style={isGreen(isCompleted)}>{description}</p>
            </div>
          )
        })
      }
    </>
  )
}
