import { Container } from '@/pages/layouts/container';
import { useModelInfoProduct } from './model.infoproduct';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import useStoreCart from '@/global/useStoreCart';
import { NavLink } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;
export function InfoProduct() {
  const { data, state } = useModelInfoProduct();
  const { incCart } = useStoreCart();
  return (
    <section>
      <Container>
        {state.isPending ? (
          <div className=" flex items-center justify-center ">
            <div className="border rounded-sm min-h-96 w-[900px] flex md:flex-row flex-col p-2 space-x-5">
              <Skeleton className="w-[255px]" />
              <div className="space-y-2">
                <Skeleton className="w-80 h-8 bg-gray-200" />
                <Skeleton className="w-44 h-6 bg-gray-100" />
                <Skeleton className="w-44 h-6 bg-gray-100" />
              </div>
            </div>
          </div>
        ) : (
          <div className=" flex justify-center items-center">
            <div className="min-h-96 flex md:flex-row flex-col border rounded-sm p-2 space-x-5">
              {state.isPending ? <Skeleton className="w-[255px]" /> : ''}

              <img
                className="h-full w-96 rounded-sm mx-auto"
                src={`${API_URL}${data.findProduct?.path_image}`}
              />
              <div className="relative md:min-h-full min-h-[400px] flex flex-col items-center md:items-start">
                <h1 className="md:text-4xl text-xl font-light text-gray-700 ">
                  {data.findProduct?.title}
                </h1>
                <span className="text-slate-400 text-xs">
                  codigo: {data.findProduct?._id}
                </span>
                <p className=" text-xs my-2 md:text-lg md:w-[600px] text-slate-500">
                  {data.findProduct?.description}
                </p>
                <h2 className="font-bold text-lg">
                  R$: {data.findProduct?.price}
                </h2>
                <h2 className="text-sm text-gray-600">
                  7x de R$ {Number(data.findProduct?.price / 7).toFixed(2)}
                </h2>
                <div className="flex items-center mt-10 space-x-2">
                  <h1 className="text-slate-600 text-sm">Tamanho:</h1>
                  <div className="h-4 w-4 border rounded-sm"> </div>
                  <div className="h-4 w-4 border rounded-sm"></div>
                  <div className="h-4 w-4 border rounded-sm"></div>
                </div>
                <div className="flex items-center mt-10 space-x-2">
                  <h1 className="text-slate-600 text-sm">Cor:</h1>
                  <div className="h-4 w-4 border rounded-sm"> </div>
                  <div className="h-4 w-4 border rounded-sm"></div>
                  <div className="h-4 w-4 border rounded-sm"></div>
                </div>
                <div className="w-full absolute bottom-0 flex md:flex-row flex-col md:gap-y-0 gap-y-4 items-center gap-5">
                  {' '}
                  <Button
                    onClick={() => {
                      incCart(data.findProduct);
                    }}
                    className=" bg-orange-600 w-60 hover:bg-orange-700 md:order-1 uppercase"
                  >
                    Comprar
                  </Button>
                  <NavLink to={'/'}>
                    <Button
                      onClick={() => {
                        incCart(data.findProduct);
                      }}
                      className="w-60  uppercase order-1"
                    >
                      Continuar comprando
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
