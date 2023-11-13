'use client';

import { useTheme } from '../components/theme-provider';

const ContactPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-md mx-auto mt-8 p-6 bg-${
        theme === 'dark' ? 'gray-800' : 'white'
      } rounded-md shadow-md text-${theme === 'dark' ? 'white' : 'gray-800'}`}
    >
      <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
      <ul
        className={`list-disc ml-6 text-${
          theme === 'dark' ? 'gray-300' : 'gray-600'
        }`}
      >
        <li className="mb-2">Email: myemail@example.com</li>
        <li className="mb-2">Twitter: @myusername</li>
        <li className="mb-2">Instagram: myusername</li>
      </ul>
    </div>
  );
};

export default ContactPage;
