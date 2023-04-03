import React, { useState } from 'react'

export const Pets = ({ pets }) => {
  const [petType, setPetType] = useState(null)

  const clickHandler = (type) => setPetType(type)

  const filteredTypes = petType ? pets.filter(({ type }) => type === petType) : pets;


  return (
    <div>
      <div>
        <button onClick={() => clickHandler("cat")}>Cat</button>
        <button onClick={() => clickHandler("dog")}>Dog</button>
        <button onClick={() => clickHandler("bird")}>Bird</button>
      </div>
      <ul>
        {
          filteredTypes.map(({ id, name, type, age, owner }) => <li key={id}>Name: {name}, Type: {type}, Age: {age} Owner: {owner}</li>)
        }
      </ul>

    </div>
  )
}


// const [data, setData] = useState(pets);
// const clickHandler = (petType) => {
//   const newData = pets.filter(({ type }) => type === petType);
//   setData(newData);
// }