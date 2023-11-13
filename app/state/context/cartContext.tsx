'use client';

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ShoppingCartContextProps {
  items: Record<string, number>;
  setItems: Dispatch<SetStateAction<Record<string, number>>>;
}

export const ShoppingCartContext =
  createContext<ShoppingCartContextProps | null>(null);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<Record<string, number>>({});

  const contextValue: ShoppingCartContextProps = {
    items,
    setItems,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = (): ShoppingCartContextProps => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      'useShoppingCart must be used within a ShoppingCartProvider'
    );
  }

  return context;
};
