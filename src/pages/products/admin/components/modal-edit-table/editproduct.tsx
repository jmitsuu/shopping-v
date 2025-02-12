import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Controller } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Textarea } from '@/components/ui/textarea';
import {
  selectCategory,
  selectGender,
} from '../modal-create-products/selectArray';
import { MdEdit } from 'react-icons/md';
import { useModalEditProduct } from './model.editproduct';

interface EditProductProps {
  id: string;
}

export function EditProduct({ id }: EditProductProps) {
  const { data, actions } = useModalEditProduct();
  return (
    <Dialog>
      <DialogTrigger onClick={() => actions.getIdProduct(id)}>
        <MdEdit className="cursor-pointer text-xl text-blue-600" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edite os campos que deseja atualizar</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...data.form}>
          <form
            onSubmit={data.form.handleSubmit(actions.onSubmit)}
            className="space-y-8"
            encType="multipart/form-data"
          >
            <div className="flex items-center gap-x-3">
              <Controller
                name="gender"
                control={data.form.control}
                render={({ field }) => (
                  <Select
                    {...field}
                    value={field.value || ''}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-[180px] bg-white z-50">
                      <SelectValue placeholder="Masculino" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectGender.map((gender) => {
                        return (
                          <SelectItem key={gender.gender} value={gender.title}>
                            {gender.title}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                name="category"
                control={data.form.control}
                render={({ field }) => (
                  <Select
                    {...field}
                    value={field.value || ''}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-[180px] bg-white z-50">
                      <SelectValue placeholder="Roupas" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectCategory.map((category) => {
                        return (
                          <SelectItem
                            key={category.category}
                            value={category.title}
                          >
                            {category.title}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <FormField
              control={data.form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input placeholder="Titulo" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={data.form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Preço"
                      type="number"
                      className="w-44"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={data.form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="resize-none" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={data.form.control}
              name="path_image"
              render={() => (
                <FormItem>
                  <FormLabel>Imagem</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          data.form.setValue('path_image', file);
                        }
                      }}
                      className="w-44"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Atualizar produto</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
