import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter your email address' })
    .email({ message: 'Please enter valid email address' }),
  password: z.string().min(1, { message: 'Please enter your password' }),
});

export const RegistrationSchema = LoginSchema.extend({
  name: z.string().min(1, { message: 'Please enter your name' }),
  phone: z
    .string()
    .regex(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, { message: 'Please enter valid phone number' }),
  password_confirmation: z.string().min(1, { message: 'Please confirm your password' }),
}).refine(({ password, password_confirmation }) => password === password_confirmation, {
  message: 'Your passwords should match',
  path: ['password_confirmation'],
});
