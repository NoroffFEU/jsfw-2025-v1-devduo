import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  const message = "testing";
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.message}>{message}</p>
      </div>
    </>
  );
};

export default ErrorMessage;
