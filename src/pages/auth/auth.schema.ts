import { z } from 'zod';

export const userCreateSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa ser preenchido' }),
  email: z.string().min(3, { message: 'O e-mail precisa ser preenchido' }),
  password: z.string().min(3, { message: 'A senha precisa ser preenchida' }),
  acess_level: z.coerce.number().optional(),
});

export const userSigninSchema = z.object({
  email: z.string().min(3, { message: 'O e-mail precisa ser preenchido' }),
  password: z.string().min(3, { message: 'A senha precisa ser preenchida' }),
});
