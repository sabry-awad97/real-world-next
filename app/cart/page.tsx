'use client';

import { products } from '../data/products';
import { useCart } from '../state/zustand/store';

function getFullItem(id: string) {
  const idx = products.findIndex(item => item.id === id);
  return products[idx];
}

const Cart = () => {
  const items = useCart();
  const total = Object.keys(items)
    .map(id => getFullItem(id).price * items[id])
    .reduce((x, y) => x + y, 0);

  const amounts = Object.keys(items).map(id => {
    const item = getFullItem(id);
    return { item, amount: items[id] };
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Total: ${total.toFixed(2)}</h1>

      <div className="space-y-4">
        {amounts.map(({ item, amount }) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <span className="font-bold">{amount}x</span> {item.name}
            </div>
            <div>${(amount * item.price).toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
