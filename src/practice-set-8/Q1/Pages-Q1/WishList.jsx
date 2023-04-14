import React, { useContext, useState } from 'react'
import { WishlistContext } from '../../Questions'
import { ProductCard } from '../Components-Q1/ProductCard'

export const WishList = () => {
  const { wishlistData } = useContext(WishlistContext)
  const [filteredWishlist, setFilteredWishlist] = useState(wishlistData);
  // console.log(wishlistData)

  const handleRemoveWishlist = (removeId) => {
    setFilteredWishlist(filteredWishlist.filter(({ id }) => id !== removeId))
  }
  return (
    <>
      <h1>My Wishlist</h1>
      <h3>Items in Wisth List: {wishlistData.length}</h3>
      <ul>
        {
          filteredWishlist.map((product, i) => {
            return (
              <>
                <ProductCard {...product} key={i} />
                <button onClick={() => handleRemoveWishlist(product.id)}>Remove from Wishlist</button>
                <hr />
              </>
            )
          })
        }
      </ul>
    </>
  )
}
