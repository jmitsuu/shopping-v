import useStoreCart from '@/global/useStoreCart';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useModelCart() {
  const [amoutPrice, setAmoutPrice] = useState(0);
  const [modal, setModal] = useState(false);
  const { cart } = useStoreCart();
  const navigate = useNavigate();
  const totalPriceCart = cart.reduce((acc, val) => {
    return acc + val.price;
  }, 0);
  const nextToTheCheckout = () => {
    if (cart.length) {
      navigate('/checkout');
      setModal(false);
    }
  };
  useEffect(() => {
    setAmoutPrice(totalPriceCart);
    if (!cart.length) {
      setModal(false);
    }
    if (cart.length < 1) {
      navigate('/');
    }
  }, [totalPriceCart, cart]);
  return {
    data: { amoutPrice },
    actions: { nextToTheCheckout, setModal },
    state: { modal },
  };
}
