import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import styles from "./PageNotFoundPage.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const PageNotFoundPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState<number>(10);

  useEffect(() => {
    // Countdown from 8s before navigating to homepage
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    // Navigate after 10 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    // cleanup
    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <section>
        <article className={styles.headlineWrapper}>
          <ExclamationTriangleIcon className={styles.icon} aria-hidden="true" />
          <h1>Woops, something went wrong.</h1>
          <p>Page not found.</p>
          <p className={styles.navigationParagraph}>
            Navigates you automatically to homepage in {seconds} seconds
          </p>
          <PrimaryButton path="/" text="Please return home" />
        </article>
      </section>
    </>
  );
};

export default PageNotFoundPage;
