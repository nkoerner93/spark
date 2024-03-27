import { poeMaps } from "src/constants/authImageConstants";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const registerSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirm: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .refine((data: any) => data.password === data.confirm, {
      path: ["confirmPassword"],
      message: "Passwords does not match",
    }),
});

const currencyInMapFormSchema = z.object({
  map: z.enum(poeMaps),
  divine: z.coerce.number().gte(0, { message: "Please enter a number" }),
  chaos: z.coerce.number().gte(0, { message: "Please enter a number" }),
});

export { loginSchema, registerSchema, currencyInMapFormSchema };
