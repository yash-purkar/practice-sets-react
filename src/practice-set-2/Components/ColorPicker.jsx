import React, { useState } from 'react'

export const ColorPicker = ({ red, blue, green }) => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <ul>
      <li>
        <button onClick={() => setSelectedColor(red)}>Red</button>
        {selectedColor === red && <p> {selectedColor}</p>}
      </li>
      <li>
        <button onClick={() => setSelectedColor(blue)}>Blue</button>
        {selectedColor === blue && <p> {selectedColor}</p>}
      </li>
      <li>
        <button onClick={() => setSelectedColor(green)}>Green</button>
        {selectedColor === green && <p> {selectedColor}</p>}
      </li>

    </ul>
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