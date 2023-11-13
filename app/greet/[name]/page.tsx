'use client';

import { useTheme } from '@/app/components/theme-provider';

interface Props {
  params: { name: string };
  searchParams: { name: string };
}

const GreetPage: React.FC<Props> = ({ params, searchParams }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h1 className="text-4xl font-bold text-center">
        Hello, <span className="text-indigo-600">{params.name}</span>{' '}
        <span className="text-indigo-600">{searchParams.name}</span>
      </h1>
    </div>
  );
};

export default GreetPage;
