import { NextRequest, NextResponse } from 'next/server';
import { ZodError, object, string } from 'zod';
import { encode } from '../../jwt';

const payloadSchema = object({
  email: string(),
  password: string(),
});

const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'test@example.com',
    password: 'password123',
  },
];

function authenticate(email: string, password: string): boolean {
  const user = mockUsers.find(
    user => user.email === email && user.password === password
  );
  return !!user;
}

async function LoginHandler(request: NextRequest) {
  const { method } = request;

  if (method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const { email, password } = payloadSchema.parse(await request.json());
    const isAuthenticated = authenticate(email, password);

    if (isAuthenticated) {
      const token = encode({ email });

      const response = NextResponse.json({
        success: true,
        message: 'Authentication successful',
      });

      response.cookies.set({
        name: 'authToken',
        value: token,
        httpOnly: true,
        maxAge: 60 * 60,
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        {
          error: 'Authentication failed',
          details: 'Invalid email or password',
        },
        { status: 401 }
      );
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Invalid request payload', details: error.errors },
        { status: 400 }
      );
    } else {
      console.error('Unhandled error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }
}

export { LoginHandler as POST };
