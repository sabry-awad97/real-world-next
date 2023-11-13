import User from '@/app/components/User';
import Link from 'next/link';

interface Props {
  params: { name: string };
}

const UserPage = async ({ params: { name: username } }: Props) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <Link href="/" className="text-blue-500">
          Back to home
        </Link>
      </div>

      <hr className="my-4 border-gray-300" />
      <User username={username} />
    </div>
  );
};

export default UserPage;
