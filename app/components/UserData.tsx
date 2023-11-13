import Image from 'next/image';
import { TUser } from '../data/fakeUsers';

interface Props {
  user: TUser;
}

const UserData = ({ user }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={user.profile_picture}
        alt={user.username}
        width={150}
        height={150}
        style={{ width: 'auto' }}
        className="rounded-full"
      />

      <div className="ml-4">
        <div className="mb-2">
          <b>Username:</b> {user.username}
        </div>

        <div className="mb-2">
          <b>Full name:</b> {user.first_name} {user.last_name}
        </div>

        <div className="mb-2">
          <b>Email:</b> {user.email}
        </div>

        <div className="mb-2">
          <b>Company:</b> {user.company}
        </div>

        <div>
          <b>Job title:</b> {user.job_title}
        </div>
      </div>
    </div>
  );
};

export default UserData;
