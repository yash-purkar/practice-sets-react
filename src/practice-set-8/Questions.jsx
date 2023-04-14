import React from 'react'
import { Ecommerce } from './Set8'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider, CartContext } from './Q1/Contexts/CartContext'
import './styles.css'
import { WishListProvider, WishlistContext } from './Q1/Contexts/WishlistContext'

export { CartContext };
export { WishlistContext }

export const Questions = () => {
  return (
    <ol style={{ listStyle: "none" }}>
      <li>
        <Router>
          <CartProvider>
            <WishListProvider>
              <Ecommerce />
            </WishListProvider>
          </CartProvider>
          <hr />
        </Router>
      </li>
    </ol>
  )
}
