import React, { useContext } from 'react'
import { TodoCard } from '../Components-Q2/TodoCard'
import { TodosContext } from '../../Questions'

export const TodoListing = () => {
  const { todos } = useContext(TodosContext)
  return (
    <>

      <ul>
        {
          todos.map((todo, i) => {
            return (
              <>
                <TodoCard {...todo} noDetail />
              </>

            )
          })
        }
      </ul>
    </>
  )
}
