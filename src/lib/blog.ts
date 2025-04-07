import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'src/_posts');

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  coverImage?: string;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getSortedPostsData(): Omit<BlogPost, 'content'>[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: format(new Date(matterResult.data.date), 'MMMM dd, yyyy'),
      excerpt: matterResult.data.excerpt || '',
      coverImage: matterResult.data.coverImage,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title: matterResult.data.title,
    date: format(new Date(matterResult.data.date), 'MMMM dd, yyyy'),
    content: contentHtml,
    excerpt: matterResult.data.excerpt || '',
    coverImage: matterResult.data.coverImage,
  };
} 