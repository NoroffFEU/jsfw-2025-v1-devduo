import { z } from "Zod";

// Zod used for both validation and typing - the typing rules are set in this file.
// z.object() describes the sets of rules for your form data by describing how the data needs to look for each input field to pass the validation.

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactSchema = z.object({
  name: z.string().min(3, "Your full name must contain at least 3 characters"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(3, "The subject must contain at least 3 characters"),
  message: z.string().min(10, "The message muts contain at least 10 characters"),
}) satisfies z.ZodType<ContactFormData>;
//satisfies = checks that contactSchema match the interface and use Zod to validate

// if one does not want to use explicit interface you can skip it and unse z.infer instead.
//export type ContactFormData = z.infer<typeof contactSchema>;
//z.infer pulls the TS types out of this schema to use for typechecking and validation
