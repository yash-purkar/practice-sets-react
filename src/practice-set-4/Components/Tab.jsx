import React, { useState } from 'react'

export const Tab = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [title, setTitle] = useState("")

  const handleClick = character => {
    setSelectedCharacter(characters[character])
    setTitle(character)
  };

  return (
    <>
      <div>
        <button onClick={() => handleClick("heroes")}>Show Heroes</button>
        <button onClick={() => handleClick("villains")}>Show Villains</button>
      </div>
      <h1>{title}</h1>
      {
        selectedCharacter.map(({ name, powers, costumes }, i) => {
          return (
            <div key={i}>
              <h2>{name}</h2>
              <p>Powers: {powers}</p>
              <p>Costumes: {costumes}</p>
            </div>
          )
        })
      }
    </>
  )
}
