import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBarWrapper}>
      <input
        id="search-bar"
        name="search-bar"
        type="text"
        placeholder="Search..."
        className={styles.searchBar}
      />
      <button type="submit">
        <MagnifyingGlassIcon className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
