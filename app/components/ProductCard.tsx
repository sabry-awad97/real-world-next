'use client';

import Image from 'next/image';
import { FC } from 'react';
import { TProduct } from '../data/products';
import useGlobalItems from '../state/redux/useGlobalItems';
import { useActions } from '../state/redux';

interface Props {
  product: TProduct;
}

const ProductCard: FC<Props> = ({ product: { id, name, price, picture } }) => {
  const { decrement, increment } = useActions();
  const items = useGlobalItems();

  const productAmount = items?.[id] ?? 0;

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
          onClick={() => decrement(id)}
        >
          -
        </button>

        <div>{productAmount}</div>

        <button
          className="pl-2 pr-2 bg-green-400 text-white rounded-md"
          onClick={() => increment(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
