const Home = async () => {
  const userRequest = await fetch(
    'https://jsonplaceholder.typicode.com/users/1'
  );
  const user = await userRequest.json();

  return <div>Welcome, {user.name}!</div>;
};

export default Home;
