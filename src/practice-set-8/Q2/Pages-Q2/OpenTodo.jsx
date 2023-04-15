import React from 'react'
import { TodoCard } from '../Components-Q2/TodoCard';

export const OpenTodo = ({ todos }) => {
  const openTodos = todos.filter(({ isCompleted }) => !isCompleted);
  return (
    <>
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
