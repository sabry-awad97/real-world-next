import { users } from '@/app/data/fakeUsers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json(users);
}
