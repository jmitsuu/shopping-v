import { Container } from '@/pages/layouts/container';
import { Hero } from './components/hero/hero';
import { Categories } from './components/hero-categories/categories';
import { Title } from './components/title/title';
// import { useModelProducts } from './model.home';
import { CardProduct } from '../../../components/card-product/card';
import { Tproducts } from '../products.type';
import { Banner } from './components/banner/banner';
import { ContainerCards } from '../../layouts/containerCards';
import { SkeletonCard } from '../../layouts/skeletonCard';
import { useModelProducts } from '../model.products';
import { useEffect } from 'react';
export function HomePage() {
  const { data, state, actions } = useModelProducts();
  useEffect(() => {
    actions.setLimitProducts(4);
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <Container>
        <Title
          title="Popular na Temporada"
          subTitle="Os melhores estilos para você aproveitar nessa temporada"
        />
        <div className="w-full flex justify-center items-center ">
          {state.isPending || state.isError ? <SkeletonCard qtDivs={3} /> : ''}
        </div>
        <ContainerCards styleDiv="flex md:flex-row flex-col justify-center items-center">
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
        <Banner />
        <Title
          title="Recomendados"
          subTitle="Estilos que talvez encaixe melhor no seu perfil"
        />
        <div className="w-full flex justify-center items-center ">
          {state.isPending || state.isError ? <SkeletonCard qtDivs={3} /> : ''}
        </div>
        <ContainerCards styleDiv="flex md:flex-row flex-col justify-center items-center">
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
    </>
  );
}
