import { z } from "Zod";

// Zod used for both validation and typing - the typing rules are set in this file.
// z.object() describes the sets of rules for your form data by describing how the data needs to look for each input field to pass the validation.

export const contactSchema = z.object({
  name: z.string().min(3, "Your full name must contain at least 3 characters"),

  email: z.email("Please enter a valid email address"),

  subject: z.string().min(3, "The subject must contain at least 3 characters"),

  message: z.string().min(3, "The message muts contain at least 10 characters"),
});

//z.infer pulls the TS types out of this schema to use for typechecking and validation
export type ContactFormData = z.infer<typeof contactSchema>;
