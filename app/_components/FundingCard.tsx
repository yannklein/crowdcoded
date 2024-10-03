import React from "react";
import Markdown from "react-markdown";
import DonationProgress from "./DonationProgress";
import { ProjectProps } from "@/app/types";
import FundingAmountSelector from "./FundingAmountSelector";
import { getDonationsPerProject } from "@/utils/getDonationsPerProject";

const FundingCard: React.FC<{ project: ProjectProps; dict: any }> = async ({
  project,
  dict,
}) => {
  const { goal, projectPicture, projectTranslations } = project;
  const { count, amount } = await getDonationsPerProject(project.id);
  const { mission } = projectTranslations[0];

  return (
    <div className="p-4 lg:p-8 min-w-100 w-100 lg:min-w-[400px] lg:w-[400px] h-fit sticky top-8 bg-cream rounded-md shadow-[0_0_24px_0_rgba(0,0,0,0.3)]">
      <div className="hidden lg:block ">
        <h2 className="hidden lg:text-3xl mb-4 text-center">
          {dict.projectDetails.fundingCard.title}
        </h2>
        <img
          className="w-full h-[160px] object-cover bg-white rounded mb-4"
          src={projectPicture}
          alt="website thumbnail"
        />
        <Markdown className="mb-4">
          {mission}
        </Markdown>
      </div>
      <DonationProgress goal={goal} amount={amount} count={count} dict={dict} />
      <h3 className="hidden lg:block text-xl lg:text-2xl text-center lg:mb-2">
        {dict.projectDetails.fundingCard.beAPatron}
      </h3>
      <FundingAmountSelector dict={dict} />
    </div>
  );
};

export default FundingCard;
