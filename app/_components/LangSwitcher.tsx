"use client";

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

const LangSwitcher = () => {
  const [langShown, setLangShown] = useState(false);

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faGlobe}
        className="text-3xl cursor-pointer"
        onClick={() => setLangShown(!langShown)}
      />
      <div
        style={{ display: langShown ? 'flex' : 'none' }}
        className="text-3xl flex-col items-center absolute bottom-0 left-1/2 translate-y-full -translate-x-1/2"
      >
        <Link href={'?lang=en'}>EN</Link>
        <Link href={'?lang=ja'}>JA</Link>
      </div>
    </div>
  );
};

export default LangSwitcher;
