import { productSchema } from '@/pages/products/products.schema';
import { Tproducts } from '@/pages/products/products.type';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '@/pages/products/services.products';
import { cacheKey } from '@/cache/cacheKey';
import { toast } from 'sonner';
export function useModalCreateProduct() {
  const queryClient = useQueryClient();

  function handleResponseMessage(message: string) {
    toast.success(message);
    queryClient.invalidateQueries({
      queryKey: [cacheKey.products.list],
    });
  }
  const form = useForm<Tproducts>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: '',
      price: 0,
      description: '',
      category: 'Roupas',
      gender: 'Masculino',
      path_image: null as File | null,
    },
  });
  const { mutate: submitProduct } = useMutation({
    mutationKey: [cacheKey.products.create],
    mutationFn: createProduct,
    onSuccess() {
      handleResponseMessage('Produto criado com sucesso');
    },
  });
  const onSubmit: SubmitHandler<Tproducts> = (data) => {
    const formData = new FormData();
    if (data.path_image && (data.path_image as any) instanceof File) {
      formData.append('path_image', data.path_image);
    }
    formData.append('title', data.title);
    formData.append('price', data.price.toString());
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('genere', data.gender);
    submitProduct(formData);
  };
  return {
    data: { form },
    actions: { onSubmit },
  };
}
