import React from 'react';
import Link from 'next/link';
import { ProjectProps } from '@/app/types';
import DonationProgress from './DonationProgress';
import { getDonationsPerProject } from '@/utils/getDonationsPerProject';
import { getProjectDonators } from '@/utils/getProjectDonators';

const Project: React.FC<{ project: ProjectProps; dict: any }> = async ({
  project,
  dict
}) => {
  const { id, projectTranslations, projectPicture, ownersPicture, goal } =
    project;
  const { owners } = projectTranslations[0];
  const { count, amount } = await getDonationsPerProject(project.id);
  const donators = await getProjectDonators(id);
  
  return (
    <Link
      className="block shadow-default bg-cream rounded"
      href={`/projects/${id}`}
    >
      <img className="w-full h-300" src={projectPicture} alt="project" />
      <div className="flex items-center p-4 gap-4">
        <img
          className="w-[80px] min-w-[80px] h-[80px] min-h-[80px] sm:w-[112px] sm:min-w-[112px] sm:h-[112px] sm:min-h-[112px] border-4 rounded-full rounded-br-none object-cover object-top"
          src={ownersPicture}
          alt="project"
        />
        <div>
          <p className="mb-2">
            {dict.projects.helpMessage1}
            <span className="font-bold">{owners}</span>
            {dict.projects.helpMessage2}
          </p>
          <DonationProgress
            donators={donators}
            goal={goal}
            count={count}
            amount={amount}
            dict={dict}
          />
        </div>
      </div>
    </Link>
  );
};

export default Project;
