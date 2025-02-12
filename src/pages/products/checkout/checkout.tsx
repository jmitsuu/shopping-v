import { Container } from '@/pages/layouts/container';
import { FaCircleXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useStoreCart from '@/global/useStoreCart';
import { useModelCart } from '@/components/cart/model.cart';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export function CheckOut() {
  const { cart, decrCart } = useStoreCart();
  const { data } = useModelCart();
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="text-center text-5xl underline">Carrinho</h1>
      <section className="flex md:flex-row  flex-col  justify-center items-center gap-x-4 mt-10">
        <div className="md:min-w-96 w-full min-h-[475px] overflow-y-auto border rounded-sm">
          <Table>
            <TableCaption>
              {' '}
              {cart.length >= 1
                ? `${cart?.length} item(s) adicionado(s) ao carrinho`
                : 'Nenhum item adicionado ao carrinho'}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Produto</TableHead>
                <TableHead>Tamanho</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>##</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((product) => {
                return (
                  <TableRow key={product._id}>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>G</TableCell>
                    <TableCell>000</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <FaCircleXmark
                        className="text-red-500 text-md cursor-pointer"
                        onClick={() => {
                          decrCart(product._id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div className="md:w-80 w-full min-h-96 p-5 border rounded-sm bg-orange-100">
          <div className="w-full">
            <div className="border-b pb-5">
              <h1 className="text-lg font-bold uppercase">Resumo da compra</h1>
            </div>
            <div className="flex flex-col my-5">
              <h1 className="text-sm font-bold mb-2">Cupom de desconto</h1>
              <div className="flex items-center space-x-3">
                <Input
                  className="border-0  bg-slate-50 border-b"
                  placeholder="digitar codigo do cupom"
                />
                <Button>Ok</Button>
              </div>
            </div>
            <ul className="w-full text-sm space-y-3">
              <li className="font-bold flex justify-between">
                <h2> Subtotal (item)</h2> R$ {data.amoutPrice}
              </li>
              <li className="flex justify-between">
                <h2> Desconto</h2> R$ 0,00
              </li>
              <li className=" flex justify-between">
                <h2> Cupom</h2> R$ 0,00
              </li>
            </ul>
            <div className="w-full min-h-10 flex justify-center items-center bg-orange-200 mt-5">
              <div className="py-2">
                {' '}
                <h1 className="font-bold">
                  Total do pedido: R$ {data.amoutPrice}
                </h1>
                <h2 className="text-xs text-slate-600">
                  {' '}
                  7x de R$ {Number(data.amoutPrice / 7).toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
          <Button className="mt-10 w-full uppercase bg-orange-600 hover:bg-orange-700">
            Finalizar Compra
          </Button>
          <Button
            className="mt-2 w-full uppercase"
            onClick={() => {
              navigate('/');
            }}
          >
            continuar comprando
          </Button>
        </div>
      </section>
    </Container>
  );
}
