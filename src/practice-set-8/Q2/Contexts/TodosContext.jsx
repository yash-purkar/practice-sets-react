import React, { createContext, useState, useEffect } from 'react'
import { fakeFetch2 } from '../../Data';

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodosData = async () => {
    const { status, data: { todos } } = await fakeFetch2("https://example.com/api/todos");
    status === 200 && setTodos(todos)
  }

  useEffect(() => {
    getTodosData();
    // console.log("called")
  }, [])


  const handleTodoToggle = (id) => {
    const updatedTodos = todos.map((todo) => id === todo.id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    setTodos(updatedTodos);
  }

  return (
    <TodosContext.Provider value={{ todos, handleTodoToggle }}>
      {children}
    </TodosContext.Provider>
  )
}
