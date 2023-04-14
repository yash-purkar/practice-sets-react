import React, { createContext, useState } from 'react'

export const WishlistContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const handleWishlistData = (item) => {
    setWishlistData([...wishlistData, item]);
  }

  const handleRemoveFromWishList = (removeId) => {
    setWishlistData(wishlistData.filter(({ id }) => removeId !== id));
  }
  // console.log(wishlistData)
  return (
    <WishlistContext.Provider value={{ wishlistData, handleWishlistData, handleRemoveFromWishList }}>
      {children}
    </WishlistContext.Provider>
  )
}
