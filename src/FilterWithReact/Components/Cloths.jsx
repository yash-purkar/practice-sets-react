import React, { useState } from 'react'

export const Cloths = ({ cloths }) => {
  const [selectedSize, setSelectedSize] = useState("All")
  const filteredSizes = selectedSize === "All" ? cloths : cloths.filter(({ size }) => size === selectedSize);
  const sizes = ["All", "Small", "Medium", "Large", "Extra-large"]
  return (
    <>
      <form>
        {
          sizes.map(size => {
            return (
              <label>
                <input type="radio" value={size} name="cloth" checked={size === selectedSize} onChange={(e) => setSelectedSize(e.target.value)} />
                {size}
              </label>
            )
          })
        }
      </form>
      <ul>
        {
          filteredSizes.map(({ name, brand, size, price }) => {
            return (
              <li>
                <div>Name: {name}</div>
                <div>Brand: {brand}</div>
                <div>Size: <strong>{size}</strong></div>
                <div>Price: {price}</div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
