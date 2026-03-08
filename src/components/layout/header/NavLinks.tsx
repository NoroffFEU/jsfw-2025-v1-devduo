import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";
import type { ClassNameProps, CloseMenuProp } from "../../../types/types";

// Merging the two types (& = merge), because types must describe ONE object containing all the props (React only sends one parameter).
type NavLinksProps = ClassNameProps & CloseMenuProp;

const NavLinks = ({ className, closeMenu }: NavLinksProps) => {
  // React Router passes an object with the property isActive (boolean).
  // I did not destructure the prop in the helper function to understand better what was going on.
  // If isActive is false only the link class gets implemented, and both if it's true.
  const setLinkStyle = (props: { isActive: boolean }) => {
    return props.isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
  };

  return (
    <nav className={`${styles.linksContainer} ${className}`}>
      <NavLink to="/" className={setLinkStyle} onClick={closeMenu} end>
        Home
      </NavLink>
      <NavLink to="/products" className={setLinkStyle} onClick={closeMenu}>
        Products
      </NavLink>
      <NavLink to="/contact" className={setLinkStyle} onClick={closeMenu}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavLinks;
