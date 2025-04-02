import { cn } from '@/lib/utils';
import React from 'react';

type SectionTagProps = {
  text: string;
  rotate?: boolean;
  className?: string;
  showLineBefore?: boolean;
  showLineAfter?: boolean;
};

export default function SectionTag({
  text,
  rotate = false,
  className,
  showLineBefore = true,
  showLineAfter = true,
}: SectionTagProps) {
  return (
    <div
      className={cn(
        'relative bg-[#1a1443] text-white uppercase rounded-md py-2 px-4 inline-block items-center justify-center w-fit whitespace-nowrap text-lg',
        rotate && 'rotate-90',
        className,
      )}
    >
      {showLineBefore && (
        <div className="line absolute top-1/2 left-0 w-[120px] max-sm:w-[80px] h-1 bg-[#1a1443] -translate-y-1/2 -translate-x-full"></div>
      )}
      {text}
      {showLineAfter && (
        <div className="line absolute top-1/2 right-0 w-[120px] max-sm:w-[80px] h-1 bg-[#1a1443] -translate-y-1/2 translate-x-full"></div>
      )}
    </div>
  );
}
