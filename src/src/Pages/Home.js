import React from 'react';
import {NavLink} from 'react-router-dom'
export const Home = () => {
  return (
    <>
      <h1>Welcome to neog food ordering App</h1>
      <button><NavLink to="/menu">Explore Menu</NavLink></button>
    </>
  );
};
