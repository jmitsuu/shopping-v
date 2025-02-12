import { EditproductSchema } from '@/pages/products/products.schema';
import { Tproducts } from '@/pages/products/products.type';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editProduct } from '@/pages/products/services.products';
import { cacheKey } from '@/cache/cacheKey';
import { toast } from 'sonner';

import { useEffect, useState } from 'react';
import { useModelProducts } from '@/pages/products/model.products';
export function useModalEditProduct() {
  const [responseId, setResponseId] = useState('');
  const queryClient = useQueryClient();
  const { data } = useModelProducts();
  function handleResponseMessage(message: string) {
    toast.success(message);
    queryClient.invalidateQueries({
      queryKey: [cacheKey.products.list],
    });
  }
  const getIdProduct = (id: string) => {
    const res = data.listProducts?.find(
      (product: Tproducts) => product._id === id
    );

    if (res) {
      setResponseId(res._id);
      form.reset({
        title: res.title,
        price: res.price,
        description: res.description,
        category: res.category,
        gender: res.gender,
      });
    }
  };

  const form = useForm<Tproducts>({
    resolver: zodResolver(EditproductSchema),
    defaultValues: {
      title: '',
      price: 0,
      description: '',
      category: '',
      gender: '',
      path_image: null as File | null,
    },
  });
  const { mutate: submitProduct } = useMutation({
    mutationKey: [cacheKey.products.edit],
    mutationFn: editProduct,
    onSuccess() {
      handleResponseMessage('Produto criado com sucesso');
    },
  });
  const onSubmit: SubmitHandler<Tproducts> = (data) => {
    const formData = new FormData();
    if (data.path_image && (data.path_image as any) instanceof File) {
      formData.append('path_image', data.path_image);
    }
    formData.append('_id', data._id);
    formData.append('title', data.title);
    formData.append('price', data.price.toString());
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('genere', data.gender);

    const productId = responseId;
    submitProduct({ product: formData, productId });
  };
  useEffect(() => {}, []);
  return {
    data: { form },
    actions: { onSubmit, getIdProduct },
  };
}
