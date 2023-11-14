'use client';

import Link from 'next/link';
import { selectCart, useAppSelector } from '../state/redux';

const Navbar = () => {
  const items = useAppSelector(selectCart);
  const totalItemsAmount = Object.values(items).reduce((x, y) => x + y, 0);

  return (
    <div className="w-full bg-purple-600 p-4 text-white">
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            <Link href="/" className="hover:text-gray-300">
              My E-Commerce Store
            </Link>
          </h1>
          <p className="text-sm text-gray-300">
            Your one-stop shop for amazing products
          </p>
        </div>
        <div className="font-bold">
          <Link href="/cart" className="flex items-center hover:text-gray-300">
            <span className="mr-1">Cart</span>
            {totalItemsAmount > 0 && (
              <span className="bg-yellow-500 text-black rounded-full px-2 py-1 text-xs">
                {totalItemsAmount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
