import React, { useState } from "react";

const ButtonWithHex = ({ text, hex }) => {
  const [showHex, setShowHex] = useState(false);

  return (
    <>
      <button onClick={() => setShowHex(!showHex)}>{text}</button>
      <p>{showHex && <span>{hex}</span>}</p>
    </>
  );
};

export const ColorPicker = ({ red, blue, green }) => {
  return (
    <>
      <ButtonWithHex text="Red Color" hex={red} />
      <br />
      <ButtonWithHex text="Blue Color" hex={blue} />
      <br />
      <ButtonWithHex text="Green Color" hex={green} />
    </>
  )
};