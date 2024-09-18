import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from 'next/image';
// import { bebasNeue } from '../styles/fonts';


const Header: React.FC = () => {
  const isActive: (pathname: string) => boolean = (pathname) =>
    usePathname() === pathname;


  return (
    <div>
      <Header />
      <div className={`flex items-center justify-between drop-shadow-2xl bg-cream w-full py-3 px-5 `}>
        <Link href="/" className={`flex gap-3 items-center`} data-active={isActive("/")}>
          <Image
              src="/logo.png"
              alt="Crowd Coded logo"
              width={100}
              height={80}
            />
            <h1 className="ml-5 text-6xl font-bold text-gray-800 drop-shadow-sharp">Crowd Coded</h1>
            <p className="drop-shadow hidden md:block">Devs for a better future</p>
        </Link>
        <div className="gap-3  hidden sm:flex">
          <Link href="/create-post" className="text-2xl">Projects</Link>
          <Link href="/about" className="text-2xl">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
