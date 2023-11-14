'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import createStore from '.';

const store = createStore();

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
