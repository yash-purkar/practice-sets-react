import React, { useState } from 'react'

export const Game = () => {
  const [livesCounter, setLivesCounter] = useState(5);
  const handleClick = () => {
    setLivesCounter((livesCounter) => livesCounter > 0 ? livesCounter - 1 : 0)
  }
  return (
    <>
      <h1>Current Lives: {livesCounter}</h1>
      <button onClick={handleClick}>Lose a Life</button>
      {!livesCounter && <h2>Game Over</h2>}
    </>
  )
}
