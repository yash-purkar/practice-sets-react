import React from 'react'

export const Phones = ({ productsData }) => {
  const Mobiles = productsData.filter(({ name }) => name === "mobile");

  return (
    <ul>
      {
        Mobiles.map(({ id, name, description, price }) => <li key={id}>Name: {name} Price: {price} Description:{description}</li>)
      }
      {/* {
        productsData.map(({ id, name, price, description }) => {
          return (
            <>
              {
                name === "mobile" ? <li key={id}>Name: {name} Price: {price} Description:{description}</li> : null
              }
            </>
          )
        })
      } */}
    </ul>
  )
}
