import React from 'react'
import { TodoCard } from '../Components-Q2/TodoCard';

export const DoneTodo = ({ todos }) => {

  const doneTodos = todos.filter(({ isCompleted }) => isCompleted);
  return (
    <>
      <ul>
        {
          doneTodos.map((todo) => {
            return (
              <TodoCard {...todo} key={todo.id} />
            )
          })
        }
      </ul>
    </>
  )
}
