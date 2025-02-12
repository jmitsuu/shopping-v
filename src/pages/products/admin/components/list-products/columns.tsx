import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { MdDelete } from 'react-icons/md';
import { ColumnDef } from '@tanstack/react-table';
import { Tproducts } from '@/pages/products/products.type';
import { EditProduct } from '../modal-edit-table/editproduct';
const API_URL = import.meta.env.VITE_API_URL;
export const columnsTable: ColumnDef<Tproducts>[] = [
  {
    accessorKey: '_id',
    header: 'id',
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Titulo
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: 'price',
    header: 'Preço',
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
  },
  {
    accessorKey: 'gender',
    header: 'Genero',
  },
  {
    accessorKey: 'path_image',
    header: 'Imagem',
    cell: ({ row }) => {
      return (
        <img
          src={`${API_URL}${row.original.path_image}`}
          alt="imagem"
          className="h-10 rounded-md"
        />
      );
    },
  },
  {
    accessorKey: 'id',
    header: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <EditProduct id={row.original._id} />
          <MdDelete className="cursor-pointer text-xl text-red-600" />
        </div>
      );
    },
  },
];
