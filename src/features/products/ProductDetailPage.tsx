import { use, Suspense } from "react";
import { useLocation } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { fetchProductById } from "./services/fetchProductById";
import Loader from "../../components/shared/loader/Loader";
import ErrorMessage from "../../components/shared/error/ErrorMessage";

const ProductDetailPage = () => {
  const location = useLocation();
  const id = location.state.id as string | undefined;

  if (!id) return <ErrorMessage message="Oh no! No product found." />;

  const productPromise = fetchProductById(id);

  return (
    <Suspense fallback={<Loader />}>
      <ProductDetailContent productPromise={productPromise} />
    </Suspense>
  );
};

const ProductDetailContent = ({
  productPromise,
}: {
  productPromise: ReturnType<typeof fetchProductById>;
}) => {
  const product = use(productPromise);

  return (
    <main>
      <ProductDetail
        product={product}
        onAddToCart={(p) => console.log("Add to cart:", p)}
      />
    </main>
  );
};

export default ProductDetailPage;
