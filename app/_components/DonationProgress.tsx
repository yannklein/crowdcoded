import React from "react";
import Link from "next/link";

const DonationProgress: React.FC<{ progress: Number }> = ({ progress }) => {
  const classComputed = 
    "before:rounded before:!content-['" + progress + `%'] before:flex before:justify-center before:items-center before:z-1 before:position-absolute before:top-0 before:left-0 before:bg-coralBlue before:text-white before:h-full before:w-[20%]
    position-relative rounded text-center font-heading bg-white w-full h-8`;
  return (
    <>
    <div className={classComputed}></div>
    </>
  );
};

export default DonationProgress;
