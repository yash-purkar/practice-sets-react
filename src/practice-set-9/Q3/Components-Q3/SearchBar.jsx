import React, { useContext, useState } from 'react'
import { FoodContext } from '../Contexts-Q3/FoodContext';

export const SearchBar = () => {
  const { menuData, filteredMenuData, setFilteredMenuData } = useContext(FoodContext);
  // const


  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setFilteredMenuData(menuData.filter(({ name }) => name.toLowerCase().includes(inputValue)))
  }


  const handleFoodType = (e) => {

  }

  const filterByPrice = (e) => {
    const sortBy = e.target.value;
    if (sortBy === "LowToHigh") setFilteredMenuData([...filteredMenuData].sort((a, b) => a.price - b.price))
    else setFilteredMenuData([...filteredMenuData].sort((a, b) => b.price - a.price))
  }

  return (
    <>
      <h1>Filters: </h1>
      <label htmlFor="">
        <input type="text" placeholder='Search food here' onChange={handleInputChange} />
      </label>
      <label htmlFor="">
        <input type="checkbox" /> Veg
      </label>
      <label htmlFor="">
        <input type="checkbox" /> Spicy
      </label>
      <label htmlFor="">
        <input type="radio" onChange={filterByPrice} value="LowToHigh" name="soryBy" />Sort (price) Low to High
      </label>
      <label htmlFor="">
        <input type="radio" onChange={filterByPrice} value="HighToLow" name="soryBy" />Sort (price) High to Low
      </label>
    </>
  )
}
