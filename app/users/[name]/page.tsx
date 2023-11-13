import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/app/page';
import axios from 'axios';
import { notFound } from 'next/navigation';

interface Props {
  params: { name: string };
}

const UserPage = async ({ params: { name: username } }: Props) => {
  const {
    data: [user],
    status,
  } = await axios.get<User[]>(`http://localhost:3030/users/${username}`);

  if (status === 404) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <Link href="/" className="text-blue-500">
          Back to home
        </Link>
      </div>

      <hr className="my-4 border-gray-300" />

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
    </div>
  );
};

export default UserPage;
