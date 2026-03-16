import styles from "./Loader.module.css";

/**
 * Displays the loader component animation.
 * @example
 * // Usage
 * <Loader />
 */

const Loader = () => {
  return (
    <>
      <div className={styles.loader}>
        <div className={styles["lds-ripple"]}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
