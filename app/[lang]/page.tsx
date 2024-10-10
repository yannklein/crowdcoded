import React from 'react';
import { getProjects } from '@/utils/getProjects';
import FeaturedProject from '../_components/FeaturedProject';
import LandingBanner from '@components/LandingBanner';
import HowItWorks from '@components/HowItWorks';
import ImpactfulBusinesses from '@components/ImpactfulBusiness';
import ContactForm from '@components/ContactForm';
import { getDictionary } from '@/app/[lang]/dictionaries';
import ReactMarkdown from 'react-markdown';

const Landing = async ({ params: { lang } }) => {
  const projects = await getProjects(lang);
  const dict = await getDictionary(lang);

  const formId = process.env.FORMSPREE;  

  return (
    <main>
      <LandingBanner dict={dict} />
      <section className="landing-section">
        <div className="grid md:grid-cols-3 gap-10">
          <ReactMarkdown className="font-heading flex justify-center text-center items-center text-3xl md:text-6xl">
            {dict.landing.featured.title}
          </ReactMarkdown>
          <div className="md:col-span-2">
            <FeaturedProject project={projects[0]} dict={dict} />
          </div>
        </div>
      </section>
      <HowItWorks dict={dict}/>
      <ImpactfulBusinesses dict={dict} lang={lang}/>
      <ContactForm formId={formId} dict={dict}/>
    </main>
  );
};

export default Landing;
