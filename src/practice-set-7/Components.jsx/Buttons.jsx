import React from 'react'

export const Buttons = ({ products, setSortedProducts }) => {
  let sortedArr;
  const handleClick = (sortBy) => {
    if (sortBy === "LowToHigh") {
      sortedArr = [...products].sort((a, b) => a.price - b.price);
    }
    else if (sortBy === "HighToLow") {
      sortedArr = [...products].sort((a, b) => b.price - a.price);
    }
    else {
      sortedArr = [...products]
    }
    setSortedProducts(sortedArr);
  }

  return (
    <div>
      <button onClick={() => handleClick("LowToHigh")}>Low to High</button>
      <button onClick={() => handleClick("HighToLow")}>High to Low</button>
      <button onClick={handleClick}>Reset</button>
    </div>
  )
}
