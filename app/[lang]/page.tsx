import React from 'react';
import { getProjects } from '@/utils/getProjects';
import FeaturedProject from '../_components/FeaturedProject';
import LandingBanner from '@components/LandingBanner';
import HowItWorks from '@components/HowItWorks';
import ImpactfulBusinesses from '@components/ImpactfulBusiness';
import ContactForm from '@components/ContactForm';
import { getDictionary } from './dictionaries';

const Landing = async ({ params: { lang } }) => {
  const projects = await getProjects(lang);
  const dict = await getDictionary(lang);

  const formId = process.env.FORMSPREE;  

  return (
      <div className="page">
        <main>
          <LandingBanner dict={dict} />
          <div className="page py-20 px-3 md:px-8">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="font-heading flex justify-center text-center items-center text-5xl md:text-6xl">
                {dict.landing.featured.title}
              </div>
              <div className="md:col-span-2">
                <FeaturedProject project={projects[0]} dict={dict} />
              </div>
            </div>
          </div>
          <HowItWorks dict={dict}/>
          <ImpactfulBusinesses dict={dict}/>
          <ContactForm formId={formId} dict={dict}/>
        </main>
      </div>
  );
};

export default Landing;
