import React from "react";
import Markdown from "react-markdown";
import DonationProgress from "./DonationProgress";
import { ProjectProps } from "@/app/types";
import FundingAmountSelector from "./FundingAmountSelector";

const FundingCard: React.FC<{ project: ProjectProps, dict: any }> = ({ project, dict }) => {
  return (
    <div className="p-4 lg:p-8 min-w-100 lg:min-w-[400px] h-fit sticky top-8 bg-cream rounded-md shadow-[0_0_24px_0_rgba(0,0,0,0.3)]">
      <div className="hidden lg:block ">
        <h2 className="hidden lg:text-3xl mb-4 text-center">
          {dict.projectDetails.fundingCard.title}
        </h2>
        <img
          className="w-full h-[160px] object-contain bg-white rounded mb-4"
          src="https://res.cloudinary.com/yanninthesky/image/upload/v1727435191/crowdcoded/c954eb76d6df499ab5e20975de7bb371_txdaod.jpg"
          alt="website thumbnail"
        />
        <Markdown className="mb-4">
          Shoko and Sho’s farm website has been around for quite sometimes and
          became cluttered and hard to maintain. They need a **website update**
          that will help them better sell their produce.
        </Markdown>
      </div>
      <DonationProgress project={project} dict={dict} />
      <h3 className="hidden lg:block text-xl lg:text-2xl text-center lg:mb-2">
        {dict.projectDetails.fundingCard.beAPatron}
      </h3>
      <FundingAmountSelector dict={dict} />
    </div>
  );
};

export default FundingCard;
