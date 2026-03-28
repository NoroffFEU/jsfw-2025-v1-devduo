import { Link } from "react-router-dom";
import styles from "./SecondaryButton.module.css";
import type { PrimaryButtonProps } from "../../types/types";

/**
 * A secondary button component that navigates to a specified path.
 *
 * @component
 * @example
 * const Example = () => (
 *   <SecondaryButton path="/" text="Continue shopping" />
 * );
 * @returns {JSX.Element} A styled link element functioning as a secondary button
 */

const SecondaryButton = ({ path, text }: PrimaryButtonProps) => {
  return (
    <Link to={path} className={styles.secondaryButton}>
      {text}
    </Link>
  );
};

export default SecondaryButton;
