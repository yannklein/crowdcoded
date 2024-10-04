import Link from 'next/link';
import Image from 'next/image';
import LangSwitcher from './LangSwitcher';
import ReactMarkdown from 'react-markdown';

const LandingBanner = ({ dict }) => {
  return (
    <section className="relative bg-lightBlue pb-16 lg:pb-24 pt-32 sm:pt-24 flex flex-col items-center justify-center text-center drop-shadow-2xl ">
      <div className="absolute top-4 sm:right-9 flex space-x-6 items-center font-heading">
        <LangSwitcher />
        <Link href="projects" className="text-3xl">
          {dict.landing.banner.projects}
        </Link>
        <Link href="about" className="text-3xl">
          {dict.landing.banner.about}
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <Image
          className="w-48 h-44 sm:mr-2"
          src="/logo.png"
          alt="Crowd Coded logo"
          width={100}
          height={100}
        />
        <h1 className="text-6xl lg:text-9xl mt-4 font-heading">
          {dict.landing.banner.title}
        </h1>
      </div>
      <div className="mt-12 text-md md:text-2xl px-4 lg:px-0 font-light">
        <ReactMarkdown className='prose sm:prose-sm'>
          {dict.landing.banner.subtitle1}
        </ReactMarkdown>
        <ReactMarkdown className='prose-strong:text-coralBlue prose-strong:font-light'>
          {dict.landing.banner.subtitle2}
        </ReactMarkdown>
        <ReactMarkdown className='prose-strong:text-coralBlue prose-strong:font-light'>
          {dict.landing.banner.subtitle3}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default LandingBanner;
