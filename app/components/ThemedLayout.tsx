'use client';

import { PropsWithChildren } from 'react';
import { useTheme } from './theme-provider';
import Navbar from './Navbar';

const ThemedLayout = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col h-full ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <main
        className={`flex-1 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
        } p-8`}
      >
        {children}
      </main>
    </div>
  );
};

export default ThemedLayout;
