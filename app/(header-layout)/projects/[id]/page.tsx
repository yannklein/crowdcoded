import React from 'react';
import { getProject } from '@/utils/getProject';
import { ProjectProps } from '@/app/types/Props';
import FundingCard from '@/app/_components/FundingCard';
import ImpactIcon from '@/app/_components/ImpactIcon';
import { getImpactIcon } from '@/utils/getImpactIcon';
import ProjectDetailsMenu from '@/app/_components/ProjectDetailsMenu';
import Markdown from 'react-markdown';
import ProjectMilestone from '@/app/_components/ProjectMilestone';

const Project = async ({ params }: { params: { id: string } }) => {
  const project: ProjectProps = await getProject(params.id);
  const { title, description, owners, impacts } = project;
  const impactsData = impacts.map((impact: string) => getImpactIcon(impact));
  return (
    <div className="flex p-8 gap-8">
      <div className="flex-grow">
        <div className="flex gap-8">
          <img
            className="w-1/3 h-[260px] object-cover object-[50%_20%] rounded-md"
            src="https://sho-farm.sunnyday.jp/wp-content/uploads/2023/04/%E3%83%9F%E3%83%8B%E3%82%B5%E3%82%A4%E3%82%BA.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-8xl">{title}</h1>
              <h3 className="text-xl">{owners}</h3>
            </div>
            <div className="flex gap-3 md:gap-8">
              {impactsData.map((impactData) => (
                <ImpactIcon impact={impactData} size="4x" />
              ))}
            </div>
          </div>
        </div>
        <ProjectDetailsMenu />
        <div className="pb-8">
          <h2 className="text-3xl">Who they are</h2>
          <div className="flex">
            <p className="w-1/2">
              SHO Farm is located in Yokosuka City an hour and an half by train
              from Tokyo. They grow delicious organic vegetables mostly from
              native seeds without any chemical (pesticide, herbicide or
              fertilizers). Their aim is to build sustainable agriculture in
              their family farm following the principle of permaculture, they
              preserve the soil by reducing tillage as much as possible, they
              try to be zero waste as much as possible and they prioritise local
              and fresh produce deliveries. They are also connected to their
              local community and organize enjoyable events and different type
              of business collaboration projects.
            </p>
            <p>SOME MAP</p>
          </div>
        </div>
        <div className="pb-8">
          <h2 className="text-3xl">How we met them</h2>
          <div className="flex w-1/2">
            <p>
              SOME CAROUSEL WITH: Shoko and Sho welcome volunteers every
              Wednesday at their farm. As Adriana and I wanted to know more
              about permaculture, we decided to spend a day helping them.{' '}
            </p>
          </div>
        </div>
        <div className="pb-8">
          <h2 className="text-3xl">Our Mission</h2>
          <Markdown className="mb-4">
            Shoko and Sho’s farm website has been around for quite sometimes and
            became cluttered and hard to maintain. They need a **website
            update** that will help them better sell their produce.
          </Markdown>
          <div>
            <ProjectMilestone date="September 4th 2024" description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website " title="First meet" done={true} />
            <ProjectMilestone date="September 27th 2024" description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website " title="First meet" done={true} />
            <ProjectMilestone date="October 1st 2024" description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website " title="First meet" done={true} />
            <ProjectMilestone date="TBD" description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website " title="First meet" done={false} />
            <ProjectMilestone date="TBD" description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website " title="First meet" done={false} />
          </div>
        </div>
      </div>
      <FundingCard project={project} />
    </div>
  );
};

export default Project;
