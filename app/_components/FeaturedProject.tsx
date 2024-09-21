import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  owners: string[];
  status: string;
  goal: number;
  impacts: string[];
};

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { id, title, owners, description } = project;
  return (
    <div className="bg-cream drop-shadow-xl p-5">
      <Link href={`/projects/${id}`}>
        {/* <Image
          src="https://sho-farm.sunnyday.jp/wp-content/uploads/2014/10/1415165056949.jpg"
          alt={title}
          width={100}
          height={80}
        /> */}
        <img src="https://sho-farm.sunnyday.jp/wp-content/uploads/2014/10/1415165056949.jpg" alt="" />
        <h2>{title}</h2>
        <small>By {owners.join(', ')}</small>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Project;
