import Link from 'next/link';
// import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { getImpactIcon } from '@/utils/getImpactIcon';
import DonationProgress from './DonationProgress';
import ImpactIcon from './ImpactIcon';
import { ProjectProps } from '../types';
import SecondaryButton from './SecondaryButton';
import FundModal from './FundModal';
import { getDonationsPerProject } from '@/utils/getDonationsPerProject';

const Project: React.FC<{ project: ProjectProps; dict: any }> = async ({
  project,
  dict
}) => {
  const { id, impacts, goal, projectTranslations } = project;
  const { owners, title, description, mission, lang } = projectTranslations[0];
  const { count, amount } = await getDonationsPerProject(project.id);
  const impactsData = impacts.map((impact: string) => getImpactIcon(impact));
  const descriptionLength = {
    EN: 300,
    JA: 144
  };

  return (
    <>
      <div className="bg-cream shadow-default rounded-md">
        <div className="sm:flex sm:flex-row-reverse">
          <div className="flex flex-col justify-between p-8 sm:pb-0">
            <div className="font-heading">
              <Link href={`projects/${id}`}>
                <h2 className="text-4xl">{title}</h2>
                <small>{owners}</small>
              </Link>
            </div>
            <div className="flex gap-3 md:gap-8 py-4">
              {impactsData.map((impactData) => (
                <ImpactIcon impact={impactData} />
              ))}
            </div>
            <p className="text-justify">{description}</p>
          </div>
          <img
            className="min-w-full sm:min-w-[260px] md:min-w-[180px] lg:min-w-[300px] xl:min-w-[360px] h-[300px] object-cover object-[50%_20%] sm:rounded-ss-md"
            src="https://res.cloudinary.com/yanninthesky/image/upload/v1727435190/crowdcoded/E3_83_9F_E3_83_8B_E3_82_B5_E3_82_A4_E3_82_BA_healyc.jpg"
            alt=""
          />
        </div>
        <div className="p-8">
          <div className="pb-8">
            <h3 className="font-heading text-2xl">
              {dict.landing.featured.mission}
            </h3>
            <p className="text-justify">{mission}</p>
          </div>
          <DonationProgress
            count={count}
            amount={amount}
            goal={goal}
            dict={dict}
          />
          <div className="flex justify-end gap-8">
            <SecondaryButton href={`/projects/${id}`}>
              {dict.landing.featured.learnMore}
            </SecondaryButton>
            <FundModal
              count={count}
              amount={amount}
              goal={goal}
              dict={dict}
              mission={mission}
            />
          </div>
          <p className="text-justify">
            {description.slice(0, descriptionLength[lang])}...
          </p>
        </div>
        <img
          className="min-w-full sm:min-w-[260px] md:min-w-[180px] lg:min-w-[300px] xl:min-w-[360px] h-[300px] object-cover object-[50%_20%] sm:rounded-ss-md"
          src="https://res.cloudinary.com/yanninthesky/image/upload/v1727435190/crowdcoded/E3_83_9F_E3_83_8B_E3_82_B5_E3_82_A4_E3_82_BA_healyc.jpg"
          alt=""
        />
      </div>
      <div className="p-8">
        <div className="pb-8">
          <h3 className="font-heading text-2xl">
            {dict.landing.featured.mission}
          </h3>
          <p className="text-justify">
            <ReactMarkdown>{mission}</ReactMarkdown>
          </p>
        </div>
        <DonationProgress
          goal={goal}
          count={count}
          amount={amount}
          dict={dict}
        />
        <div className="flex justify-end gap-8">
          <SecondaryButton href={`/projects/${id}`}>
            {dict.landing.featured.learnMore}
          </SecondaryButton>
          <FundModal project={project} dict={dict} />
        </div>
      </div>
    </>
  );
};

export default Project;
