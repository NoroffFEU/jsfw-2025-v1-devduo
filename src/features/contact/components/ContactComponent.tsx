import styles from "./ContactComponent.module.css";
import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export const ContactForm = () => {
  return (
    <form className={styles.contactFormWrapper}>
      <div>
        <div className={styles.contactFormDiv}>
          <label className={styles.contactLabel}>
            <UserIcon className={styles.iconForm} />
            Full Name*
          </label>
          <input className={styles.contactInput} />
        </div>
      </div>
      <div>
        <div className={styles.contactFormDiv}>
          <label className={styles.contactLabel}>
            <EnvelopeIcon className={styles.iconForm} />
            Email*
          </label>
          <input className={styles.contactInput} />
        </div>
      </div>
      <div>
        <div className={styles.contactFormDiv}>
          <label className={styles.contactLabel}>
            <ChatBubbleLeftIcon className={styles.iconForm} />
            Subject*
          </label>
          <input className={styles.contactInput} />
        </div>
      </div>
      <div>
        <div className={styles.contactFormDiv}>
          <label className={styles.contactLabel}>
            <PaperAirplaneIcon className={styles.iconForm} />
            Message*
          </label>
          <input className={styles.contactInput} />
        </div>
      </div>
    </form>
  );
};
