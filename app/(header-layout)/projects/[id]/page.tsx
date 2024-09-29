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

const Project = async ({ params }: { params: { id: string } }) => {
  const project: ProjectProps = await getProject(params.id);
  const { title, description, owners, impacts } = project;
  const impactsData = impacts.map((impact: string) => getImpactIcon(impact));

  // TODO: add slides data in DB
  const slides = [
    {
      image:
        "https://res.cloudinary.com/yanninthesky/image/upload/c_crop,g_faces,h_2268,w_2268/v1727434655/crowdcoded/IMG_1109_ya48gv.jpg",
      text: "Shoko and Sho welcome volunteers every Wednesday at their farm. As Adriana and I wanted to know more about permaculture, we decided to spend a day helping them. ",
    },
    {
      image:
        "https://res.cloudinary.com/yanninthesky/image/upload/crowdcoded/IMG_1100_jkczll.jpg",
      text: "What stroke us first, was the deep connection between the farm and the surrounding nature. Bees and wasps roaming freely around the farm building feeding on the vines, spiders happily building their webs on chili pepper plants, all sorts of insects in the soil. It felt right to produce food in harmony with nature, in total opposition with the sterile fields of conventional agriculture. ",
    },
    {
      image:
        "https://res.cloudinary.com/yanninthesky/image/upload/c_crop,g_faces,h_2268,w_2268/v1727435082/crowdcoded/IMG_1103_nxutxg.jpg",
      text: "Shoko and Sho welcomed us, not as a workforce but rather as hosts, they took time to answer our questions, taught us how to farm, laughed with us, they invited us for lunch with produces of the farm and thank us with vegetable present when we left. We had a nice human experience on that day. ",
    },
    {
      image:
        "https://res.cloudinary.com/yanninthesky/image/upload/v1727434666/crowdcoded/IMG_1116_boqo3x.jpg",
      text: "A last thing we noticed on that day is that their farm is professionally managed to make them and their coworker a living and to feed the local Yokosuka population. Very far from the, sometimes “hippie organic” you might see, their agriculture feels like a model that could fit a future society that can rely on fossil fuels and chemicals anymore.",
    },
  ];
  return (
    <div className="h-[92vh] flex-col flex p-2 lg:h-auto lg:p-8 lg:gap-8 lg:flex-row">
      <div className="overflow-scroll flex-shrink min-w-0 lg:flex-grow lg:h-auto">
        <div className="pb-12 lg:pb-0 flex flex-col-reverse gap-3 lg:flex-row lg:gap-8">
          <img
            className="lg:w-1/3 h-[260px] object-cover object-[50%_20%] rounded-md"
            src="https://res.cloudinary.com/yanninthesky/image/upload/v1727435190/crowdcoded/E3_83_9F_E3_83_8B_E3_82_B5_E3_82_A4_E3_82_BA_healyc.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-6xl lg:text-8xl">{title}</h1>
              <h3 className="text-md mb-3 lg:text-xl">{owners}</h3>
            </div>
            <div className="flex gap-3 md:gap-8">
              {impactsData.map((impactData) => (
                <ImpactIcon impact={impactData} size="4x" />
              ))}
            </div>
          </div>
        </div>
        <ProjectDetailsMenu />
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="who-they-are">
            Who they are
          </h2>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-16">
            <p className="lg:w-1/2 text-justify">
              SHO Farm is located in Yokosuka City an hour and an half by train
              from Tokyo. They grow delicious organic vegetables mostly from
              native seeds without any chemical (pesticide, herbicide or
              fertilizers). Their aim is to build sustainable agriculture in
              their family farm following the principle of permaculture, they
              preserve the soil by reducing tillage as much as possible, they
              try to be zero waste as much as possible and they prioritise local
              and fresh produce deliveries. They are also connected to their
              local community and organize enjoyable events and different type
              of business collaboration projects.
            </p>
            <iframe
              className="h-44 lg:h-auto lg:w-1/2 shadow-md rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93041.78173093272!2d139.6155857439024!3d35.21021137014839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60183e6a724ba9d5%3A0xfffc0592cff45bae!2sSHO%20Farm!5e0!3m2!1sen!2sjp!4v1727414178302!5m2!1sen!2sjp"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="how-we-met-them">
            How we met them
          </h2>
          <ProjectCarousel slides={slides} />
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="our-mission">
            Our Mission
          </h2>
          <Markdown className="mb-4">
            Shoko and Sho’s farm website has been around for quite sometimes and
            became cluttered and hard to maintain. They need a **website
            update** that will help them better sell their produce.
          </Markdown>
          <div className='relative before:contents[""] before:absolute before:inset-0 before:bg-coralBlue before:w-1 before:h-full before:left-[30px] before:z-[-1]'>
            <ProjectMilestone
              date="September 4th 2024"
              description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website "
              title="First meet"
              done={true}
            />
            <ProjectMilestone
              date="September 27th 2024"
              description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website "
              title="First meet"
              done={true}
            />
            <ProjectMilestone
              date="October 1st 2024"
              description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website "
              title="First meet"
              done={true}
            />
            <ProjectMilestone
              date="TBD"
              description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website "
              title="First meet"
              done={false}
            />
            <ProjectMilestone
              date="TBD"
              description="We discovered Shoko and Sho outstanding farm and business and heard of their wish to improve their website "
              title="First meet"
              done={false}
            />
          </div>
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="details-of-the-work">
            Details of the Work
          </h2>
          <h3 className="text-2xl">Issues of the Current website</h3>
          <p>
            They currently have a blog type Wordpress website. The structure is
            not well adapted to a business selling vegetable boxes. Also,
            English and Japanese version of the text are displayed one below
            each other on each page.
          </p>
          <iframe
            style={{ zoom: 0.5 }}
            className="w-full lg:w-[800px] h-[400px] object-cover my-3 shadow"
            src="http://sho-farm.sunnyday.jp"
            title="Original Website"
          ></iframe>
          <h3 className="text-2xl mt-6">Building a sustainable website</h3>
          <Markdown>
            Another important aspect is to make sure that Shoko and Sho could
            maintain their website as much as possible. That it won’t impact
            their business in terms of time and money.As much as possible we
            will try to keep the maintenance fee (hosting fees mostly) at the
            same level as before the update. We will teach them how to update
            their website by themselves to have minimal external maintenance in
            the future.
          </Markdown>
        </div>
        <div className="pb-12 lg:pb-16">
          <h2 className="text-3xl mb-4" id="links">
            Links
          </h2>
          <div className="flex gap-8">
            <Link target="_blank" href="http://sho-farm.sunnyday.jp">
              <ImpactIcon
                impact={{ text: "Website", icon: faLaptop, color: "black" }}
              />
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@shofarm2014">
              <ImpactIcon
                impact={{
                  text: "Youtube channel",
                  icon: faSquareYoutube,
                  color: "black",
                }}
              />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/2014sfarm">
              <ImpactIcon
                impact={{
                  text: "Facebook page",
                  icon: faSquareFacebook,
                  color: "black",
                }}
              />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/sho__farm/">
              <ImpactIcon
                impact={{
                  text: "Instagram channel",
                  icon: faSquareInstagram,
                  color: "black",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      <FundingCard project={project} />
    </div>
  );
};

export default Project;
