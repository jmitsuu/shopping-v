import { CardProduct } from '@/components/card-product/card';
import { Container } from '@/pages/layouts/container';
import { ContainerCards } from '@/pages/layouts/containerCards';
import { SkeletonCard } from '@/pages/layouts/skeletonCard';
import { Tproducts } from '../../products.type';
import { useModelProducts } from '../../model.products';
import { useEffect } from 'react';

export function AllClothes() {
  const { data, state, actions } = useModelProducts();
  useEffect(() => {
    actions.setLimitProducts(0);
  }, []);
  return (
    <section>
      <Container>
        <div className="w-full flex justify-center items-center ">
          {state.isPending || state.isError ? <SkeletonCard qtDivs={20} /> : ''}
        </div>
        <ContainerCards styleDiv="grid grid-cols-1 gap-4">
          {data.listProducts?.map((product: Tproducts) => {
            return (
              <CardProduct
                itemProduct={product}
                product={product}
                key={product._id}
              />
            );
          })}
        </ContainerCards>
      </Container>
    </section>
  );
}
