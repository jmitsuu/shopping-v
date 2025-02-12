import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TuserCreate, TuserSignin } from './auth.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { userCreateSchema, userSigninSchema } from './auth.schema';
import { cacheKey } from '@/cache/cacheKey';
import { userSignin } from './services.auth';

export function useModelAuth() {
  const formCreateAndEdit = useForm<TuserCreate>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      acess_level: 1,
    },
  });
  const formSignin = useForm<TuserSignin>({
    resolver: zodResolver(userSigninSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: submitProduct } = useMutation({
    mutationKey: [cacheKey.user.login],
    mutationFn: userSignin,
    onSuccess(data) {
      if (data?.data) {
        localStorage.setItem('userData', JSON.stringify(data?.data));
        setTimeout(() => {
          window.location.href = '/';
        }, 1200);
      }
    },
  });
  const onSubmit: SubmitHandler<TuserSignin> = (data) => {
    submitProduct(data);
  };
  return {
    data: { formCreateAndEdit, formSignin },
    actions: { onSubmit },
  };
}
