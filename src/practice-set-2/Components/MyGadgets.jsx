import React from 'react'
import { useState } from 'react';
export const MyGadgets = ({ products }) => {
  const [showExpensive, setShowExpensive] = useState(false);
  const clickHandler = () => setShowExpensive(!showExpensive);
  const styleExpensive = price => showExpensive && price > 50000 ? "lightgreen" : null;
  return (
    <>
      <ol>
        {
          products.map(({ id, name, description, price }) => <li key={id} style={{ backgroundColor: styleExpensive(price) }}>Name: {name} <br /> Description: {description} <br /> Price: {price}</li>)
        }
      </ol>
      <button onClick={clickHandler}>{showExpensive ? "Reset" : "Highlight Expensive Gadget"}</button>
    </>
  )
}
