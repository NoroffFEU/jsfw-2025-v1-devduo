import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./SearchBar.module.css";
import ProductsGrid from "./../../products/components/ProductsGrid";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../products/services/fetchProducts";
import type { APIResponse } from "../../../types/types";

const SearchBar = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>("");
  const [products, setProducts] = useState<APIResponse | null>(null);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Something went wrong fetching the products");
        console.error(err, "Something went wrong fetching the products");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);
  console.log(products?.data);

  const filteredProducts = products?.data.filter((items) => {
    return items?.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <section>
      <div className={styles.searchBarWrapper}>
        <input
          value={query}
          id="search-bar"
          name="search-bar"
          type="search"
          placeholder="Search..."
          className={styles.searchBar}
          onChange={(event) => setQuery(event.target.value)}
        />
        <label aria-hidden="true">
          <MagnifyingGlassIcon className={styles.searchIcon} />
        </label>
      </div>
      <div>
        {query && filteredProducts && filteredProducts.length > 0 && (
          <ProductsGrid
            loading={loading}
            error={error}
            productsList={filteredProducts}
            className={styles.filteredProductsWrapper}
          />
        )}
      </div>
    </section>
  );
};

export default SearchBar;
