import Link from 'next/link';
import React from 'react';

const ProjectDetailsMenu = () => {
  return (
    <div className="my-16 flex gap-8 border-b-2 pb-2 font-heading text-2xl justify-around">
      <Link href="#who-they-are">Who they are</Link>
      <Link href="#how-we-met-them">How we met them</Link>
      <Link href="#our-mission">Our Mission</Link>
      <Link href="#details-of-the-work">Details of the Work</Link>
      <Link href="#links">Links</Link>
    </div>
  );
};

export default ProjectDetailsMenu;