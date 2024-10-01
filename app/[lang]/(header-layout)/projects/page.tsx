import React from 'react';

import Project from '@/app/_components/Project';
import { ProjectProps } from '@/app/types/Props';
import { getProjects } from '@/utils/getProjects';

const ProjectsIndex = async () => {
  const projects: ProjectProps[] = await getProjects();
  return (
    <div className='min-h-[75vh] sm:min-h-auto'>
      <h1 className=" text-5xl md:text-7xl text-center my-10" >{projects.length} on-going project{projects.length > 1 ? 's' : ''}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-2 sm:m-10">
        {projects.map((project: ProjectProps) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsIndex;