import React, { useContext } from 'react'
import { FoodContext } from '../Contexts-Q3/FoodContext'
import { MenuCard } from '../Components-Q3/MenuCard'

export const Menu = () => {
  const { filteredMenuData } = useContext(FoodContext)
  return (
    <>
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
