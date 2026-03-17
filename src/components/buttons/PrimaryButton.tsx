import { Link } from "react-router-dom";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  path: string;
  text: string;
};

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
    <Link to={path} className={styles.PrimaryButton}>
      {text}
    </Link>
  );
};

export default PrimaryButton;
