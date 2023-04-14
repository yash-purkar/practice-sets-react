import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const handleCartUpdate = (item) => {
    setCartData([...cartData, item])
  }
  // console.log(cartData)
  return (
    <CartContext.Provider value={{ cartData, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  )
}
