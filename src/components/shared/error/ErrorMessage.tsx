import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

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
