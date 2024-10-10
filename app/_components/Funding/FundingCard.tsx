import React, { ReactNode } from 'react';
import Markdown from 'react-markdown';
import DonationProgress from '@components/DonationProgress';
import { ProjectProps } from '@/app/types';
import { getDonationsPerProject } from '@/utils/getDonationsPerProject';
import { getProjectDonators } from '@/utils/getProjectDonators';

export const FundingCard: React.FC<{
  project: ProjectProps;
  children: ReactNode;
  dict: any;
}> = async ({ project, dict, children }) => {
  const { id, goal, projectPicture, projectTranslations } = project;
  const { count, amount } = await getDonationsPerProject(project.id);
  const { mission } = projectTranslations[0];
  const donators = await getProjectDonators(id);

  return (
    <div className="p-4 lg:p-8 z-10 fixed lg:sticky bottom-0 left-0 lg:top-8 w-screen lg:min-w-[400px] lg:w-[400px] h-fit bg-cream rounded-md shadow-default">
      <div className="hidden lg:block">
        <h2 className="hidden lg:text-3xl mb-4 text-center">
          {dict.projectDetails.fundingCard.title}
        </h2>
        <img
          className="w-full h-[160px] object-cover bg-white rounded mb-4"
          src={projectPicture}
          alt="website thumbnail"
        />
        <Markdown className="mb-4">{mission}</Markdown>
      </div>
      <DonationProgress donators={donators} goal={goal} amount={amount} count={count} dict={dict} />
      <h3 className="hidden lg:block text-xl lg:text-2xl text-center lg:mb-2">
        {dict.projectDetails.fundingCard.beAPatron}
      </h3>
      {children}
    </div>
  );
};
