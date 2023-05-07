import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuState } from '../Contexts/MenuContext';
export const Header = () => {
  const {cart} = MenuState()
  return (
    <>

      <nav>
        <NavLink to="/">Home</NavLink> | 
        <NavLink to="/menu">Menu</NavLink> | 
        <NavLink to="/cart">Cart({cart.length})</NavLink>
      </nav>
    </>
  );
};
