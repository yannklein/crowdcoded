import React from "react"
import Project from "@/app/_components/Project"
import { getProjects } from "@/utils/getProjects";
import LandingBanner from "@components/LandingBanner";


const Landing = async () => {

  const projects = await getProjects();

  return (
      <div className="page">
        <main>
          <LandingBanner />
          {projects?.map((project) => (
            <div key={project.id} className="project">
              <Project project={project} />
            </div>
          ))}
        </main>
      </div>
  )
}

export default Landing
