import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '@/lib/blog';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getPostData(params.id);

    return (
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/blog"
          className="text-blue-500 hover:text-blue-600 mb-8 inline-block"
        >
          ← Back to blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>
        {post.coverImage && (
          <div className="relative h-[400px] w-full mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    );
  } catch (error) {
    notFound();
  }
} 