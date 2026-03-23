import styles from "./HeroSection.module.css";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className={styles.heroWrapper}>
      <h1>Welcome to HelTech</h1>
      <p>
        Discover amazing products at great prices. Quality and style delivered to your
        door.
      </p>
      <SearchBar />
    </section>
  );
};

export default HeroSection;
