import ClosingButton from "../../buttons/ClosingButton";
import MenuButton from "../../buttons/MenuButton";
import styles from "./HamburgerMenu.module.css";
import { useState } from "react";
import NavLinks from "./NavLinks";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // For transition effects on the nav-element I implement the base class regardless of state, and implement the state class based on the result of the ternary operator
  const baseClass = styles.navLinks;
  const stateClass = isMenuOpen ? styles.open : styles.closed;

  return (
    // It needs the outer div-element (not a fragment) to style the container for the cart icon and hamburger menu (inside the header component).
    <div>
      <div className={styles.menuContainer}>
        {isMenuOpen ? (
          <ClosingButton onClick={toggleMenu} />
        ) : (
          <MenuButton onClick={toggleMenu} />
        )}
      </div>
      <nav className={styles.navContainer}>
        <NavLinks className={`${baseClass} ${stateClass}`} closeMenu={closeMenu} />
      </nav>
    </div>
  );
};

export default HamburgerMenu;
