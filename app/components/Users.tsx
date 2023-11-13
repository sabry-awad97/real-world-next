'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { List } from './List';

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

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get<User[]>('http://localhost:3030/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {loading && <div>Loading users...</div>}
      <List users={users} />
    </>
  );
};

export default Users;
