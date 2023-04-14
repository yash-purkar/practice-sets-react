import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Questions'
import { ProductCard } from '../Components-Q1/ProductCard';

export const Cart = () => {
  const { cartData, handleCartRemove } = useContext(CartContext);
  // console.log(cartData)

  const totalPrice = cartData.reduce((acc, { price }) => acc + price, 0);

  return (
    <>
      <h1>My Cart</h1>
      <h3>Items in cart: {cartData.length}</h3>
      <ul>
        {
          cartData.map((product, i) => {
            return (
              <>
                <ProductCard {...product} key={i} />
                <button onClick={() => handleCartRemove(product.id)}>Remove from cart</button>
                <hr />
              </>
            )
          })
        }
      </ul>
      <h2>Total Price: ${totalPrice}</h2>
    </>
  )
}
