import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TodosContext } from '../../Questions'
import { TodoCard } from '../Components-Q2/TodoCard'

export const TodoDetail = () => {
  const { todoId } = useParams()
  const { todos } = useContext(TodosContext)
  const todo = todos.find(({ id }) => id === Number(todoId));
  console.log(todo)
  return (
    <TodoCard {...todo} noDetail noLine hideExpand />
  )
}
