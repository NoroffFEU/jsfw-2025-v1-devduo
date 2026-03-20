import type { ErrorMessageProps } from "../../../types/types";
import styles from "./ErrorMessage.module.css";

/**
 * Displays an error message inside a styled wrapper.
 *
 *
 * Example:
 * ```tsx
 * <ErrorMessage message="Something went wrong. Please try again." />
 * ```
 * Or any other returned errors (string)
 * ```tsx
 * <ErrorMessage message={error} />
 * ```
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
