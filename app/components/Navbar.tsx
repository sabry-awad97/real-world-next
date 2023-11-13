import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/contacts" className="text-white">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
