import { posts } from '@/app/data/posts';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

const PostPage = ({ params: { slug } }: Props) => {
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-600">{post.subtitle}</p>
    </div>
  );
};

export default PostPage;

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [post.image],
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.subtitle,
      images: [post.image],
    },
  };
}
