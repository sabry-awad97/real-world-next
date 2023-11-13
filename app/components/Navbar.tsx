import Link from 'next/link';
import { useTheme } from './theme-provider';

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();

  const newThemeName = theme === 'dark' ? 'light' : 'dark';

  return (
    <div className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-200'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-${
            theme === 'dark' ? 'white' : 'black'
          } text-2xl font-bold`}
        >
          Home
        </Link>
        <div className="space-x-4">
          <Link
            href="/about"
            className={`text-${theme === 'dark' ? 'white' : 'black'}`}
          >
            About
          </Link>
          <Link
            href="/contacts"
            className={`text-${theme === 'dark' ? 'white' : 'black'}`}
          >
            Contacts
          </Link>
          <button
            onClick={toggleTheme}
            className={`bg-${
              theme === 'dark' ? 'gray-600 text-white' : 'gray-300 text-black'
            }  p-2 rounded`}
          >
            Set {newThemeName} theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
