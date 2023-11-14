import { NextRequest, NextResponse } from 'next/server';
import { decode } from '../../jwt';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('authToken');

    if (!token) {
      return NextResponse.json({ loggedIn: false }, { status: 401 });
    }

    const decoded = decode(token.value);
    return NextResponse.json({ loggedIn: true, user: decoded });
  } catch (error) {
    console.error('JWT verification error:', error);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
