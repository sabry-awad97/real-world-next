'use client';

import dynamic from 'next/dynamic';
import { useTheme } from '../components/theme-provider';

const Highlight = dynamic(() => import('./Highlight'), { ssr: false });

const HighlightPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-md mx-auto mt-8 p-6 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } rounded-md shadow-md`}
    >
      <h1 className="text-2xl font-bold mb-4">Code Highlighting Example</h1>
      <Highlight code="const x = 1;" />
    </div>
  );
};

export default HighlightPage;
