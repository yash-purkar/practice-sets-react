import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProductCard } from '../Components-Q1/ProductCard';

export const ProductDetail = ({ productsData }) => {
  const { productId } = useParams();
  // console.log(typeof productId)
  const getProuct = (products, productId) => {
    return products.find(({ id }) => id === Number(productId))
  }
  const product = getProuct(productsData, productId)
  // console.log(product)

  return (
    <>
      <ul>
        <h1>About</h1>
        <ProductCard {...product} />
      </ul>
      <NavLink to="/">Show All Products</NavLink>
    </>
  )
}
