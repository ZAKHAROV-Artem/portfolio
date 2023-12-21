import { z } from "zod";

export const EmailValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});
export type EmailFields = z.infer<typeof EmailValidationSchema>;
