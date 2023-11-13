'use client';

import { FC } from 'react';
import { TProduct } from './data/products';
import Image from 'next/image';
import { useShoppingCart } from './context/cartContext';

interface Props {
  product: TProduct;
}

const ProductCard: FC<Props> = ({ product: { id, name, price, picture } }) => {
  const { items, setItems } = useShoppingCart();

  const productAmount = id in items ? items[id] : 0;
  
  const handleAmount = (action: 'decrement' | 'increment') => {
    if (action === 'increment') {
      const newItemAmount = id in items ? items[id] + 1 : 1;
      setItems({ ...items, [id]: newItemAmount });
    }

    if (action === 'decrement') {
      if (items?.[id] > 0) {
        setItems({ ...items, [id]: items[id] - 1 });
      }
    }
  };

  return (
    <div className="bg-gray-200 p-6 rounded-md">
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <Image
          className="w-full h-full object-cover"
          alt={name}
          height={160}
          src={picture}
          width={324}
        />
      </div>

      <div className="flex justify-between mt-4">
        <div className="font-bold text-lg">{name}</div>
        <div className="font-bold text-lg text-gray-500">${price} per kg</div>
      </div>

      <div className="flex justify-between mt-4 w-2/4 mx-auto">
        <button
          className="pl-2 pr-2 bg-red-400 text-white rounded-md"
          disabled={productAmount === 0}
          onClick={() => handleAmount('decrement')}
        >
          -
        </button>

        <div>{productAmount}</div>

        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => handleAmount('increment')}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
