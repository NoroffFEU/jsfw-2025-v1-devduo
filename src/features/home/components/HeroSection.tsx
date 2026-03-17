import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroWrapper}>
      <h1 className="color-text">Welcome to HelTec</h1>
      <p>
        Discover amazing products at great prices. Quality and style delivered to your
        door.
      </p>
      {/* Search bar is displayed here */}
    </section>
  );
};

export default HeroSection;
