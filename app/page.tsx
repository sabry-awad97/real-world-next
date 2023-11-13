'use client';

import Image from 'next/image';
import { useTheme } from './components/theme-provider';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-${
        theme === 'dark' ? 'gray-800' : 'gray-100'
      }`}
    >
      <div
        className={`bg-white p-8 rounded-md shadow-md ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}
      >
        <h1
          className={`text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Welcome
        </h1>
        <Image
          src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
          width={500}
          height={200}
          alt="A beautiful English Setter"
          priority={true}
          style={{ width: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Home;
