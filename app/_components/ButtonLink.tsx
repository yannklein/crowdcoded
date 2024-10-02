import { cn } from '@/lib/twMerge';
import Link from 'next/link';
import React from 'react';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ButtonLink = ({ href, children, className }: ButtonLinkProps) => {
  return (
    <Link className={cn('btn-primary w-auto', className)} href={href}>
      {children}
    </Link>
  );
};

export default ButtonLink;
