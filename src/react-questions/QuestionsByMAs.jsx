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
    </>
  );
}



// 🔶Create a React component that displays a list of tasks, each with a checkbox next to it. When a checkbox is checked, display the task as strikethrough text.
export default function App() {
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
