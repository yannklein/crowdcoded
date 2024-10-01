import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";

import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { getProject } from "@/utils/getProject";
import { getImpactIcon } from "@/utils/getImpactIcon";
import { ProjectProps } from "@/app/types";

import ImpactIcon from "@/app/_components/ImpactIcon";
import FundingCard from "@/app/_components/FundingCard";
import ProjectDetailsMenu from "@/app/_components/ProjectDetailsMenu";
import ProjectMilestone from "@/app/_components/ProjectMilestone";
import ProjectCarousel from "@/app/_components/ProjectCarousel";
import { getDictionary } from "@/app/[lang]/dictionaries";
import ReactMarkdown from "react-markdown";
import getFormattedDate from "@/utils/getFormattedDate";

const ProjectDetails = async ({ params: { id, lang } }: { params: { id: string, lang: string } }) => {
  const project: ProjectProps = await getProject(id, lang);
  const { impacts, ownersPicture, gmapsUrl, links, projectTranslations } = project;
  const { title, description, owners, meetStory, mission, work, milestones } = projectTranslations[0];

  const projectLinks = links['links'];
  const icons = {
    website: faLaptop,
    youtube: faSquareYoutube,
    facebook: faSquareFacebook,
    instagram: faSquareInstagram,
  }
  projectLinks.map ((link) => {
    link.icon = icons[link.title.toLowerCase()];
  })
  
  const impactsData = impacts.map((impact: string) => getImpactIcon(impact));
  const dict = await getDictionary(lang);  

  console.log(milestones[0].date);
  

  return (
    <div className="h-[92vh] flex-col flex p-2 lg:h-auto lg:p-8 lg:gap-8 lg:flex-row">
      <div className="overflow-scroll flex-shrink min-w-0 lg:flex-grow lg:h-auto">
        <div className="pb-12 lg:pb-0 flex flex-col-reverse gap-3 lg:flex-row lg:gap-8">
          <img
            className="lg:w-1/3 h-[260px] object-cover object-[50%_20%] rounded-md"
            src={ownersPicture}
            alt={owners}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-6xl lg:text-8xl">{title}</h1>
              <h3 className="text-md mb-3 lg:text-xl">{owners}</h3>
            </div>
            <div className="flex gap-3 md:gap-8">
              {impactsData.map((impactData) => (
                <ImpactIcon impact={impactData} size="4x" key={`${id}-${impactData.text}`}/>
              ))}
            </div>
          </div>
        </div>
        <ProjectDetailsMenu dict={dict} />
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="who-they-are">
            {dict.projectDetails.menu.whoTheyAre}
          </h2>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-16">
            <p className="lg:w-1/2 text-justify">
              {description}
            </p>
            <iframe
              className="h-44 lg:h-auto lg:w-1/2 shadow-md rounded-md"
              src={gmapsUrl}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="how-we-met-them">
            {dict.projectDetails.menu.howWeMetThem}
          </h2>
          <ProjectCarousel slides={meetStory['story']} />
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="our-mission">
            {dict.projectDetails.menu.ourMission}
          </h2>
          <Markdown className="mb-4">
            {mission}
          </Markdown>
          <div className='relative before:contents[""] before:absolute before:inset-0 before:bg-coralBlue before:w-1 before:h-full before:left-[30px] before:z-[-1]'>
            {milestones.map((milestone) => (
              <ProjectMilestone
                date={getFormattedDate(milestone.date, lang)}
                description={milestone.description}
                title={milestone.title}
                done={milestone.completed}
              />
            ))}
          </div>
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="details-of-the-work">
            {dict.projectDetails.menu.detailsOfTheWork}
          </h2>
          <iframe
            style={{ zoom: 0.5 }}
            className="w-full lg:w-[800px] h-[400px] object-cover my-3 shadow mb-6"
            src={projectLinks[0].url}
            title="Original Website"
          ></iframe>
          <ReactMarkdown className="prose-h3:text-2xl prose-p:mb-6">
            {work}
          </ReactMarkdown>
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="links">
            {dict.projectDetails.menu.links}
          </h2>
          <div className="flex gap-8">
            {projectLinks.map((link) => (
              <Link target="_blank" href={link.url}>
                <ImpactIcon
                  impact={{ text: link.title, icon: link.icon, color: "black" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <FundingCard project={project} dict={dict} />
    </div>
  );
};

export default ProjectDetails;
