import { getUserName } from './lib/user-info';
import Image from 'next/image';

const Home = () => {
  const user = getUserName();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome, {user}!
        </h1>
        <Image
          src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
          width={500}
          height={200}
          alt="A beautiful English Setter"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Home;
