import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../Questions';

export const ProductCard = (item) => {
  const { handleCartUpdate } = useContext(CartContext);

  const { id, name, description, price, quantity, category, brand, noDetail } = item;
  return (
    <li>

      <h2>{name}</h2>
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

      {noDetail && <button onClick={() => handleCartUpdate(item)}>Add to Cart</button>}
    </li>
  )
}
