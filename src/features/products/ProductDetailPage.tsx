import { use, Suspense } from "react";
import { useLocation, useParams } from "react-router-dom";
import { safePromise } from "./utils/safePromise";
import { fetchProductById } from "./services/fetchProductById";
import { resolveProductId } from "./services/resolveProductId";
import ProductDetail from "./components/ProductDetail";
import Loader from "../../components/shared/loader/Loader";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import type { Product } from "../../types/api";

type SafeResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

const ProductDetailPage = () => {
  const location = useLocation();
  const { slug } = useParams<{ slug: string }>();

  const idFromState = location.state?.id as string | undefined;

  if (!slug) return <ErrorMessage message="Oh no! No product found." />;

  //wrapping around a safepromise so it always resolves and never rejects
  const productPromise = idFromState
    ? // fast path if user clicks a productcard
      safePromise(fetchProductById(idFromState))
    : // fallback (e.g.if a user copy-pastes the url etc) reads slug from url, fetches all products and finds the correct one by comparing id + slug.
      safePromise(resolveProductId(slug).then((id) => fetchProductById(id)));

  return (
    <Suspense fallback={<Loader />}>
      <ProductDetailContent productPromise={productPromise} />
    </Suspense>
  );
};

const ProductDetailContent = ({
  productPromise,
}: {
  // (a safePromise wrapping a fetchProductById result:)
  productPromise: Promise<SafeResult<Product>>;
}) => {
  const result = use(productPromise);

  if (result.status === "error") {
    return <ErrorMessage message={result.message} />;
  }

  return (
    <main>
      <ProductDetail
        product={result.data}
        onAddToCart={(p) => console.log("Add to cart:", p)}
      />
    </main>
  );
};

export default ProductDetailPage;
