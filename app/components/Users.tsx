'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { TUser } from '../types';
import { List } from './List';

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get<TUser[]>('/api/users');
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
