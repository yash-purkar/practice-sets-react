import React, { useContext } from 'react'
import { TodosContext } from '../../Questions';
import { TodoCard } from '../Components-Q2/TodoCard';

export const DoneTodo = () => {
  const { todos } = useContext(TodosContext);

  const doneTodos = todos.filter(({ isCompleted }) => isCompleted);

  return (
    <>
      <h1>Done Todos: {doneTodos.length}</h1>
      <ul>
        {
          doneTodos.map((todo) => {
            return (
              <TodoCard {...todo} key={todo.id} noLine />

            )
          })
        }
      </ul>
    </>
  )
}
