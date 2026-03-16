import styles from "./Logo.module.css";
import logo from "../../../assets/logo/logo-icon.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={styles.logoContainer}>
      <img
        src={logo}
        alt="Website logo - it's the letter H inside a coloured shape"
        className={styles.logoImage}
      />
      <p className={styles.logoName}>HelTech</p>
    </Link>
  );
};

export default Logo;
