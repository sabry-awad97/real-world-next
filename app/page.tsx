'use client';

import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';

export default function Home() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements as FormElements<
      'email' | 'password'
    >;

    setLoginError(null);
    handleLogin(email.value, password.value)
      .then(() => router.push('/protected'))
      .catch(err => setLoginError(err.message));
  };

  async function handleLogin(email: string, password: string) {
    const resp = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await resp.json();
    if (data.success) {
      return;
    }
    throw new Error('Wrong email or password');
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>

          {loginError && (
            <div className="text-red-500 text-sm">{loginError}</div>
          )}
        </form>
      </div>
    </div>
  );
}

type FormElements<U extends string> = HTMLFormControlsCollection &
  Record<U, HTMLInputElement>;
