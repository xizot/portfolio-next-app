import { cn } from '@/lib/utils';
import React from 'react';

export type SectionProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  containerClassName?: React.ComponentProps<'div'>['className'];
  title?: string;
};

export default function Section({
  children,
  className,
  containerClassName,
  title,
}: SectionProps) {
  return (
    <div className={cn('py-12 max-md:py-6', className)}>
      <div className={cn('container', containerClassName)}>
        {title && <h2 className="text-2xl font-bold text-primary mb-6">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
