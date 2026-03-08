import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

{
  /* Nav element gets two css classes, one base styling and one as props for HamburgerMenu component */
}

type ClassNameProps = {
  className?: string;
};

const NavLinks = ({ className }: ClassNameProps) => {
  return (
    <nav className={`${styles.linksContainer} ${className}`}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      <NavLink to="/products" className={styles.link}>
        Products
      </NavLink>
      <NavLink to="/contact" className={styles.link}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavLinks;
