import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink> <NavLink to="/cart">Cart</NavLink>{" "}
      <NavLink to="/wishlist">Wishlist</NavLink>
    </>
  );
};
