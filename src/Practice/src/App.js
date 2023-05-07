import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './style.css';
import { Header } from './Components/Header';
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Cart } from './Pages/Cart';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route />
      </Routes>
    </div>
  );
}
