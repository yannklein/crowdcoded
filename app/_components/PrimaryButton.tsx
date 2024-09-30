import { cn } from '@/lib/twMerge';
import Link from 'next/link';
import React from 'react';

const PrimaryButton = ({href, width = 'auto', children}) => {
  const classComputed = ' inline-block text-center text-white bg-coralBlue px-1 rounded font-heading border-2 border-coralBlue text-3xl pt-1';
  return (
    <Link
      style={{ width: width }}
      className={cn(classComputed)}
      href={href}
    >
      {children}
    </Link>
  );
}

export default PrimaryButton;
