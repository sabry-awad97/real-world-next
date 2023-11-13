import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: { name: string };
  searchParams: { name: string };
}

const GreetPage: React.FC<Props> = ({ params, searchParams }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Hello, <span className="text-indigo-600">{params.name}</span>{' '}
        <span className="text-indigo-600">{searchParams.name}</span>
      </h1>
    </div>
  );
};

export default GreetPage;

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${params.name}: ${searchParams.name}`,
  };
}
