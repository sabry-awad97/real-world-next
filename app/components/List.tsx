import Image from 'next/image';
import Link from 'next/link';
import { TUser } from './Users';

interface Props {
  users: TUser[];
}

export function List({ users }: Props) {
  return (
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
  );
}
