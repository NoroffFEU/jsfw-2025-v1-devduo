// custom hook for contact form
//need fix: sending/reset form + check for errors after the user has done changes!
import { useState } from "react";
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

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    //handles all inputs, reads the name attribute to update correct input value
    setFormData((prev) => ({ ...prev, [name]: value }));

    //ux optimized, clear error when user fix errors:
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(event: React.SubmitEvent) {
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
  }

  return { formData, errors, isSubmitted, handleChange, handleSubmit };
}
