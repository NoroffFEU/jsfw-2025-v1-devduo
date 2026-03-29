import type { ToastMessage } from "../../store/toastStore";
import styles from "./toast.module.css";

interface ToastProps {
  toast: ToastMessage;
  onClose: () => void;
}

export function Toast({ toast, onClose }: ToastProps) {
  return (
    <div
      role="alert"
      aria-atomic="true"
      aria-live="assertive"
      className={`${styles.toast} ${styles[toast.type]}`}>
      <span className={`${styles.toastMessage}`}>{toast.message}</span>
      <button
        onClick={onClose}
        aria-label={`Dismiss: ${toast.message}`}
        className={styles.closeButton}>
        x
      </button>
    </div>
  );
}
