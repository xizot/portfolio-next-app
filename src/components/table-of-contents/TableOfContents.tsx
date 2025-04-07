'use client';

import './styles.scss';
import { type TableOfContents } from '@/lib/blog';

export default function TableOfContentsComponent({ items }: TableOfContents) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="space-y-2 text-sm table-of-contents">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.url}
            className="text-blue-500 hover:text-blue-700 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.url.slice(1));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {item.title}
          </a>
          {item.items && <TableOfContentsComponent items={item.items} />}
        </li>
      ))}
    </ul>
  );
}
