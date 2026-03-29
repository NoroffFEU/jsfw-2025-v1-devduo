import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Loader from "../../components/shared/loader/Loader";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import { getQueryParameter } from "./utils/getQueryParameter";
import { fetchSingleProduct } from "./services/fetchSingleProduct";
import type { Product } from "../../types/api";

const ProductDetailPage = () => {
  const location = useLocation();
  const id = getQueryParameter("id", location.search);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProduct = await fetchSingleProduct(id);
        setProduct(fetchedProduct);
      } catch (err) {
        // Redirects to notfound page if response.status === 404
        if (err instanceof Error && err.message === "PAGE_NOT_FOUND") {
          navigate("/notfound");
        }
        setError("Something went wrong. Try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <main>
      <ProductDetail product={product} />
    </main>
  );
};

export default ProductDetailPage;
