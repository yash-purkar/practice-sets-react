import React, { createContext, useState } from 'react'

export const WishlistContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const handleWishlistData = (item) => {
    setWishlistData([...wishlistData, item]);
  }
  // console.log(wishlistData)
  return (
    <WishlistContext.Provider value={{ wishlistData, handleWishlistData }}>
      {children}
    </WishlistContext.Provider>
  )
}
