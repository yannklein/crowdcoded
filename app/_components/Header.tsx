"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from 'next/image';
import LangSwitcher from "./LangSwitcher";


const Header: React.FC = () => {
  const isActive: (pathname: string) => boolean = (pathname) =>
    usePathname() === pathname;


  return (
    <nav>
      <div className={`flex items-center justify-center md:justify-between drop-shadow-2xl bg-cream w-full py-3 px-5 font-heading`}>
        <Link href="/" className={`flex lg:gap-3 items-center`} data-active={isActive("/")}>
          <Image
              className="w-12 h-12 lg:w-24 lg:h-24"
              src="/logo.png"
              alt="Crowd Coded logo"
              width={100}
              height={100}
            />
            <h1 className="ml-3 lg:ml-5 text-5xl lg:text-6xl font-bold text-gray-800 drop-shadow-sharp">Crowd Coded</h1>
            <p className="drop-shadow hidden md:block">Devs for a better future</p>
        </Link>
        <div className="gap-3 hidden sm:flex">
          <LangSwitcher />
          <Link href="/projects" className="text-2xl">Projects</Link>
          <Link href="/about" className="text-2xl">About us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
