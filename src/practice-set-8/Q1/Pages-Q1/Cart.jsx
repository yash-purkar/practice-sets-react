import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../Questions'
import { ProductCard } from '../Components-Q1/ProductCard';

export const Cart = () => {
  const { cartData } = useContext(CartContext);
  const [filteredData, setFilteredData] = useState(cartData);
  // console.log(cartData)
  const handleRemoveClick = (removeId) => {
    const newData = filteredData.filter(({ id }) => removeId !== id);
    setFilteredData(newData)
  }
  return (
    <>
      <h1>My Cart</h1>
      <h3>Items in cart: {filteredData.length}</h3>
      <ul>
        {
          filteredData.map((product, i) => {
            return (
              <>
                <ProductCard {...product} key={i} />
                <button onClick={() => handleRemoveClick(product.id)}>Remove from cart</button>
                <hr />
              </>
            )
          })
        }
      </ul>
    </>
  )
}
