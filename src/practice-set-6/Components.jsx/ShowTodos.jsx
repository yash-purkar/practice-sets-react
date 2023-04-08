import React from 'react'

export const ShowTodos = ({ todoData }) => {
  return (
    <>
      {
        todoData.map(({ title, desc, todos }, i) => {
          return (
            <div key={i}>
              <h2>{title}: {desc}</h2>
              <ol>
                {todos.map(todo => {
                  return <li>{todo}</li>
                })}
              </ol>
              <hr />
            </div>
          )
        })
      }
    </>
  )
}
