import React from 'react'

export const Gadgets = ({ productsData }) => {
  const isPrice = price => price > 50000 ? "1px solid orange" : "none";
  return (
    <ol>
      {
        productsData.map(({ id, name, description, price }) => <li key={id} style={{ border: isPrice(price) }}>Name: {name}{" "} Price: {price} {" "} Description: {description}</li>)
      }
    </ol>
  )
}
