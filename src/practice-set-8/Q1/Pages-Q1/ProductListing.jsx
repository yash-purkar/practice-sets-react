import React from 'react'

import { ProductCard } from '../Components-Q1/ProductCard';

export const ProductListing = ({ productsData }) => {

  return (
    <>
      <h1>Products</h1>
      {productsData.length === 0 ? <h2 style={{ color: "orange" }}>Loading...</h2> : <>
        <ul>
          {
            productsData?.map((product, i) => <div key={i}>
              <ProductCard {...product} key={product.id} noDetail />
              <hr />
            </div>)
          }
        </ul>
      </>}
    </>
  )
}
