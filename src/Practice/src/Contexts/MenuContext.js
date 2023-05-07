import React, { createContext, useState, useEffect, useContext } from 'react';

import { fakeFetch } from '../Data/fakeFetch';

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const getMenuData = async () => {
    try {
      const {
        status,
        data: { menu },
      } = await fakeFetch('https://example.com/api/menu');
      status === 200 && setMenuData(menu);
    } catch (err) {
      setErrMsg(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenuData();
  }, []);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <MenuContext.Provider value={{ menuData, handleAddToCart, cart }}>
      {loading ? (
        <h2>Loading...</h2>
      ) : errMsg ? (
        <h2>
          {errMsg.status} {errMsg.message}
        </h2>
      ) : (
        <>{children}</>
      )}
    </MenuContext.Provider>
  );
};

export const MenuState = () => useContext(MenuContext);
