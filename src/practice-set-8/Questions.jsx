import React from 'react'
import { Ecommerce } from './Set8'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider, CartContext } from './Q1/Contexts/CartContext'
import './styles.css'

export { CartContext };

export const Questions = () => {
  return (
    <ol style={{ listStyle: "none" }}>
      <li>
        <Router>
          <CartProvider>
            <Ecommerce />
          </CartProvider>
          <hr />
        </Router>
      </li>
    </ol>
  )
}
