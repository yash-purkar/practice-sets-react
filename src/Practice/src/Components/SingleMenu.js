import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuState } from '../Contexts/MenuContext';
export const SingleMenu = ({ menu, addBtn }) => {
  const { handleAddToCart, cart } = MenuState();
  const {
    id,
    name,
    description,
    price,
    image,
    is_vegetarian,
    is_spicy,
    delivery_time,
  } = menu;
  return (
    <li>
      <img src={image} alt={name} />
      <p>Name: {name}</p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>Price: {price}</p>
      <p>Delievry Time: {delivery_time}</p>
      {addBtn && (
        <>
          {cart.some((elem) => elem.id === id) ? (
            <button>
              <NavLink to="/cart">Go To Cart</NavLink>
            </button>
          ) : (
            <button onClick={() => handleAddToCart(menu)}>Add To Cart</button>
          )}
        </>
      )}
    </li>
  );
};
