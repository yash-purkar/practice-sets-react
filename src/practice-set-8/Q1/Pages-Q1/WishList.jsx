import React, { useContext } from 'react'
import { WishlistContext } from '../../Questions'
import { ProductCard } from '../Components-Q1/ProductCard'

export const WishList = () => {
  const { wishlistData, handleRemoveFromWishList } = useContext(WishlistContext)
  // console.log(wishlistData)

  return (
    <>
      <h1>My Wishlist</h1>
      <h3>Items in Wisth List: {wishlistData.length}</h3>
      <ul>
        {
          wishlistData.map((product, i) => {
            return (
              <>
                <ProductCard {...product} key={i} noDetail hideWishlistBtn />
                <button onClick={() => handleRemoveFromWishList(product.id)}>Remove from Wishlist</button>
                <hr />
              </>
            )
          })
        }
      </ul>
    </>
  )
}
