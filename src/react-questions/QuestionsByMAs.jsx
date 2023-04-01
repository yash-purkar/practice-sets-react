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
