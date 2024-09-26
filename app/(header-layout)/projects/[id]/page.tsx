import React from 'react';
import { getProject } from '@/utils/getProject';
import { ProjectProps } from '@/app/types/Props';
import FundingCard from '@/app/_components/FundingCard';

const Project = async ({ params }: { params: { id: string } }) => {
  const project: ProjectProps = await getProject(params.id);
  const { title, description, owners } = project;
  return (
    <div className="flex">
      <div className='flex-grow'>
        <h2>{title}</h2>
        <p>{owners}</p>
        <p>{description}</p>
      </div>
      <FundingCard project={project} />
    </div>
  );
};

export default Project;
