import { create } from 'zustand';

type CartStore = {
  cart: Record<string, number>;
  decrement: (itemID: string) => void;
  increment: (itemID: string) => void;
};

export const useCartStore = create<CartStore>(set => ({
  cart: {},
  decrement: (itemID: string) => {
    set(state => {
      if (state.cart?.[itemID] > 0) {
        const newItemAmount = itemID in state.cart ? state.cart[itemID] - 1 : 1;
        return { cart: { ...state.cart, [itemID]: newItemAmount } };
      }
      return state;
    });
  },
  increment: (itemID: string) => {
    set(state => {
      const newItemAmount = itemID in state.cart ? state.cart[itemID] + 1 : 1;
      return { cart: { ...state.cart, [itemID]: newItemAmount } };
    });
  },
}));

export const useCart = () => useCartStore(state => state.cart);
export const useDecrement = () => useCartStore(state => state.decrement);
export const useIncrement = () => useCartStore(state => state.increment);
