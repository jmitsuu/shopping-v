import { Tproducts } from '@/pages/products/products.type';
import { CardProduct } from '@/components/card-product/card';
import { ContainerCards } from '../../../layouts/containerCards';
import { Container } from '../../../layouts/container';
import { SkeletonCard } from '../../../layouts/skeletonCard';
import { useModelGenders } from './model.genders';

export function GenderProducts() {
  const { data, state } = useModelGenders();
  return (
    <section className="min-h-screen ">
      <Container>
        <div className="flex items-center justify-center">
          {state.isLoading || state.isError ? <SkeletonCard qtDivs={8} /> : ''}
        </div>
        <ContainerCards styleDiv="grid md:grid-cols-5 sm:grid-cols-2 gap-4">
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
