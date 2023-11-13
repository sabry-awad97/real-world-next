import { users } from '@/app/data/fakeUsers';
import { NextRequest, NextResponse } from 'next/server';

const findUserByName = (name: string) => {
  return users.find(user => user.username === name);
};

interface Props {
  params: { name: string };
}

export async function GET(
  request: NextRequest,
  { params: { name: username } }: Props
) {
  try {
    // Find the user with the provided name in the fake users data
    const user = findUserByName(username);

    if (!user) {
      // Check if user not found, respond with a 404 status and a meaningful message
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // If the user was found, respond with JSON data for the found user
    return NextResponse.json(user);
  } catch (error) {
    // Handle any unexpected errors and respond with a 500 status
    console.error('Error processing GET request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
