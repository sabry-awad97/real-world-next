import { TUser } from '@/app/types';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import api from '../../api';

interface Props {
  params: { name: string };
}

export async function GET(
  request: NextRequest,
  { params: { name: username } }: Props
) {
  const {
    data: [user],
  } = await api.get<TUser[]>(`/users/${username}`);
  return NextResponse.json(user);
}
