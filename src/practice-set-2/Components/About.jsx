import React, { useState } from 'react'

export const About = ({ heading, name, learning }) => {
  const [showLearning, setShowLearning] = useState(false);
  const clickHandler = () => setShowLearning(!showLearning);
  return (
    <>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={clickHandler}>{showLearning ? "Hide" : "Know More"}</button>
      <p>{showLearning ? learning : null}</p>

    </>
  )
}
