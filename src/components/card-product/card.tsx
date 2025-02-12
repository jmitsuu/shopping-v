import { Tproducts } from '../../pages/products/products.type';
import { NavLink } from 'react-router-dom';
interface CardProductProps {
  product: Tproducts;
  itemProduct: Tproducts;
}
const API_URL = import.meta.env.VITE_API_URL;
export function CardProduct({ product }: CardProductProps) {
  return (
    <NavLink to={`/product/${product._id}`}>
      <div className="cursor-pointer group relative h-full  w-56 bg-gradient-to-r from-white to-orange-600/20 rounded-br-3xl flex flex-col justify-center items-center p-2">
        <div className="relative transition-all w-full flex justify-center">
          {product.path_image ? (
            <img
              src={`${API_URL + product.path_image}`}
              alt={product.title}
              className="h-72 rounded-sm"
            />
          ) : (
            <div className="h-72 w-56  bg-gray-200 rounded-sm flex items-center justify-center">
              <p>Carregando...</p>
            </div>
          )}
          <div className="absolute bottom-0 opacity-90 left-0 min-w-52 h-10 rounded-md md:bg-transparent bg-black group-hover:bg-black flex items-center justify-center">
            <h1 className="text-orange-500 font-bold md:hidden md:group-hover:flex hover:text-orange-600 hover:underline">
              Ver Produto
            </h1>
          </div>
        </div>
        <div className=" w-full">
          <h2 className="text-xs font-bold mt-5">{product.title}</h2>
          <p className="text-orange-500 text-sm mt-1 font-bold">
            {product.price} R$
          </p>
        </div>
      </div>
    </NavLink>
  );
}
