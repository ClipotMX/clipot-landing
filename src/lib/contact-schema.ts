import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  company: z.string().optional(),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Mínimo 10 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
