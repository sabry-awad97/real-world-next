import { TUser } from '@/app/types';
import { NextRequest, NextResponse } from 'next/server';
import api from '../api';

export async function GET(request: NextRequest) {
  const { data } = await api.get<TUser[]>('/users');
  return NextResponse.json(data);
}
