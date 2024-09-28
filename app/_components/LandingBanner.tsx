import Link from "next/link";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingBanner: React.FC = () => {
  return (
    <div className="relative bg-lightBlue h-80 pb-4 lg:h-[28rem] flex flex-col items-center justify-center text-center drop-shadow-2xl ">
      <div className="absolute top-4 right-9 flex space-x-6 items-center font-heading">
        <FontAwesomeIcon icon={faGlobe} className="text-3xl" />
        <Link href="/projects" className="text-3xl">
          PROJECTS
        </Link>
        <Link href="/about" className="text-3xl">
          ABOUT US
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Keyboard with World"
          className="w-24 lg:w-48 h-22 lg:h-44 mr-2"
        />
        <h1 className="text-5xl lg:text-9xl mt-4 font-heading">CROWD CODED</h1>
      </div>
      <p className="mt-4 text-lg md:text-xl px-2 lg:px-0">
        People that make the world better are rarely millionaires
      </p>
      <p className="text-lg md:text-xl px-2 lg:px-0">
        But they very often need a{" "}
        <span className="text-coralBlue">website</span>
      </p>
      <p className="text-lg md:text-xl px-2 lg:px-0">
        Support them by{" "}
        <span className="text-coralBlue">funding their web project</span> and
        demultiplying their positive impact
      </p>
    </div>
  );
};

export default LandingBanner;
