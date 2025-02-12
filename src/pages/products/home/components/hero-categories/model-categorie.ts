import { IoMdFitness, IoIosShirt } from 'react-icons/io';
import { GiSonicShoes, GiAmpleDress, GiBeachBag } from 'react-icons/gi';
import React from 'react';
export const arrayCategories = [
  {
    title: 'Camisas',
    icon: React.createElement(IoIosShirt, { className: 'h-16 w-16' }),
  },
  {
    title: 'Bolsas',
    icon: React.createElement(GiBeachBag, { className: 'h-16 w-16' }),
  },
  {
    title: 'Vestidos',
    icon: React.createElement(GiAmpleDress, { className: 'h-16 w-16' }),
  },
  {
    title: 'Sapatos',
    icon: React.createElement(GiSonicShoes, { className: 'h-16 w-16' }),
  },
  {
    title: 'Moda Fitness',
    icon: React.createElement(IoMdFitness, { className: 'h-16 w-16' }),
  },
];
