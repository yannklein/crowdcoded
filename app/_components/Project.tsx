import React from "react";
import Link from "next/link";
import { ProjectProps } from "@/app/types";

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const { id, title, owners, description } = project;
  return (
    <Link href={`/projects/${id}`}>
      <h2>{title}</h2>
      <small>By {owners}</small>
      <p>{description}</p>
    </Link>
  );
};

export default Project;
