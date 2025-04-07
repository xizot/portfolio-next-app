import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '@/lib/blog';
import { TableOfContents } from '@/components/table-of-contents';
import { notFound } from 'next/navigation';
import './style.scss';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const resolvedParams = await params;
    const post = await getPostData(resolvedParams.id);

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl blog-detail-page">
        <Link href="/blog" className="text-blue-500 hover:text-blue-600 mb-8 inline-block">
          ← Back to blog
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <TableOfContents items={post.tableOfContents.items} />
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-3 prose dark:prose-invert max-w-none blog-detail-page__content">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>
            {post.coverImage && (
              <div className="relative h-[400px] w-full mb-8 not-prose">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover rounded-lg" />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
