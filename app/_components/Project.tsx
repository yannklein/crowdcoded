import React from "react";
import Link from "next/link";

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
  const {id, title, owners, description} = project;
  return (
    <Link href={`/projects/${id}`}>
      <h2>{title}</h2>
      <small>By {owners.join(", ")}</small>
      <p>{description}</p>
    </Link>
  );
};

export default Project;
