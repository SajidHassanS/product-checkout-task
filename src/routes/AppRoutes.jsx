import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInfoPage from "../pages/ProductInfo";
import CheckoutPage from "../pages/Checkout";
import NotFoundPage from "../pages/NotFoundPage";
import ProductList from "../components/product/ProductList";
import Cart from "../components/product/CartPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductInfoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
