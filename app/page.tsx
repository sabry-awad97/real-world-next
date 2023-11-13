import axios from 'axios';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
}

const Home = async () => {
  const { data: users } = await axios.get<User[]>(
    'http://localhost:3030/users'
  );

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
