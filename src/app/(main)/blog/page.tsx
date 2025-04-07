import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/blog';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className="block group hover:transform hover:scale-105 transition-transform duration-200"
          >
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              {post.coverImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {post.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 