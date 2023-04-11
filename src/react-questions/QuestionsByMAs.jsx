import React, { useState } from "react";

export const QuestionsByMAs = () => {
  const [hideColor, setHideColor] = useState("");
  const colors = ["red", "blue", "yellow"];

  const clickHandler = (color) => {
    setHideColor(color);
  };
  const hiddenColor = (color) => (color === hideColor ? "none" : "block");

  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "50px",
            height: "50px",
            display: hiddenColor(color)
          }}
        ></div>
      ))}
      <br />
      {colors.map((color, index) => (
        <button key={index} onClick={() => clickHandler(color)}>
          {color}
        </button>
      ))}
      <button onClick={() => setHideColor("")}>reset</button>
      <br />
      <hr />
      {/* Another Question */}
      <Question2 />
      <br /><hr />
      {/* Another Question */}
      <Q3 />
    </>
  );
}



// 🔶Create a React component that displays a list of tasks, each with a checkbox next to it. When a checkbox is checked, display the task as strikethrough text.
export default function Question2() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Clean the house", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Buy groceries", completed: false }
  ]);

  const handleChange = (clickedId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((el) =>
        el.id === clickedId ? { ...el, completed: !el.completed } : el
      );
    });
  };
  return (
    <div>
      <h2>Q2</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleChange(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
        </div>
      ))}
    </div>
  );
}

//Q3
const todosDB = [
  { id: 1, text: "Buy milk", isDone: false },
  { id: 2, text: "Do laundry", isDone: false },
  { id: 3, text: "Finish project", isDone: true },
  { id: 4, text: "Tell Tanvi to learn driving", isDone: false },
  { id: 5, text: "Pay bills", isDone: true },
  { id: 6, text: "Go to gym", isDone: false },
  { id: 7, text: "Cook dinner", isDone: true },
  { id: 8, text: "Read book", isDone: false },
  { id: 9, text: "Take dog for a walk", isDone: false },
  { id: 10, text: "Clean bathroom", isDone: true }
];


const TodoItem = ({ todo: { id, text, isDone }, handleToggle }) => {
  return (
    <div>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }} onClick={() => handleToggle(id)}>{text}</li>
    </div>
  )
}

const Q3 = () => {
  const [todos, setTodos] = useState(todosDB);

  const doneOpen = todos.reduce((acc, { isDone }) => {
    isDone ? acc.done++ : acc.open++
    return acc;
  }, { done: 0, open: 0 })

  const { open, done } = doneOpen;

  const handleToggle = (itemId) => {
    const newTodos = todos.map((todo) => {
      return { ...todo, isDone: itemId === todo.id ? !todo.isDone : todo.isDone }
    })
    setTodos(newTodos)
  }

  return (
    <>
      <h2>TODOS</h2>
      <h4>Done {done} | Open {open}</h4>
      <ul>

        {
          todos.map((todo) => {
            return <TodoItem todo={todo} handleToggle={handleToggle} />
          })
        }
      </ul>
    </>
  )
}

//1st render the data on UI
//Make another comp to show each todo Item
//add condition on style
//add onClick and define callback in main comp and pass it as a prop
//call a function on a click and pass id to compare
//Now find done and open todos