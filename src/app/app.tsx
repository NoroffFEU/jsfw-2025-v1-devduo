import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/layout.tsx';
import CartPage from '../pages/cartPage.tsx';
import CheckoutSuccessPage from '../pages/checkoutSuccessPage.tsx';
import ContactPage from '../pages/contactPage.tsx';
import HomePage from '../pages/homePage.tsx';
import PageNotFoundPage from '../pages/pageNotFoundPage.tsx';
import ProductDetailPage from '../pages/productDetailPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="" element={<HomePage />} />
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
