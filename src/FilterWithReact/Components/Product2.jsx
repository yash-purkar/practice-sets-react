import React, { useState } from 'react'

export const Product2 = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => setSelectedCategory(category)

  const filteredCategory = selectedCategory ? products.filter(({ category }) => category === selectedCategory) : products;
  return (
    <>
      <button onClick={() => handleCategoryClick("electronics")}>electronics</button>
      <button onClick={() => handleCategoryClick("clothing")}>clothing</button>
      <button onClick={() => handleCategoryClick("food")}>food</button>

      <ul>
        {
          filteredCategory.map(({ name, price, category, availability }) => <li key={name}>Name: {name} Price: {price} Category: {category} availability: {availability ? "Available" : "Not Available"}</li>)
        }
      </ul>
    </>
  )
}
