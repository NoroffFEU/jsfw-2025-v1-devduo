import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import CartPage from "./features/cart/CartPage.tsx";
import CheckoutSuccessPage from "./features/checkout/CheckoutSuccessPage.tsx";
import ContactPage from "./features/contact/ContactPage.tsx";
import HomePage from "./features/home/HomePage.tsx";
import PageNotFoundPage from "./features/notFound/PageNotFoundPage.tsx";
import ProductDetailPage from "./features/products/ProductDetailPage.tsx";

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
