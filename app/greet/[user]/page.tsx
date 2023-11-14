interface Props {
  params: { user: string };
}

export default function GreetUser({ params: { user } }: Props) {
  return (
    <div>
      <h1>Hello {user}!</h1>
    </div>
  );
}
