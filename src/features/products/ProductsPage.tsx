import ProductCard from "./components/ProductCard";
import styles from "./ProductsPage.module.css";
import { useEffect, useState } from "react";
interface APIResponse {
  data: Product[];
  meta: object;
}

type Review = {
  description: string;
  id: string;
  rating: number;
  username: string;
};

interface Product {
  id: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  price: number;
  reviews: Array<Review>;
  discountedPrice: number;
  rating: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<APIResponse | null>(null);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const itemsArray = products?.data;

  console.log(itemsArray);

  return (
    <>
      <section>
        <h1 className={styles.productHeadline}>Our Products</h1>
        {/* Sort by categories here */}
        {/* Grid for all products here */}
      </section>
      <section className={styles.productsGridContainer}>
        {itemsArray?.map((product) => (
          <ProductCard
            key={product?.id}
            productId={product?.id}
            productName={product?.title}
            productImage={product?.image?.url}
            imageAltText={product?.image?.alt}
            defaultPrice={product?.price}
            discountedPrice={product?.discountedPrice}
            rating={product?.reviews[0]?.rating}
          />
        ))}
      </section>
    </>
  );
};

export default ProductsPage;
