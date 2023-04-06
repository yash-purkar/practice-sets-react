import React, { useState } from 'react'

export const BtnSize = () => {
  const [sizeCounter, setSizeCounter] = useState(18);
  return (
    <>
      <h1 style={{ fontSize: `${sizeCounter}px` }}>Welcome</h1>
      <button onClick={() => setSizeCounter(sizeCounter + 1)}>+</button>
      <button onClick={() => setSizeCounter(sizeCounter - 1)}>-</button>
    </>
  )
}
