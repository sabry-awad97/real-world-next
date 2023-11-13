import React from 'react';

interface Props {
  params: { name: string };
  searchParams: { name: string };
}

const GreetPage = ({ params, searchParams }: Props) => {
  return (
    <h1>
      Hello, {params.name} {searchParams.name}
    </h1>
  );
};

export default GreetPage;
