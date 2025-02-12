import { Tproducts } from '@/pages/products/products.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  cart: Tproducts[];
  incCart: (item: Tproducts) => void;
  decrCart: (id: string) => void;
  isOpen?: boolean;
  open?: () => void;
  close?: () => void;
  toggle?: () => void;
};

const useStoreCart = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      incCart: (item) =>
        set((state) => {
          const findItem = state.cart.findIndex((i) => i._id === item._id);
          if (findItem >= 0) {
            return { cart: state.cart };
          }
          return { cart: [...state.cart, item] };
        }),
      decrCart: (id) =>
        set((state) => {
          const newCart = state.cart.filter((item) => item._id !== id);
          return { cart: newCart };
        }),
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: 'cart',
    }
  )
);

export default useStoreCart;
