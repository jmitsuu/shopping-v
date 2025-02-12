import { useParams } from 'react-router-dom';
import { useModelProducts } from '../model.products';
import { Tproducts } from '../products.type';

export function useModelInfoProduct() {
  const { id } = useParams();
  const { data, state } = useModelProducts();
  const findProduct = data.listProducts?.find((product: Tproducts) => {
    return product._id.toString() === id;
  });
  return {
    state: { isPending: state.isPending },
    data: { findProduct },
  };
}
