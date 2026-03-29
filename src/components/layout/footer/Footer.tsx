import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import CartLink from "../header/CartLink";

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
            <ShoppingBagIcon className={styles.icon} />
            <small>Products</small>
          </Link>
          <div>
            <CartLink linkStyle={styles.linkStyle} circleStyle={styles.circleStyle} />
            <small className={styles.cartName}>Cart</small>
          </div>
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
