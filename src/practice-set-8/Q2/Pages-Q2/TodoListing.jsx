import React from 'react'
import { TodoCard } from '../Components-Q2/TodoCard'

export const TodoListing = ({ todos }) => {
  return (
    <>

      <ul>
        {
          todos.map((todo, i) => {
            return (
              <>
                <TodoCard {...todo} />
                <hr />
              </>

            )
          })
        }
      </ul>
    </>
  )
}
