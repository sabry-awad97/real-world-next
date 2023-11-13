import Users from './components/Users';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>
      <hr className="my-4 border-gray-300" />
      <Users />
    </div>
  );
};

export default Home;
