import React from 'react';
import ReactMarkdown from 'react-markdown';

import { getGHProfile } from '@/utils/getGHProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = async () => {
  const profilePromises = [
    getGHProfile('adrianaito'),
    getGHProfile('yannklein'),
  ];
  const profiles = await Promise.all(profilePromises);
  const linkedInLinks = [
    "https://www.linkedin.com/in/adriana-ito/",
    "https://www.linkedin.com/in/yann-klein/",
  ]

  const aboutText = `
We are a couple of web developer living and working in Tokyo. By day, we work for our respective companies, but in our spare time, we transform into freelance 
developers dedicated to **supporting small businesses that aim to make a positive impact on the world**.

　  
**Adriana** is originally from Brazil, she has been living and working in Japan since 2006. Her personal experiences have fueled her passion for social and environmental 
causes, leading her to collaborate with startups like [Matinno](https://www.matinno.co/en) or Siventh.

　  
**Yann** was born in France near the German border, he arrived in Japan in 2010. A passionate maker, he has been actively involved in developing startups 
in various domains such as VR, EdTech and SocialTech.

　  
The idea behind **Crowd Coded** emerged from our observation that businesses that care for people, that address environmental issues, 
and try to improve our quality of life are often not highly bankable. They can't always easily spare money for their web presence and related needs.

　  
On the web or elsewhere, we believe that **they need our help to help others better**.
  `
  return (
    <div>
      <h1 className="text-8xl text-center my-10">About us</h1>
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
            <ReactMarkdown className=" w-full prose-a:text-coralBlue mb-5">
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
