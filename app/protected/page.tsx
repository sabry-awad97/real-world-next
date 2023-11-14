'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute() {
  const router = useRouter();
  const { loading, error, loggedIn } = useAuth();

  if (!loading && !loggedIn) {
    router.push('/login');
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      {loading && <p>Loading...</p>}
      {error && <p> An error occurred. </p>}
      {loggedIn && (
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Protected Route</h1>
          <p className="text-gray-700">
            You can&apos;t see me if not logged in!
          </p>
        </div>
      )}
    </div>
  );
}
