import { cacheKey } from '@/cache/cacheKey';
import { useQuery } from '@tanstack/react-query';
import { userAdminSignin } from './services.admin';

export function useModelAdminAuth() {
  const {
    isPending,
    data: userAdmin,
    isFetched,
    isError,
  } = useQuery({
    queryKey: [cacheKey.user.login],
    queryFn: userAdminSignin,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: { userAdmin },
    state: { isPending, isFetched, isError },
  };
}
