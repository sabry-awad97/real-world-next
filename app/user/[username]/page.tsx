import User from '@/app/components/User';
import { users } from '@/app/data/users';
import { notFound } from 'next/navigation';

interface Props {
  params: { username: string };
}

export async function generateStaticParams() {
  return users.map(user => ({ username: user.username }));
}

const UserPage = ({ params }: Props) => {
  const user = users.find(user => user.username === params.username);
  if (!user) notFound();

  return <User user={user} />;
};

export default UserPage;
