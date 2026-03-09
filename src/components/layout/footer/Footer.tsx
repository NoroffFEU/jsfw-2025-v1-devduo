import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.desktopFooter}>
        <small>@2026 HelTech</small>
      </div>
      <div className={styles.mobileFooter}>
        <nav className={styles.footerNav}>
          <Link to="/" className={styles.footerLinks}>
            <HomeIcon className={styles.icon} />
            <small>Home</small>
          </Link>
          <Link to="/products" className={styles.footerLinks}>
            <ShoppingBagIcon className={styles.icon}></ShoppingBagIcon>
            <small>Products</small>
          </Link>
          <Link to="/cart" className={styles.footerLinks}>
            <ShoppingCartIcon className={styles.icon} />
            <small>Cart</small>
          </Link>
          <Link to="/contact" className={styles.footerLinks}>
            <EnvelopeIcon className={styles.icon} />
            <small>Contact</small>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
