import React from 'react';
import ReactMarkdown from 'react-markdown';

import { getGHProfile } from '@/utils/getGHProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getDictionary } from '../../dictionaries';

const About = async ({ params: { lang }}) => {
  const profilePromises = [
    getGHProfile('adrianaito'),
    getGHProfile('yannklein'),
  ];
  const profiles = await Promise.all(profilePromises);
  const linkedInLinks = [
    "https://www.linkedin.com/in/adriana-ito/",
    "https://www.linkedin.com/in/yann-klein/",
  ]
  const dict = await getDictionary(lang);
  const aboutText = dict.about.text
  console.log(aboutText);
  

  return (
    <div>
      <h1 className="text-8xl text-center my-10">{dict.about.title}</h1>
      <div className="flex flex-col lg:flex-row mb-10 gap-16 mx-3 sm:mx-16 xl:mx-24 xl:gap-24">
        <div className="lg:w-1/3 flex flex-col">
          <img
            className="flex-grow h-[300px] object-cover rounded-md"
            src="https://res.cloudinary.com/yanninthesky/image/upload/v1727434655/crowdcoded/IMG_0558_duifzk.jpg"
            alt="about us"
          />
        </div>
        <div className="lg:w-2/3 flex flex-col justify-around text-justify">
          <div className="mb-8">
            <ReactMarkdown className=" w-full prose-a:text-coralBlue mb-5 prose-p:mb-3">
              {aboutText}
            </ReactMarkdown>
          </div>
          <div className="flex justify-around lg:justify-between">
            {profiles.map((profile, index) => {
              return (
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <img
                    className="rounded-full w-32 h-32 xl:w-36 xl:h-36 bg-cream object-cover shadow-md"
                    src={profile.avatar_url}
                    alt={profile.name}
                  />
                  <div className="text-center">
                    <h3 className="text-2xl xl:text-3xl mb-3">{profile.name}</h3>
                    <div className="flex text-3xl xl:text-5xl gap-4">
                      <Link
                        target="_blank"
                        href={profile.html_url}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </Link>
                      <Link target="_blank" href={`https://${profile.blog}`}>
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                        />
                      </Link>
                      <Link
                        target="_blank"
                        href={linkedInLinks[index]}
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
