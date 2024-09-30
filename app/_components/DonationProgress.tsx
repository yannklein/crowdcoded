import React from "react";
import { cn } from "@/lib/twMerge";
import { getDonationsPerProject } from "@/utils/getDonationsPerProject";
import { ProjectProps } from "@/app/types";

const DonationProgress: React.FC<{ project: ProjectProps, dict: any }> = async ({
  project,
  dict
}) => {
  const { count, amount } = await getDonationsPerProject(project.id);

  const progressPct = Math.round((amount / project.goal) * 100);
  const classComputed =
    "relative rounded text-center font-heading text-xl bg-white w-full h-8";

  return (
    <div className="pb-2 lg:*:pb-8">
      <div className="flex justify-between font-heading items-center">
        <h3 className="text-xl lg:text-xl">{count} {dict.projectDetails.fundingCard.sponsorsSoFar}</h3>
        <p className="text-sm lg:text-md text-coralBlue">
          ¥{amount} {dict.projectDetails.fundingCard.outOf} ¥{project.goal}
        </p>
      </div>
      <div className={cn(classComputed)}>
        <div
          className="absolute top-0 left-0 flex justify-center items-center h-full bg-coralBlue text-white rounded"
          style={{ width: `${progressPct < 10 ? 10 : progressPct}%` }}
        >
          {progressPct}%
        </div>
      </div>
    </div>
  );
};

export default DonationProgress;
