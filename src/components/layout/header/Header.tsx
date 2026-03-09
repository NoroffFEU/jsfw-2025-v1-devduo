import styles from "./Header.module.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CartLink from "./CartLink";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Logo />
        <NavLinks />
        <div className={styles.iconContainer}>
          <CartLink />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
