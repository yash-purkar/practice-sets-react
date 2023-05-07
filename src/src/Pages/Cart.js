import React, { useState, useEffect } from 'react';
import { MenuState } from '../Contexts/MenuContext';
import { SingleMenu } from '../Components/SingleMenu';
export const Cart = () => {
  const { cart } = MenuState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    const totalPriceOfItems = cart.reduce((acc, { price }) => acc + price, 0);
    setTotalPrice(totalPriceOfItems);
  }, []);

  const totalDelieveryTime = cart.reduce(
    (acc, { delivery_time }) => acc + delivery_time,
    0
  );

  const handleApplyCoupon = () => {
    if (cart.length > 0) {
      setTotalPrice((prev) => prev - 5);
      setBtnDisabled(true);
    }
  };

  return (
    <>
      <h2>Cart</h2>
      <h4>Total Delievery Time: {totalDelieveryTime} minutes</h4>
      <h4>Total Price: Rs.{totalPrice.toFixed()}</h4>
      <button onClick={handleApplyCoupon} disabled={btnDisabled}>
        Apply Coupon
      </button>
      <ul>
        {cart.map((menu) => (
          <SingleMenu menu={menu} key={menu.id} />
        ))}
      </ul>
    </>
  );
};
