import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <nav className={styles.linksContainer}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/products" className={styles.link}>
        Products
      </Link>
      <Link to="/contact" className={styles.link}>
        Contact
      </Link>
    </nav>
  );
};

export default NavLinks;
