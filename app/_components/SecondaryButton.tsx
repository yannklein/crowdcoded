import Link from 'next/link';
import React from 'react';

const SecondaryButton = ({ href, children }) => {
  return (
    <Link
      className="text-coralBlue bg-white px-1 rounded font-heading border-2 border-coralBlue text-3xl"
      href={href}
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;
