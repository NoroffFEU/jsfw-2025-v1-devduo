import { Link } from "react-router-dom";
import styles from "./PrimaryButton.module.css";
import type { PrimaryButtonProps } from "../../types/types";

/**
 * A primary button component that navigates to a specified path.
 *
 * @component
 * @example
 * const Example = () => (
 *   <PrimaryButton path="/dashboard" text="Go to Dashboard" />
 * );
 * @returns {JSX.Element} A styled link element functioning as a primary button
 */

const PrimaryButton = ({ path, text }: PrimaryButtonProps) => {
  return (
    <Link to={path} className={styles.primaryButton}>
      {text}
    </Link>
  );
};

export default PrimaryButton;
