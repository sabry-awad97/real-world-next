import { getUserName } from "./lib/user-info";

const Home = async () => {
  const user = getUserName();
  return <div>Welcome, {user}!</div>;
};

export default Home;
