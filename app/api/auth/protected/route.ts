import { NextRequest, NextResponse } from 'next/server';
import { decode } from '../../jwt';

async function ProtectedRoute(request: NextRequest) {
  try {
    const token = request.cookies.get('authToken');

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = decode(token.value);
    return NextResponse.json({ success: true, user: decoded });
  } catch (error) {
    console.error('JWT verification error:', error);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export { ProtectedRoute as GET };
