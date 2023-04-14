import React from 'react'
import { Ecommerce } from './Set8'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css'

export const Questions = () => {
  return (
    <ol style={{ listStyle: "none" }}>
      <Router>
        <li><Ecommerce /></li>
        <hr />
      </Router>
    </ol>
  )
}
