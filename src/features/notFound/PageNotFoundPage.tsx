import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import styles from "./PageNotFoundPage.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const PageNotFoundPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState<number>(8);

  useEffect(() => {
    // Countdown from 8s before navigating to homepage
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    // Navigate after 8 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 8000);

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
          <PrimaryButton path="/" text="Please return home" />
        </article>
        <p style={{ textAlign: "center" }}>
          Navigates you automatically to homepage in {seconds} seconds
        </p>
      </section>
    </>
  );
};

export default PageNotFoundPage;
