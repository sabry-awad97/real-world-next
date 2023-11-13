import axios from 'axios';
import Link from 'next/link';

export interface User {
  id: string;
  profile_picture: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  company: string;
  job_title: string;
}

const Home = async () => {
  const { data: users } = await axios.get<User[]>(
    'http://localhost:3030/users'
  );

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`}>{user.username}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
