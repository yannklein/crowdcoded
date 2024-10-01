import Link from 'next/link';
import React from 'react';

const ProjectDetailsMenu = ({dict}) => {
  return (
    <div className="hidden lg:flex my-16 gap-8 border-b-2 pb-2 font-heading text-2xl lg:text-2xl justify-around text-center">
      <Link href="#who-they-are">{dict.projectDetails.menu.whoTheyAre}</Link>
      <Link href="#how-we-met-them">{dict.projectDetails.menu.howWeMetThem}</Link>
      <Link href="#our-mission">{dict.projectDetails.menu.ourMission}</Link>
      <Link href="#details-of-the-work">{ dict.projectDetails.menu.detailsOfTheWork }</Link>
      <Link href="#links">{dict.projectDetails.menu.links}</Link>  
    </div>
  );
};

export default ProjectDetailsMenu;