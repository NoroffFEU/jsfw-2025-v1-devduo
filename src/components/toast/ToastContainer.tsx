import { useToast } from "../../hooks/useToast";
import { Toast } from "./Toast";
import styles from "./toast.module.css";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();
  return (
    <div
      role="region"
      aria-label="Notifications"
      aria-live="polite"
      aria-atomic="true"
      className={styles.toastContainer}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}
