import React from "react"
import { ProjectProps } from "@/app/_components/Project"
import { getProject } from "@/utils/getProject"


const Project = async () => {

  const project: ProjectProps = await getProject()
  const {title, description, owners} = project;
  return (
    <div>
      <h2>{title}</h2>
      <p>By {owners.join(", ")}</p>
      <p>{description}</p>
    </div>
  )
}

export default Project
