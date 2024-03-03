import { z } from "zod";

export const ContactMeValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .min(10, "Min message length is 10 chars")
    .max(1000, "Max message length is 1000 chars"),
});
export type ConcactMeFields = z.infer<typeof ContactMeValidationSchema>;
