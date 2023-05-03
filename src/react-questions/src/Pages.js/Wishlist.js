import { SingleProduct } from "../Components/SingleProduct";
import { CartState } from "../Context/CartContext";

export const WishList = () => {
  const { wishlist } = CartState();
  return (
    <>
      <h3>Items in the wishlist: {wishlist.length}</h3>
      <ul>
        {wishlist?.map((product, i) => (
          <SingleProduct product={product} key={i} wishlistBtn />
        ))}
      </ul>
    </>
  );
};
