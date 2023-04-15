import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider, CartContext } from './Q1/Contexts/CartContext'
import { WishListProvider, WishlistContext } from './Q1/Contexts/WishlistContext'
import { TodosContextProvider, TodosContext } from './Q2/Contexts/TodosContext'
import { ForumContextProvider, ForumContext } from './Q3/Contexts/ForumContext'

import { Ecommerce, Todo, Forum } from './Set8'
import './styles.css'

export { CartContext };
export { WishlistContext };
export { TodosContext };
export { ForumContext }

export const Questions = () => {
  return (
    <ol style={{ listStyle: "none" }}>
      <li>
        <Router>
          <CartProvider>
            <WishListProvider>
              {/* <Ecommerce /> */}
            </WishListProvider>
          </CartProvider>
          {/* <hr /> */}
          <TodosContextProvider>
            {/* <Todo /> */}
          </TodosContextProvider>
          {/* <hr /> */}
          {/* ***************************** */}

          <li>
            <ForumContextProvider>
              <Forum />
            </ForumContextProvider>
          </li>
        </Router>
      </li>
    </ol>
  )
}
