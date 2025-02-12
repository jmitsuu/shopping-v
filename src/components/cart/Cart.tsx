import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import useStoreCart from '@/global/useStoreCart';
import { FaCartShopping, FaX } from 'react-icons/fa6';
import { useModelCart } from './model.cart';
import { Button } from '../ui/button';
interface CartProps {
  styleCart: string;
}
const API_URL = import.meta.env.VITE_API_URL;
export function Cart(styleCart: CartProps) {
  const { cart, decrCart } = useStoreCart();
  const { data, actions, state } = useModelCart();
  return (
    <Sheet open={state.modal} onOpenChange={actions.setModal}>
      <SheetTrigger className={`${styleCart}`}>
        {' '}
        <h3 className="flex flex-col items-center relative">
          <span className="text-xs absolute bottom-6 right-0">
            {cart.length >= 1 ? cart.length : ''}
          </span>
          <FaCartShopping className="text-2xl" />
        </h3>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-8 text-2xl">Carrinho</SheetTitle>
        </SheetHeader>
        <div className="space-y-1 h-96 max-h-96 border p-1 rounded-md overflow-y-auto">
          {cart?.map((item) => {
            return (
              <div
                key={item._id}
                className="border min-h-14 w-full p-1 rounded-md flex items-center gap-2 relative"
              >
                <img
                  src={`${API_URL + item.path_image}`}
                  alt={item.title}
                  className=" h-10"
                />
                <div>
                  <h1 className="text-xs">{item.title}</h1>
                  <p>{item.price}</p>
                </div>
                <FaX
                  onClick={() => decrCart(item._id)}
                  className="float-right absolute right-2 cursor-pointer hover:text-red-500"
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-2 mt-2">
          {' '}
          <h3>Total:</h3>
          <span className="font-bold">
            {data.amoutPrice !== 0 ? `${data.amoutPrice} R$` : ''}
          </span>
        </div>
        <SheetDescription>
          {cart.length >= 1
            ? `${cart?.length} items adicionado ao carrinho`
            : 'Nenhum item adicionado ao carrinho'}
        </SheetDescription>
        <Button
          onClick={actions.nextToTheCheckout}
          className="mt-5 w-full bg-orange-600 hover:bg-orange-700"
        >
          Finalizar Compra
        </Button>
      </SheetContent>
    </Sheet>
  );
}
