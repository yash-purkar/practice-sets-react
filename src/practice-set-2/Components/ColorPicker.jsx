import React, { useState } from 'react'

export const ColorPicker = ({ red, blue, green }) => {
  const [hexCodes, setHexCodes] = useState({
    redHexCode: "",
    blueHexCode: "",
    greenHexCode: ""
  })

  const { redHexCode, blueHexCode, greenHexCode } = hexCodes;

  const clickHandler = color => {
    if (color === "red") setHexCodes({ redHexCode: red })
    else if (color === "blue") setHexCodes({ blueHexCode: blue })
    else if (color === "green") setHexCodes({ greenHexCode: green })

  }
  // const colors = ["red", "blue", "green"];

  return (
    <>
      {/* 
    {colors.map((color) => {
      return (
        <div key={color}>
          <button onClick={() => showHexcode(color)}>{color}</button>
          <p>{hexCode[color]}</p>
        </div>
      );
    })} */}
      <div>
        <button onClick={() => clickHandler("red")}>Red Color</button>
        <p>{redHexCode}</p>
      </div>
      <div>
        <button onClick={() => clickHandler("blue")}>Blue Color</button>
        <p>{blueHexCode}</p>
      </div>
      <div>
        <button onClick={() => clickHandler("green")}>Green Color</button>
        <p>{greenHexCode}</p>
      </div>
    </>
  )
}


//2nd way
/*export const ColorPicker = ({ red, blue, green }) => {
  const [hexCode, setHexCode] = useState({
    red: "",
    blue: "",
    green: ""
  });

  const showHexcode = (color, hex) => {
    console.log(color);
    setHexCode({ [color]: hex });
  };
  return (
    <>
      <div>
        <button onClick={() => showHexcode("red", red)}>Red</button>
        <p>{hexCode.red}</p>
      </div>
      <div>
        <button onClick={() => showHexcode("blue", blue)}>Blue</button>
        <p>{hexCode.blue}</p>
      </div>
      <div>
        <button onClick={() => showHexcode("green", green)}>Green</button>
        <p>{hexCode.green}</p>
      </div>
    </>
  );
};
*/