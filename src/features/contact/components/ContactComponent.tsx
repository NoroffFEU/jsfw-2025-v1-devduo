import styles from "./ContactComponent.module.css";
import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useContactForm } from "../utils/useContactForm";

export function ContactForm() {
  const { formData, errors, isSubmitted, handleChange, handleSubmit } = useContactForm();

  if (isSubmitted) {
    return (
      <div className={styles.successMessage} role="alert">
        <p>Thank you for contacting us.</p>
        <p>We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      //do the validation with Zod instead of browsers built in validation
    >
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          <UserIcon className={styles.icon} aria-hidden="true" />
          Full Name<span className={styles.required}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={errors.name ? styles.inputError : styles.input}
          aria-describedby={errors.name ? "name-error" : undefined}
          //link input to errormessage so screenreaders will read the error out loud when field is focused.
        />
        {errors.name && (
          <span id="name-error" className={styles.error} role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          <EnvelopeIcon className={styles.icon} aria-hidden="true" />
          Email<span className={styles.required}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className={errors.email ? styles.inputError : styles.input}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <span id="email-error" className={styles.error} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          <ChatBubbleLeftIcon className={styles.icon} aria-hidden="true" />
          Subject<span className={styles.required}>*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter the subject"
          className={errors.subject ? styles.inputError : styles.input}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <span id="subject-error" className={styles.error} role="alert">
            {errors.subject}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          <PaperAirplaneIcon className={styles.icon} aria-hidden="true" />
          Message<span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message (minimum 10 characters)"
          rows={6}
          className={errors.message ? styles.inputError : styles.input}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.error} role="alert">
            {errors.message}
          </span>
        )}
      </div>
      <button type="submit" className={styles.contactButton}>
        Send Message
      </button>
    </form>
  );
}
