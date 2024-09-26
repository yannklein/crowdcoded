import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { getImpactIcon } from '@/utils/getImpactIcon';
import DonationProgress from './DonationProgress';
import ImpactIcon from './ImpactIcon';
import PrimaryButton from './PrimaryButton';
import { ProjectProps } from '../types/Props';
import SecondaryButton from './SecondaryButton';

const Project: React.FC<{ project: ProjectProps }> = async ({ project }) => {
  const { id, title, owners, description, impacts, mission } = project;
  const impactsData = impacts.map((impact: string) => getImpactIcon(impact));

  return (
    <div className="bg-cream shadow-[0_0_24px_0_rgba(0,0,0,0.3)] rounded-md">
      <div className="sm:flex sm:flex-row-reverse">
        <div className="flex flex-col justify-between p-8 sm:pb-0">
          <div className="font-heading">
            <Link href={`/projects/${id}`}>
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
          src="https://sho-farm.sunnyday.jp/wp-content/uploads/2023/04/%E3%83%9F%E3%83%8B%E3%82%B5%E3%82%A4%E3%82%BA.jpg"
          alt=""
        />
        {/* <Image
            src="https://sho-farm.sunnyday.jp/wp-content/uploads/2014/10/1415165056949.jpg"
            alt={title}
            width={100}
            height={80}
          /> */}
      </div>
      <div className="p-8">
        <div className="pb-8">
          <h3 className="font-heading text-2xl">Crowd Coded Mission</h3>
          <p className="text-justify">{mission}</p>
        </div>
        <DonationProgress project={project} />
        <div className="flex justify-end gap-8">
          <SecondaryButton href={`/`}>Learn more</SecondaryButton>
          <PrimaryButton href={`/`}>Donate</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Project;
