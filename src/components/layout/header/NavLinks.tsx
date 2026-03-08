import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

{
  /* Nav element gets two css classes, one base styling and one as props for HamburgerMenu component */
}

type ClassNameProps = {
  className?: string;
};

// React Router passes an object with the property isActive (boolean).
// Did not destructure the prop (which is normal) to understand better whats going on in the helper function.
// If isActive is false only the link class gets implemented, and both if it's true.
const setLinkStyle = (props: { isActive: boolean }) => {
  return props.isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
};

const NavLinks = ({ className }: ClassNameProps) => {
  return (
    <nav className={`${styles.linksContainer} ${className}`}>
      <NavLink to="/" className={setLinkStyle} end>
        Home
      </NavLink>
      <NavLink to="/products" className={setLinkStyle}>
        Products
      </NavLink>
      <NavLink to="/contact" className={setLinkStyle}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavLinks;
