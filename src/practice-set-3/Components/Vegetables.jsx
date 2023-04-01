import React, { useState } from 'react'

export const Vegetables = ({ vegetables, date }) => {
  const [isFresh, setIsFresh] = useState(false);

  const clickHandler = () => setIsFresh(!isFresh);

  const checkFresh = pickDate => isFresh && pickDate === date ? "green" : ""

  return (
    <>
      <ol>
        {vegetables.map(({ name, pickDate }) => <li style={{ color: checkFresh(pickDate) }}>{name} ({pickDate})</li>)}
      </ol>
      <button onClick={clickHandler}>Highlight Fresh Vegetables</button>
    </>
  )
}
