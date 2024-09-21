import React from 'react';
import { getProjects } from '@/utils/getProjects';
import Project from '@/app/_components/Project';
import FeaturedProject from './_components/FeaturedProject';

const Landing = async () => {
  const projects = await getProjects();

  return (
    <div className="page p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="font-heading flex justify-center text-center items-center text-6xl">
          Today’s project to support
        </div>
        <div className="col-span-2">
          <FeaturedProject project={projects[0]} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
