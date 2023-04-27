import React, { useContext, useState } from 'react'
import { FoodContext } from '../Contexts-Q3/FoodContext'
import { MenuCard } from '../Components-Q3/MenuCard'


export const Menu = () => {
  const { menuData } = useContext(FoodContext)
  const [filters, setFilters] = useState({
    input: "", //piz
    types: [],//["is_Vegetarian"]
    sortBy: null
  })


  const handleCheckBoxChange = (type) => { //is_vegetarian [].includes(is_vegetarian) //F
    const updatedTypes = filters.types.includes(type) ? filters.types.filter(data => data !== type) : [...filters.types, type];
    //[...filters.type,is_vegetarian] types = ["is_vegetarian"]
    setFilters({ ...filters, types: updatedTypes })
  }

  const sortByPrice = (type) => {
    setFilters({ ...filters, sortBy: type });
  }
  // console.log(filters.input)


  const filteredDataByInput = filters.input ? menuData.filter(({ name }) => name.toLowerCase().includes(filters.input.toLowerCase())) : menuData;


  const filteredDataByCheckBox = filters.types.length > 0 ? filteredDataByInput.filter(item => {
    return filters.types.some(type => item[type]) //item.isVegetarian True || item.isSpicy False
  }) : filteredDataByInput


  const filteredData = filters.sortBy ? filteredDataByCheckBox.sort((a, b) => filters.sortBy === "LowToHigh" ? a.price - b.price : b.price - a.price) : filteredDataByCheckBox;

  // TODO: Sort Data By Price
  //NOT WORKING:
  //

  return (
    <div>
      <div>
        <h1>Filters: </h1>

        <label htmlFor="">
          <input type="text" placeholder='Search food here' onChange={(e) => setFilters({ ...filters, input: e.target.value })} />
        </label>

        <label htmlFor="">
          <input type="checkbox" onChange={() => handleCheckBoxChange("is_vegetarian")} /> Veg
        </label>

        <label htmlFor="">
          <input type="checkbox" onChange={() => handleCheckBoxChange("is_spicy")} /> Spicy
        </label>
        <label htmlFor="">
          <input type="radio" name="sortBy" onClick={() => sortByPrice("LowToHigh")} />Sort (price) Low to High
        </label>
        <label htmlFor="">
          <input type="radio" name="sortBy" onClick={() => sortByPrice("HighToLow")} />Sort (price) High to Low
        </label>
      </div>
      <ul>
        {filteredData?.map(menu => {
          return (
            <MenuCard {...menu} />
          )
        })}
      </ul>
    </div>
  )
}



