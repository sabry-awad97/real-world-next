import { useEffect, useState } from 'react';
import { TUserWithoutPassword } from '../data/users';

type TData = {
  loggedIn: boolean;
  user?: TUserWithoutPassword;
};

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<TUserWithoutPassword | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch('/api/auth/get-session')
      .then(res => res.json())
      .then((data: TData) => {
        console.log('data', data);

        if (data.loggedIn && data.user) {
          setLoggedIn(true);
          setUser(data.user);
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    user,
    loggedIn,
    loading,
    error,
  };
}
