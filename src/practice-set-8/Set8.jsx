import { Routes, Route } from 'react-router-dom'
import { ProductListing } from './Q1/Pages-Q1/ProductListing'
import { Cart } from './Q1/Pages-Q1/Cart'
import { WishList } from './Q1/Pages-Q1/WishList'
import { Navbar } from './Q1/Components-Q1/Navbar'
import { Navbar2 } from './Q2/Components-Q2/Navbar2'
import { ProductDetail } from './Q1/Pages-Q1/ProductDetail'
import { useEffect, useState } from 'react'
import { fakeFetch, fakeFetch2 } from './Data'
import { TodoListing } from './Q2/Pages-Q2/TodoListing'
import { OpenTodo } from './Q2/Pages-Q2/OpenTodo'
import { DoneTodo } from './Q2/Pages-Q2/DoneTodo'



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

// 1️⃣ For Question1
//1st make all components
//2nd Routes and navbar
//(in productListing) fetch data and store it in state variable and show on productListng page, make a seprate component (productCard) to show details
//dont fetch data in product listing bcz if we come back to this page again ,then again useEffect will run.
//so call api in set8.jsx
//In productCard make viewDetails NavLink to view details of the product.
//Pass noDetail boolean from ProductDetail bcz in ProductCard it'll true
//make a productDetail component and onClick of view Details navLink pass the id of the product in to and in Route take it as productId and use this id in productDetail to compare and use find() to find the product. pass a data to productDetail comp from set8 so we can compare that id.
//call a productCard comp and pass the finded object there and don't pass noDetail so it'll undefined and in productCard it will false..


// 2️⃣For Question2
// Question -> // In the above question, in your product listing page add a “Add to Cart” button along with each product. On click of the button, add that item to your cart. The added product should be visible in the My Cart page. Show the total number of items available in the cart at the top of the page. Do this using context.

//Steps ->
// add "Add to Cart" button apply condition of noDetail
//2nd create another folder and file for context
//create a context with name CartContext
//in that file create a component and in return of that comp provide a values
//create a state to store cart data
//create a handleUpdateCart fn and use it in productCard and onClick of a btn call this fn and pass a item to it
//consume that cartData in Cart component and  call a ProductCard component and don't pass noDetail so it'll show the details


// 3️⃣For Question3
// In the question above, add a “Remove from cart” button in the My Cart page for each product. On click of this button, the product should be removed from the cart.

// steps -> add "Remove from cart" btn in map in removeCart
// make a new handleCartRemove function in a cartContext and provide it
//this fn will take an id and will compare with cartData id and it will remove item.
//consume this fn in cart component
// and call on a click of btn and pass id to it.



// 4️⃣For Question4
// Question -> In the above question, in your product listing page add a “Add to Wishlist” button along with each product. On click of the button, add that item to your Wishlist page. The added product should be visible in the My Wishlist page. Show the total number of items available in the Wishlist at the top of the page. Do this using context.

// step->
// add button with each product in ProductListing page
//create a new context in contexts folder WishListContext and create state variable there and provide the wishlistData from there and also handleWishlistUpdate fn and set the previous data and add the current data in wishlist data.
//consume that data in Wishlist component and print there using map.


// 5️⃣In the question above, add a “Remove from Wishlist” button in the My Wishlist page for each product. On click of this button, the product should be removed from the Wishlist.
// step->
//1st add "Remove from Wishlist" btn in Wishlist page for every product
//create removeWishlistHandler fn in Wishlist Context and provide it.
//this fn will take an id and it'll compare that id with wishlistData.id and it'll remove product
//consume this fn in Wishlist and call on click of remove from wishlist btn and pass an id to it.


//****************************************************************************************** */

// ⚪6️⃣
//!TODO APP
// Create a Todo App in React with different routes for:

// Summary of Done and Open Todos page - fakeFetch has been provided. List all the Todos on this page.
// Done Todos page
// Open Todos page
// Page for Individual Todos item to show details of each Todo.

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const getTodosData = async (url) => {
    const { status, data: { todos } } = await fakeFetch2(url);
    status === 200 && setTodos(todos)
  }

  useEffect(() => {
    getTodosData("https://example.com/api/todos");
  })

  return (
    <>
      <h1>Todos</h1>
      <Navbar2 />
      <Routes>
        <Route path='/' element={<TodoListing todos={todos} />} />
        <Route path='/done' element={<DoneTodo todos={todos} />} />
        <Route path='/open' element={<OpenTodo todos={todos} />} />
      </Routes>
    </>
  )
}

// Fetch data and store it in state variable display it on UI
// make a routes and navbar
//Make a todoListing page and in that call todoCard comp and print in this in li tag
//make Done and Open todos comp
//pass a todosData to open and done pages and in both component filter the todos by isCompleted. and map on it in the component. and call a TodoCard component in map




// 7️⃣In the question above, add a Mark as Done button to each todo. Then do the following using context:

// On click of the button, add that todo to the Done Todos page.
// Show the total number of Todos done on top of the Done Todos pages.
// In the Summary page, strike through that todo.