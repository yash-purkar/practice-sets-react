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
  return (
    <>
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
