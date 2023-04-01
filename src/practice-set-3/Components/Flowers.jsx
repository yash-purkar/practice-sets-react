import React from 'react'

export const Flowers = ({ bouquet }) => {
  return (
    <>
      {
        bouquet.map(({ flowers, price }) => flowers.map(flower => flower === "rose" ? <h1>Price of bouquet with roses : {price}</h1> : null))
      }
    </>
  )
}
