import React, { useState } from 'react'

export const Shampoos = ({ shampooData }) => {
  const [selectedType, setSelectedType] = useState("all");

  const filteredType = selectedType === "all" ? shampooData : shampooData.filter(({ gender }) => gender === selectedType);
  const handleTypeChange = e => setSelectedType(e.target.value);
  return (
    <div>
      <form action="">
        <label>
          <input type="radio" name="gender" value="all" checked={selectedType === "all"} onChange={handleTypeChange} />
          All
        </label>
        <label>
          <input type="radio" name="gender" value="men" checked={selectedType === "men"} onChange={handleTypeChange} />
          Men
        </label>
        <label>
          <input type="radio" name="gender" value="women" checked={selectedType === "women"} onChange={handleTypeChange} />
          Women
        </label>
        <label>
          <input type="radio" name="gender" value="unisex" checked={selectedType === "unisex"} onChange={handleTypeChange} />
          unisex
        </label>
      </form>

      <ul>
        {
          filteredType.map(({ id, name, gender }) => {
            return (
              <li key={id}>
                <div>Name: {name}</div>
                <div>Gender: {gender}</div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
