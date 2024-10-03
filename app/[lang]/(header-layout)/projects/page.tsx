import React from 'react';

import Project from '@/app/_components/Project';
import { ProjectProps } from '@/app/types/Props';
import { getProjects } from '@/utils/getProjects';
import { getDictionary } from '../../dictionaries';

const ProjectsIndex = async ({ params: { lang }}: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);
  const projects: ProjectProps[] = await getProjects(lang);
  return (
    <div className='min-h-[75vh] sm:min-h-auto'>
      <h1 className="text-4xl md:text-7xl text-center my-10" >{projects.length} {projects.length > 1 ? dict.projects.ongoings : dict.projects.ongoing}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 m-2 sm:m-10">
        {projects.map((project: ProjectProps) => (
          <Project key={project.id} project={project} dict={dict}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectsIndex;