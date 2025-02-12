import { cacheKey } from '@/cache/cacheKey';
import { useQuery } from '@tanstack/react-query';
import { getProductsGenders } from '../../services.products';
import { useLocation } from 'react-router-dom';

export function useModelGenders() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('gender') || '';

  const {
    isPending,
    isError,
    isLoading,
    data: listProducts,
  } = useQuery({
    queryKey: [cacheKey.products.list, searchQuery],
    queryFn: () => getProductsGenders(searchQuery),
    enabled: !!searchQuery,
  });

  return {
    state: { isPending, isLoading, isError },
    data: { listProducts },
    actions: {},
  };
}
