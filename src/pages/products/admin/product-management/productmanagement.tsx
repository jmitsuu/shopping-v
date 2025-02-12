import { Container } from '@/pages/layouts/container';
import { columnsTable } from '../components/list-products/columns';
import { ListTableProducts } from '../components/list-products/listtableproducts';

import { CreateProduct } from '../components/modal-create-products/createproduct';
import { useModelProducts } from '../../model.products';

export function ProductManagement() {
  const { data } = useModelProducts();
  return (
    <Container>
      <div className="min-h-screen">
        <h1 className="text-6xl text-center mb-14 underline">
          Gerenciamento de produtos
        </h1>
        <div>
          <CreateProduct />
        </div>
        <ListTableProducts
          columns={columnsTable}
          data={data.listProducts ?? []}
        />
      </div>
    </Container>
  );
}
