import { cacheKey } from '@/cache/cacheKey';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from './services.products';
import { useState } from 'react';

export const useModelProducts = () => {
  const [limitProducs, setLimitProducts] = useState(0);
  // const limit = 4;
  const {
    isPending,
    isError,
    data: listProducts,
  } = useQuery({
    queryKey: [cacheKey.products.list, limitProducs],
    queryFn: () => getProducts(limitProducs),
  });

  const recommendedProducts = listProducts?.reverse();
  return {
    state: { isPending, isError },
    data: { listProducts, recommendedProducts },
    actions: { setLimitProducts },
  };
};
