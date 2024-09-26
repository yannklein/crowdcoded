import React from "react";
import { cn } from "@/lib/twMerge";
import { getDonationsPerProject } from "@/utils/getDonationsPerProject";
import { ProjectProps } from "@/app/types/Props";

const DonationProgress: React.FC<{ project: ProjectProps }> = async ({ project }) => {
  const { count, amount } = await getDonationsPerProject(project.id);

  const progressPct = Math.round((amount / project.goal) * 100);
  const classComputed =
    "relative rounded text-center font-heading text-xl bg-white w-full h-8";

  return (
    <div className="pb-8">
    <div className="flex justify-between font-heading">
      <h3 className="text-2xl">{count} donators so far</h3>
      <p className="text-md text-coralBlue">
        ¥{amount} OUT OF ¥{project.goal}
      </p>
    </div>
    <div className={cn(classComputed)}>
        <div
          className="absolute top-0 left-0 flex justify-center items-center h-full bg-coralBlue text-white rounded"
          style={{ width: `${progressPct}%` }}
        >
          {progressPct}%
        </div>
      </div>
  </div>

  );
};

export default DonationProgress;
