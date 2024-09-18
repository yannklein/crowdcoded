import React from "react"
import Project from "@/app/_components/Project"
import { getFeed } from "@/utils/getFeed";


const Landing = async () => {

  const feed = await getFeed();

  return (
      <div className="page">
        <main>
          {feed?.map((project) => (
            <div key={project.id} className="project">
              <Project project={project} />
            </div>
          ))}
        </main>
      </div>
  )
}

export default Landing
