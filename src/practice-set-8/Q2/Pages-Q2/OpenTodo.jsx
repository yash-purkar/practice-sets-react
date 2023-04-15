
import React, { useContext } from 'react'
import { TodoCard } from '../Components-Q2/TodoCard';
import { TodosContext } from '../../Questions'


export const OpenTodo = () => {
  const { todos } = useContext(TodosContext)

  const openTodos = todos.filter(({ isCompleted }) => !isCompleted);

  return (
    <>
      <h1>Open Todos: {openTodos.length}</h1>
      <ul>
        {
          openTodos.map((todo) => {
            return <TodoCard {...todo} key={todo.id} />
          })
        }
      </ul>
    </>
  )
}
