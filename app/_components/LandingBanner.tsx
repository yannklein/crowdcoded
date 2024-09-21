
const LandingBanner: React.FC = () => {
  return (
    <div className="bg-lightBlue h-80 pb-4 lg:h-[28rem] flex flex-col items-center justify-center text-center drop-shadow-2xl font-heading">
      <div className="flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Keyboard with World"
          className="w-24 lg:w-48 h-22 lg:h-44 mr-2"
        />
        <h1 className="text-4xl md:text-6xl lg:text-9xl mt-4">CROWD CODED</h1>
      </div>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl px-2 lg:px-0">
        People that make the world better are rarely millionaires
      </p>
      <p className="text-lg md:text-xl lg:text-2xl px-2 lg:px-0">But they very often need a <span className="text-coralBlue">website</span></p>
      <p className="text-lg md:text-xl lg:text-2xl px-2 lg:px-0">
        Support them by{' '}
        <span
          className="text-coralBlue"
        >
          funding their web project
        </span>{' '}
        and demultiplying their positive impact
      </p>
    </div>
  );
}

export default LandingBanner;
