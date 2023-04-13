import { useState } from "react"

const ListItems = ({ id, task, isDone }) => { //poem false
  const [toggle, setToggle] = useState(isDone); //false

  const clickHandler = () => setToggle(!toggle)//

  return (
    <li style={{ color: toggle ? "red" : "black", textDecoration: toggle ? "line-through" : "none" }}>{task} <button onClick={clickHandler}>Mark as Done</button></li>
  )
}

export const Todo1 = ({ todoItems }) => {
  return (
    <ul>
      {
        todoItems.map(({ id, task, isDone }) => {
          return <ListItems key={id} task={task} isDone={isDone} />
        })
      }
    </ul>
  )
}

/*import React, { useState } from "react";

function TodoList({ todoItems }) {
  const [items, setItems] = useState(todoItems);

  function handleClick(id) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setItems(newItems);
  }

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          style={{
            textDecoration: item.isDone ? "line-through" : "none",
            color: item.isDone ? "red" : "inherit"
          }}
        >
          {item.task}
          <button onClick={() => handleClick(item.id)}>Mark as Done</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;*/