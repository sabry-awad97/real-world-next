import React from 'react';
import dynamic from 'next/dynamic';

const Highlight = dynamic(() => import('./Highlight'), { ssr: false });

const HighlightPage = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Code Highlighting Example
      </h1>
      <Highlight code="const x = 1;" />
    </div>
  );
};

export default HighlightPage;
