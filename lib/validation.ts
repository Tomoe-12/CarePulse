import { z } from "zod";

export const UserFormValidation = z.object({
  username: z.string()
  .min(6,  "Username must be at least 6 characters.",)
  .max(50,  "Username must be at most 50 characters.",),
 email:z.string().email('invalid email address'),
 phone: z.string().refine((phone)=>/^\+\d{10,15}$/.test(phone),'Invalid phone number')

  
});
