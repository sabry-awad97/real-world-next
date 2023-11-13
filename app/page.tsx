import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>
      <hr className="my-4 border-gray-300" />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <li key={user.id} className="mb-4">
            <Link
              href={`/users/${user.username}`}
              className="block hover:bg-gray-100 p-4 rounded-md transition duration-300"
            >
              <div className="flex items-center mb-2">
                <Image
                  src={user.profile_picture}
                  alt={user.username}
                  width={32}
                  height={32}
                  className="rounded-full mr-2 object-cover"
                />
                <span className="text-gray-800 font-bold">{user.username}</span>
              </div>
              <div className="text-gray-600">
                {user.first_name} {user.last_name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
