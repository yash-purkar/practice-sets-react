import React, { useContext } from 'react'
import { TodoCard } from '../Components-Q2/TodoCard'
import { TodosContext } from '../../Questions'

export const TodoListing = () => {
  const { todos } = useContext(TodosContext)
  return (
    <>

      <ul>
        {
          todos.map((todo) => {
            return (
              <>
                <TodoCard {...todo} hideExpand />
              </>

            )
          })
        }
      </ul>
    </>
  )
}
