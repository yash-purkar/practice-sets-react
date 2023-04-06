import React, { useState } from 'react'

export const ListItems = ({ itemList }) => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleClick = (category) => setSelectedCategory(category);

  const filteredCategory = selectedCategory === "All" ? itemList : itemList.filter(({ category }) => category === selectedCategory)

  return (
    <div>
      {
        ["All", "Fruit", "Vegetable"].map(item => <button onClick={() => handleClick(item)}>{item}</button>)
      }
      <ul>
        {
          filteredCategory.map(({ id, name, category }) => {
            return (
              <li key={id} style={{ color: category === "Fruit" ? "orange" : "green" }}>
                {name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
