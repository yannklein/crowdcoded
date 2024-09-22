import React from "react";
import { cn } from "@/lib/twMerge";

const DonationProgress: React.FC<{ progress: number }> = ({ progress }) => {
  const classComputed =
    "relative rounded text-center font-heading text-xl bg-white w-full h-8";

  return (
      <div className={cn(classComputed)}>
        <div
          className="absolute top-0 left-0 flex justify-center items-center h-full bg-coralBlue text-white rounded"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
  );
};

export default DonationProgress;
