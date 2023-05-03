import { SingleProduct } from "../Components/SingleProduct";
import { CartState } from "../Context/CartContext";

export const Cart = () => {
  const { cart } = CartState();
  return (
    <>
      <h3>Items in Cart : {cart.length}</h3>
      <ul>
        {cart.map((product, i) => (
          <SingleProduct product={product} key={i} cartBtn />
        ))}
      </ul>
    </>
  );
};
