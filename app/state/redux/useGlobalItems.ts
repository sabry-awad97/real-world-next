'use client';

import { selectCart, useAppSelector } from '.';

const useGlobalItems = () => {
  return useAppSelector(selectCart);
};

export default useGlobalItems;
