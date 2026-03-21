// custom hook for contact form
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { contactSchema } from "./validation";
import type { ContactFormData } from "./validation";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const emptyForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current !== null) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;

    //handles all inputs, reads the name attribute to update correct input value
    setFormData((prev) => ({ ...prev, [name]: value }));

    //ux optimized, clear error when user fix errors:
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    console.log("Message sent:", result.data);
    setIsSubmitted(true);
    setFormData(emptyForm);
    setErrors({});

    if (successTimeoutRef.current !== null) {
      clearTimeout(successTimeoutRef.current);
    }
    successTimeoutRef.current = setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  }

  return { formData, errors, isSubmitted, handleChange, handleSubmit };
}
