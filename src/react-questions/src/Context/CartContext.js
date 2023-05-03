import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../Data/fakeFetch";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [allData, setAllData] = useState({
    products: [],
    cart: [],
    wishlist: [],
    errMsg: null,
    loading: true
  });

  const getData = async () => {
    try {
      const {
        status,
        data: { products }
      } = await fakeFetch("https://example.com/api/products");
      status === 200 && setAllData((prev) => ({ ...prev, products }));
    } catch (err) {
      setAllData((prev) => ({ ...prev, errMsg: err }));
    } finally {
      setAllData((prev) => ({ ...prev, loading: false }));
    }
  };
  const { products, cart, wishlist, loading, errMsg } = allData;
  useEffect(() => {
    getData();
  }, []);

  const handleAddToCart = (product) => {
    setAllData((prev) => ({ ...prev, cart: [...cart, product] }));
  };

  const handleRemoveFromCart = (idToBeRemove) => {
    const updatedData = cart.filter(({ id }) => id !== idToBeRemove);
    setAllData((prev) => ({ ...prev, cart: updatedData }));
  };

  const handleAddToWishlist = (product) => {
    setAllData((prev) => ({ ...prev, wishlist: [...wishlist, product] }));
  };

  const handleRemoveFromWishList = (idToBeRemove) => {
    const updatedData = wishlist.filter(({ id }) => id !== idToBeRemove);
    setAllData((prev) => ({ ...prev, wishlist: updatedData }));
  };
  return (
    <CartContext.Provider
      value={{
        products,
        handleAddToCart,
        cart,
        handleRemoveFromCart,
        handleAddToWishlist,
        wishlist,
        handleRemoveFromWishList
      }}
    >
      {loading ? (
        <h2>Loading...</h2>
      ) : errMsg ? (
        <h2>
          {errMsg.status} {errMsg.message}
        </h2>
      ) : (
        <>{children}</>
      )}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};
