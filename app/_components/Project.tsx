import React from "react";
import Link from "next/link";
import { ProjectProps } from "@/app/types";
import DonationProgress from "./DonationProgress";

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { id, title, owners, description } = project;
  return (
    <Link className="block shadow-default bg-cream rounded" href={`/projects/${id}`}>
      <img className="w-full h-300" src="https://res.cloudinary.com/yanninthesky/image/upload/v1727592856/crowdcoded/83857121-75F6-47F0-9A0C-C71BA836C070-9973-000006E0E80ABE33_c17md3.jpg" alt="project" />
      <div className="flex items-center p-4 gap-4">
        <img className="w-[80px] min-w-[80px] h-[80px] min-h-[80px] sm:w-[112px] sm:min-w-[112px] sm:h-[112px] sm:min-h-[112px] border-4 rounded-full rounded-br-none object-cover object-top" src="https://res.cloudinary.com/yanninthesky/image/upload/v1727435190/crowdcoded/E3_83_9F_E3_83_8B_E3_82_B5_E3_82_A4_E3_82_BA_healyc.jpg" alt="project" />
        <div>
          <p className="mb-2">Help <span className="font-bold">{owners}</span> fund their website</p>
          <DonationProgress project={project} />
        </div>
      </div>
    </Link>
  );
};

export default Project;
