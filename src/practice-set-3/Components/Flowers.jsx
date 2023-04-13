import React from 'react'

export const Flowers = ({ bouquet }) => {
  const filteredData = bouquet.filter(({ flowers }) => flowers.includes("rose"))
  return (
    <>
      {
        filteredData.map(({ id, price }) => <h1 key={id}>Price of bouquet with roses : {price}</h1>)
      }
    </>
  )
}


export const ExpensiveBouquet = ({ bouquet }) => {
  const filteredData = bouquet.filter(({ price }) => price > 2000)
  return (
    <ol >
      {filteredData.map(({ id, flowers, price }) => flowers.map((flower) => <li>{flower}</li>))}
      {/* {filteredData.map(({ id, flowers, price }) =><li key={id}>{flower}</li>} */}
    </ol >
  )
}