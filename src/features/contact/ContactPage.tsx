import { ContactForm } from "./components/ContactComponent.tsx";
import styles from "./components/ContactComponent.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactPageWrapper}>
      <div className={styles.contactText}>
        <h1>Contact Us</h1>
        <p>
          Have a question or feedback? <br /> We'd love to hear from you.
        </p>
      </div>
      <ContactForm />
      <section className={styles.contactCardsContainer}>
        <article className={styles.contactCards}>
          <h2>Response</h2>
          <p>Quick Response</p>
        </article>
        <article className={styles.contactCards}>
          <h2>Email</h2>
          <p>support@webstore.com</p>
        </article>
        <article className={styles.contactCards}>
          <h2>Support</h2>
          <p>We're here to help</p>
        </article>
      </section>
    </div>
  );
};

export default ContactPage;
