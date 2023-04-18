import { createContext, useEffect, useState } from "react"
import { fakeFetch3 } from "../../Data";

export const FoodContext = createContext()

export const FoodContextProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [filteredMenuData, setFilteredMenuData] = useState([])
  const getMenuData = async () => {
    try {
      const { status, data: { menu } } = await fakeFetch3('https://example.com/api/menu')
      if (status === 200) {
        setMenuData(menu)
        setFilteredMenuData(menu)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getMenuData()
  }, [])
  // console.log(menuData)

  return (
    <FoodContext.Provider value={{ menuData, filteredMenuData, setFilteredMenuData }}>
      {children}
    </FoodContext.Provider>
  )
}