import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const handleCartUpdate = (item) => {
    setCartData([...cartData, item])
  }

  const handleCartRemove = (removeId) => {
    setCartData(cartData.filter(({ id }) => removeId !== id))
  }
  // console.log(cartData)
  return (
    <CartContext.Provider value={{ cartData, handleCartUpdate, handleCartRemove }}>
      {children}
    </CartContext.Provider>
  )
}
