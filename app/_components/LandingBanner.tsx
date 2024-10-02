import Link from 'next/link';
import Image from 'next/image';
import LangSwitcher from './LangSwitcher';

const LandingBanner = ({ dict }) => {
  return (
    <div className="relative bg-lightBlue pb-24 pt-32 sm:pt-24 flex flex-col items-center justify-center text-center drop-shadow-2xl ">
      <div className="absolute top-4 sm:right-9 flex space-x-6 items-center font-heading">
        <LangSwitcher />
        <Link href="projects" className="text-3xl">
          {dict.landing.banner.projects}
        </Link>
        <Link href="about" className="text-3xl">
          {dict.landing.banner.about}
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Image
          className="w-24 lg:w-48 h-22 lg:h-44 mr-2"
          src="/logo.png"
          alt="Crowd Coded logo"
          width={100}
          height={100}
        />
        <h1 className="text-6xl lg:text-9xl mt-4 font-heading">
          {dict.landing.banner.title}
        </h1>
      </div>
      <div className="mt-4 text-md md:text-2xl px-4 lg:px-0 font-light">
        <p className='mb-2 sm:mb-0'>{dict.landing.banner.subtitle1}</p>
        <p>
          {dict.landing.banner.subtitle2}{' '}
          <span className="text-coralBlue">
            {dict.landing.banner.subtitle3}
          </span>
          {dict.landing.banner.subtitle4}
        </p>
        <p className='mb-2 sm:mb-0'>
          {dict.landing.banner.subtitle5}{' '}
          <span className="text-coralBlue">
            {dict.landing.banner.subtitle6}
          </span>{' '}
          {dict.landing.banner.subtitle7}
        </p>
      </div>
    </div>
  );
};

export default LandingBanner;
