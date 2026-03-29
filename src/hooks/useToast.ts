// custom hook to connect store and component
import { useEffect } from "react";
import { useToastStore } from "../store/toastStore";

export function useToast() {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  useEffect(() => {
    if (toasts.length === 0) return;
    const latest = toasts[toasts.length - 1];
    const timer = setTimeout(() => {
      removeToast(latest.id);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toasts, removeToast]);
  return { toasts, removeToast };
}
