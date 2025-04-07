import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import rehypeSlug from 'rehype-slug';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { toc } from 'mdast-util-toc';
import type { Node } from 'unist';

const postsDirectory = path.join(process.cwd(), 'src/_posts');

interface MdastNode extends Node {
  type: string;
  children?: MdastNode[];
  value?: string;
  url?: string;
}

export interface TableOfContents {
  items?: {
    title: string;
    url: string;
    items?: TableOfContents['items'];
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  tableOfContents: TableOfContents;
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

export function getSortedPostsData(): Omit<BlogPost, 'content' | 'tableOfContents'>[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: dayjs(matterResult.data.date).format('MMMM DD, YYYY'),
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

function extractTableOfContents(markdown: string): TableOfContents {
  const tree = remark().use(rehypeSlug).parse(markdown);
  const tocResult = toc(tree);
  
  if (!tocResult.map) {
    return { items: [] };
  }

  function transformNode(node: MdastNode | null): TableOfContents['items'] {
    if (!node) return undefined;
    
    if (node.type === 'list') {
      return node.children?.map((item: MdastNode) => {
        const listItem = item.children?.[0];
        const link = listItem?.type === 'link' ? listItem : listItem?.children?.[0];
        
        if (!link || !link.children?.[0].value) return null;
        
        return {
          title: link.children[0].value,
          url: link.url || '',
          items: item.children?.[1] ? transformNode(item.children[1]) : undefined,
        };
      }).filter((item): item is NonNullable<typeof item> => item !== null) || [];
    }
    
    return undefined;
  }

  return {
    items: transformNode(tocResult.map as MdastNode),
  };
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const tableOfContents = extractTableOfContents(matterResult.content);

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();

  return {
    id,
    title: matterResult.data.title,
    date: dayjs(matterResult.data.date).format('MMMM DD, YYYY'),
    content: contentHtml,
    excerpt: matterResult.data.excerpt || '',
    coverImage: matterResult.data.coverImage,
    tableOfContents,
  };
} 