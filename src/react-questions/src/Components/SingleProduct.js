import { NavLink } from "react-router-dom";
import { CartState } from "../Context/CartContext";

export const SingleProduct = ({
  product,
  showDetails,
  wishlistBtn,
  cartBtn,
  visitBtn
}) => {
  const {
    handleAddToCart,
    cart,
    handleRemoveFromCart,
    handleAddToWishlist,
    wishlist,
    handleRemoveFromWishList
  } = CartState();

  const { id, name, description, price, quantity, category, brand } = product;

  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      {showDetails && (
        <>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
        </>
      )}
      {visitBtn && <NavLink to={`/product/${id}`}>Visit Item</NavLink>}

      {cartBtn && (
        <>
          {cart?.some((prod) => prod.id === id) ? (
            <button onClick={() => handleRemoveFromCart(id)}>
              Remove From Cart
            </button>
          ) : (
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          )}
        </>
      )}

      {wishlistBtn && (
        <>
          {wishlist?.some((prod) => prod.id === id) ? (
            <button onClick={() => handleRemoveFromWishList(id)}>
              Remove From Wishlist
            </button>
          ) : (
            <button onClick={() => handleAddToWishlist(product)}>
              Add to Wishlist
            </button>
          )}
        </>
      )}
    </li>
  );
};
