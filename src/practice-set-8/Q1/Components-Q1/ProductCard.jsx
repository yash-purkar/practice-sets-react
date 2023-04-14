
import { NavLink } from 'react-router-dom'


export const ProductCard = ({ id, name, description, price, quantity, category, brand, noDetail }) => {

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


    </li>
  )
}
