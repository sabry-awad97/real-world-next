import { getUserName } from './lib/user-info';

const Home = () => {
  const user = getUserName();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome, {user}!
        </h1>
      </div>
    </div>
  );
};

export default Home;
