import type { ErrorMessageProps } from "../../../types/types";
import styles from "./ErrorMessage.module.css";

/**
 * Displays an error message inside a styled wrapper.
 *
 * @component
 * @param {ErrorMessageProps} props - The props for the ErrorMessage component.
 * @param {string} props.message - The error message to display.
 * @returns {JSX.Element} The rendered error message component.
 */

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.message}>{message}</p>
      </div>
    </>
  );
};

export default ErrorMessage;
