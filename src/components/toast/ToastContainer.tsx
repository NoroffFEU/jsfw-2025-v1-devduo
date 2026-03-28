import { useToast } from "../../hooks/useToast";
import { Toast } from "./Toast";
import styles from "./toast.module.css";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();
  return (
    // region = landmark for screenreaders to land on
    // notification = landmark a human-readable name
    // polite = don't interrupt what's currently beeing read, awaits to a pause to announce the information
    // atomic = waits for DOM to finish update, then announces the complete message at once
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
