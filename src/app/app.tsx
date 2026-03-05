import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.tsx";
import CartPage from "../pages/CartPage.tsx";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import PageNotFoundPage from "../pages/PageNotFoundPage.tsx";
import ProductDetailPage from "../pages/ProductDetailPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/notfound" element={<PageNotFoundPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
