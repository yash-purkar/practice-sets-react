import React, { useContext } from 'react'
import { FoodContext } from '../Contexts-Q3/FoodContext'
import { MenuCard } from '../Components-Q3/MenuCard'
import { SearchBar } from '../Components-Q3/SearchBar'

export const Menu = () => {
  const { filteredMenuData } = useContext(FoodContext)
  return (
    <>
      <SearchBar />
      <ul>
        {filteredMenuData.map(menu => {
          return (
            <MenuCard {...menu} />
          )
        })}
      </ul>
    </>
  )
}
