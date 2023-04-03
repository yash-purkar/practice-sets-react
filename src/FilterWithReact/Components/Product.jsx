import React, { useState } from 'react'

export const Product = ({ products }) => {
  const [inputPrice, setInputPrice] = useState('');

  const priceChangeHandler = (e) => {
    // console.log(e.target.value);
    setInputPrice(e.target.value);
  }

  const filteredProducts = products.filter(({ price }) => price <= inputPrice)

  return (
    <div>
      <input type="number" onChange={priceChangeHandler} />
      <ol>
        {
          filteredProducts.map(({ name, price, category, id }) => {
            return (
              <li key={id}>Name: {name} Price: {price} Category: {category}</li>
            )
          })
        }
      </ol>
    </div>
  )
}
