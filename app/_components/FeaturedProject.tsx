import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImpactIcon } from '@/utils/getImpactIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DonationProgress from './DonationProgress';
import { getDonationsPerProject } from '@/utils/getDonationsPerProject';

export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  owners: string;
  status: string;
  goal: number;
  mission: string;
  impacts: string[];
};

const Project = async ({ project }) => {
  const { id, title, owners, description } = project;
  const impactLogos = project.impacts.map((impact) => getImpactIcon(impact));
  const { count, amount } = await getDonationsPerProject(id);

  const progressPct = Math.round((amount / project.goal) * 100);
  console.log(progressPct);


  return (
    <div className="bg-cream drop-shadow-2xl rounded-md">

        <div className="sm:flex sm:flex-row-reverse">
          <div className="flex flex-col justify-between p-8 sm:pb-0">
            <div className="font-heading">
              <Link href={`/projects/${id}`}>
                <h2 className="text-4xl">{title}</h2>
                <small>{owners}</small>
              </Link>
            </div>
            <div className="flex gap-2 md:gap-8 py-3">
              {impactLogos.map((impactLogo) => (
                <div
                  key={impactLogo.text}
                  className="text-center flex flex-col"
                  style={{ color: impactLogo.color }}
                >
                  <FontAwesomeIcon
                    className=" lg:!hidden"
                    icon={impactLogo.icon}
                    size="2x"
                  />
                  <FontAwesomeIcon
                    className="!hidden lg:!block"
                    icon={impactLogo.icon}
                    size="3x"
                  />
                  <small>{impactLogo.text}</small>
                </div>
              ))}
            </div>
            <p className="text-justify">{description}</p>
          </div>
          <img
            className="min-w-full sm:min-w-[260px] lg:min-w-[360px] h-[300px] object-cover object-[50%_20%] sm:rounded-ss-md"
            src="https://sho-farm.sunnyday.jp/wp-content/uploads/2023/04/%E3%83%9F%E3%83%8B%E3%82%B5%E3%82%A4%E3%82%BA.jpg"
            alt=""
          />
          {/* <Image
              src="https://sho-farm.sunnyday.jp/wp-content/uploads/2014/10/1415165056949.jpg"
              alt={title}
              width={100}
              height={80}
            /> */}
        </div>
        <div className="p-8">
          <div className="pb-8">
            <h3 className="font-heading text-2xl">Crowd Coded Mission</h3>
            <p className="text-justify">{project.mission}</p>
          </div>
          <div className="pb-8">
            <div className="flex justify-between font-heading">
              <h3 className="text-2xl">{count} donators so far</h3>
              <p className="text-md text-coralBlue">
                ¥{amount} OUT OF ¥{project.goal}
              </p>
            </div>
            <DonationProgress progress={progressPct} />
          </div>
          <div className="flex justify-end gap-8">
            <Link
              className="text-coralBlue bg-white px-1 rounded font-heading border-2 border-coralBlue text-3xl"
              href={`/`}
            >
              Learn more
            </Link>
            <Link
              className="text-white bg-coralBlue px-1 rounded font-heading border-2 border-coralBlue text-3xl"
              href={`/`}
            >
              Donate
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Project;
