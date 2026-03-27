import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import styles from "./PageNotFoundPage.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const PageNotFoundPage = () => {
  return (
    <>
      <section>
        <article className={styles.headlineWrapper}>
          <ExclamationTriangleIcon className={styles.icon} aria-hidden="true" />
          <h1>Woops, something went wrong.</h1>
          <p>Page not found.</p>
          <PrimaryButton path="/" text="Please return home" />
        </article>
      </section>
    </>
  );
};

export default PageNotFoundPage;
