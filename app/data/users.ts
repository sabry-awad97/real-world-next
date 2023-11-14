interface TUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type TUserWithoutPassword = Omit<TUser, 'password'>;

export const mockUsers: TUser[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'test@example.com',
    password: 'password123',
  },
];
