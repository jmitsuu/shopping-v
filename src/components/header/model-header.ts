import { PiTeaBagFill } from 'react-icons/pi';
import { GiClothes } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
export function ModelHeader() {
  const menuLinks = [
    {
      icon: FaHome,
      title: 'Home',
      route: '/',
    },
    {
      icon: GiClothes,
      title: 'Roupas',
      route: '/clothes/all',
    },
    {
      icon: PiTeaBagFill,
      title: 'Acessórios',
      route: '/accessories',
    },
    // {
    //   title: 'Homens',
    //   route: '/clothes?gender=male',
    // },
    // {
    //   title: 'Mulheres',
    //   route: '?gender=female',
    // },
  ];
  return {
    data: { menuLinks },
  };
}
