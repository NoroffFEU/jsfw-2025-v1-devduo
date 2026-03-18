import PrimaryButton from "../../../components/buttons/PrimaryButton";
import styles from "./ExploreSection.module.css";

const ExploreSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Explore our products</h2>
        <div className={styles.textWrapper}>
          <p>Didn't find anything you liked?</p>
          <p>View all of our products by clicking the button below</p>
        </div>
        <PrimaryButton path="/products" text="Go to products" />
      </div>
    </section>
  );
};

export default ExploreSection;
