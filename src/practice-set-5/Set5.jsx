import { useState } from "react";
import { fakeFetch, fakeFetch2 } from "./Data"
import { useEffect } from "react";
// 1️⃣Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.
export const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [showErr, setShowErr] = useState("");

  const getUsersData = async (url) => {
    try {
      const { status, data: { users } } = await fakeFetch(url);
      status === 200 && setUsersData(users);
    } catch ({ status, message }) {
      setShowErr(`${status} ${message}`)
    }
  }

  /*const getUsersData = (url) => {
    fakeFetch(url)
      .then(({ status, data: { users } }) => console.log(users))
      .catch(({ status, message }) => setShowErr(`${status} ${message}`))
  }*/


  useEffect(() => {
    getUsersData('https://example.com/api/users/status');
  }, [])

  return (
    <>
      <ul>
        {
          usersData.map(({ name, status }, index) => {
            return <li key={index} style={{ color: status === "Online" ? "green" : "red" }}>Name: {name}</li>
          })
        }
      </ul >
      {showErr && <h2 style={{ color: "red" }}>{showErr}</h2>}
    </>
  )
}


// 2️⃣Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.
// a. Add a button, on click of which it displays only the items with more than 20 as quantity.

export const Product = () => {
  const [productsData, setProductsData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [toggle, setToggle] = useState(true);
  const [newData, setNewData] = useState([])

  const getProductsData = async (url) => {
    try {
      const { status, data: { products } } = await fakeFetch2(url);
      if (status === 200) {
        setProductsData(products);
        setNewData(products)
      };
    } catch ({ status, message }) {
      setErrMsg(`${status} ${message}`)
    }
  }

  const handleClick = () => {
    const fitleredData = toggle ? newData.filter(({ quantity }) => quantity > 20) : productsData;
    setToggle(!toggle);
    setNewData(fitleredData)
  }

  useEffect(() => {
    getProductsData("https://example.com/api/products")
  }, [])
  return (
    <>
      <button onClick={handleClick}>Show products with quantity more than 20</button>
      <ul>
        {
          newData.map(({ name, price, quantity }, i) => {
            return <li key={i}>{name} - INR {price} - Qty:({quantity})</li>
          })
        }
      </ul>
      {errMsg && <h2 style={{ color: "red" }}>{errMsg}</h2>}
    </>
  )

}


// 3️⃣In the above question after you have listed all the items, add a button which says “Filter by Price”. On click of the button, display only the items with price less than 100.
export const Product2 = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  const getProductsDetails = async (url) => {
    try {
      const { status, data: { products } } = await fakeFetch2(url);
      if (status === 200) {
        setProductsData(products)
        setFilterProducts(products)
      }
    }
    catch ({ status, message }) {
      console.log(status, message)
    }
  }

  const handleClick = (condition) => {
    if (condition === "lessQuantity") {
      setFilterProducts(productsData.filter(({ quantity }) => quantity > 20))
    }
    else if (condition === "lessPrice") {
      setFilterProducts(productsData.filter(({ price }) => price < 100))
    }
    else {
      setFilterProducts(productsData)
    }
  }

  useEffect(() => {
    getProductsDetails("https://example.com/api/products")
  }, [])
  return (
    <>
      <button onClick={handleClick}>All</button>
      <button style={{ marginLeft: "5px" }} onClick={() => handleClick("lessQuantity")}>Show products with quantity more than 20</button>
      <button style={{ marginLeft: "5px" }} onClick={() => handleClick("lessPrice")}>Price Less than 100</button>
      <ul>
        {
          filteredProducts.map(({ name, price, quantity }, i) => {
            return <li key={i}>{name} -- INR {price} Qty: {quantity}</li>
          })
        }
      </ul>
    </>
  )
}