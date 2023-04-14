import { Routes, Route } from 'react-router-dom'
import { ProductListing } from './Q1/Pages-Q1/ProductListing'
import { Cart } from './Q1/Pages-Q1/Cart'
import { WishList } from './Q1/Pages-Q1/WishList'
import { Navbar } from './Q1/Components-Q1/Navbar'
import { ProductDetail } from './Q1/Pages-Q1/ProductDetail'
import { useEffect, useState } from 'react'
import { fakeFetch } from './Data'
// 1️⃣ Create an e-commerce App in React with different routes for:

// Product listing page - fakeFetch has been provided. Fetch the data and display on the product listing page.
// cart page
// wish list page
// A 404 page should be displayed when user enters wrong url

export const Ecommerce = () => {
  const [productsData, setProductsData] = useState([]);
  const getProductsData = async () => {
    try {
      const { status, data: { products } } = await fakeFetch("https://example.com/api/products")
      // console.log(products)
      status === 200 && setProductsData(products);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])
  return (
    <>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path="/" element={<ProductListing productsData={productsData} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product/:productId" element={<ProductDetail productsData={productsData} />} />
        </Routes>
      </div>
    </>
  )
}
//1st make all components
//2nd Routes and navbar
//(in productListing) fetch data and store it in state variable and show on productListng page, make a seprate component (productCard) to show details
//dont fetch data in product listing bcz if we come back to this page again ,then again useEffect will run.
//so call api in set8.jsx
//In productCard make viewDetails NavLink to view details of the product.
//Pass noDetail boolean from ProductDetail bcz in ProductCard it'll true
//make a productDetail component and onClick of view Details navLink pass the id of the product in to and in Route take it as productId and use this id in productDetail to compare and use find() to find the product. pass a data to productDetail comp from set8 so we can compare that id.
//call a productCard comp and pass the finded object there and don't pass noDetail so it'll undefined and in productCard it will false..
