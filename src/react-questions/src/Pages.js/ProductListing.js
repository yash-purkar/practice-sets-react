import { SingleProduct } from "../Components/SingleProduct";
import { CartState } from "../Context/CartContext";

export const ProductListing = () => {
  const { products } = CartState();
  return (
    <>
      {products.map((product) => (
        <SingleProduct
          product={product}
          key={product.id}
          hideDetails
          wishlistBtn
          cartBtn
          visitBtn
        />
      ))}
    </>
  );
};
