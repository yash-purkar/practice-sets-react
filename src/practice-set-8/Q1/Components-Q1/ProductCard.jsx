import React from 'react'
import { NavLink } from 'react-router-dom'

export const ProductCard = ({ id, name, description, price, quantity, category, brand, noDetail }) => {
  return (
    <li>
      {!noDetail && <h2>About</h2>}
      {noDetail ? <h2>{name}</h2> : <p>Name: <strong>{name}</strong></p>}
      {noDetail ? <p>{description}</p> : <p>Description: {description}</p>}
      <p>Price: ${price}</p>
      {
        !noDetail && <>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
        </>
      }
      {noDetail && <NavLink to={`/product/${id}`}>View Details</NavLink>}
    </li>
  )
}
