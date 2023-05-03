import { useParams } from "react-router-dom";
import { CartState } from "../Context/CartContext";
import { SingleProduct } from "./SingleProduct";
export const ProductDetail = () => {
  const { id } = useParams();
  const { products } = CartState();

  const product = products.find((prod) => prod.id === Number(id));
  console.log(product);
  return (
    <>
      <h2>About</h2>
      <ul>
        <SingleProduct product={product} showDetails />
      </ul>
    </>
  );
};
