import React, { useContext } from 'react'
import { CartContext } from '../../Questions';
import { WishlistContext } from '../../Questions';


import { ProductCard } from '../Components-Q1/ProductCard';

export const ProductListing = ({ productsData }) => {
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishlistData } = useContext(WishlistContext)

  return (
    <>
      <h1>Products</h1>
      {productsData.length === 0 ? <h2 style={{ color: "orange" }}>Loading...</h2> : <>
        <ul>
          {
            productsData?.map((product, i) => <div key={i}>
              <ProductCard {...product} key={product.id} noDetail />
              <button onClick={() => handleCartUpdate(product)}>Add to Cart</button>
              <button onClick={() => handleWishlistData(product)}>Add to wishlist</button>
              <hr />
            </div>)
          }
        </ul>
      </>}
    </>
  )
}
