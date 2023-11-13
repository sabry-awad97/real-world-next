'use client';

import axios from 'axios';
import { notFound } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { TUser } from '../data/fakeUsers';
import UserData from './UserData';

interface Props {
  username: string;
}

const User: FC<Props> = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<number | null>(null);
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: user, status } = await axios.get<TUser>(
          `/api/users/${username}`
        );
        setUser(user);
        setStatus(status);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setStatus(error.response.status);
        } else {
          console.error('Error fetching user data:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (status === 404) {
    notFound();
  }

  return (
    <>
      {loading && <div>Loading user data...</div>}
      {user && <UserData user={user} />}
    </>
  );
};

export default User;
