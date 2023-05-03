import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { ProductDetail } from "./Components/ProductDetail";
import { Cart } from "./Pages.js/Cart";
import { ProductListing } from "./Pages.js/ProductListing";
import { WishList } from "./Pages.js/Wishlist";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
