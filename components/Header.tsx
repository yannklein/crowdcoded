import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from 'next/image';
import logo from '../public/logo.png';
import { bebasNeue } from '../styles/fonts';


const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;


  return (
    <nav>
      <div className={`flex items-center justify-between drop-shadow-2xl bg-cream w-full py-3 px-5 ${bebasNeue.className}`}>
        <Link href="/" className={`flex gap-3 items-center`} data-active={isActive("/")}>
          <Image
              src={logo}
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
    </nav>
  );
};

export default Header;
