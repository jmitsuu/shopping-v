import { z } from 'zod';

export const productSchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(3, { message: 'O título precisa ter pelo menos 3 caracteres' }),
  gender: z
    .string()
    .min(3, { message: 'O gênero precisa ter pelo menos 3 caracteres' }),
  price: z.coerce
    .number()
    .min(0.01, { message: 'O preço precisa ser maior que 0' }),
  path_image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: 'Imagem é obrigatória' }),
  description: z
    .string()
    .min(5, { message: 'A descrição precisa ter pelo menos 5 caracteres' }),
  category: z.string().min(1, { message: 'Selecione uma categoria válida' }),
});

export const EditproductSchema = z.object({
  _id: z.string().optional(),
  title: z
    .string()
    .min(3, { message: 'O título precisa ter pelo menos 3 caracteres' }),
  gender: z
    .string()
    .min(3, { message: 'O gênero precisa ter pelo menos 3 caracteres' }),
  price: z.coerce
    .number()
    .min(0.01, { message: 'O preço precisa ser maior que 0' }),
  path_image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: 'Imagem é obrigatória' }),
  description: z
    .string()
    .min(5, { message: 'A descrição precisa ter pelo menos 5 caracteres' }),
  category: z.string().min(1, { message: 'Selecione uma categoria válida' }),
});
