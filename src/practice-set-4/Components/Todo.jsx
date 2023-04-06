import { useState } from "react"

const ListItems = ({ todoItems }) => {

  const [tasks, setTasks] = useState(todoItems)

  const removeHandler = (removedId) => {
    setTasks(tasks.filter(({ id }) => id !== removedId))
  }

  return (
    <>
      {tasks.map(({ id, task, isDone }) => {
        return <li key={id} style={{ textDecoration: isDone ? "line-through" : "none" }}>{task} <button onClick={() => removeHandler(id)}>X</button></li>
      })}
    </>
  )
}

export const Todo = ({ todoItems }) => {
  return (
    <>
      <ul>
        {
          <ListItems todoItems={todoItems} />
        }
      </ul>
    </>
  )
}
