import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../products/services/fetchProducts";
import type { APIResponse } from "../../../types/types";
import ProductsGrid from "../../products/components/ProductsGrid";

const SearchBar = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<APIResponse | null>(null);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setError(null);
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
          aria-label="Search products"
        />
        <span aria-hidden="true">
          <MagnifyingGlassIcon className={styles.searchIcon} />
        </span>
      </div>
      <div>
        {filteredProducts && filteredProducts.length === 0 && (
          <p className={styles.message}>
            {`No products found on the search for: ${query}`}
          </p>
        )}
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
