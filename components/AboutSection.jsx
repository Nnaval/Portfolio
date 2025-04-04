import React from "react";
import Image from "next/image";
import { heroAboutTags } from "./Data";


const AboutSection = () => {
  return (
    <section className="text-white mt-10" id="about">
      <div className="md:grid md:grid-cols-2 md:gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/about-image.jpg"
          alt="profile"
          width={500}
          height={500}
          className=""
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base  text-[#ADB7BE]  lg:text-xl lg:leading-9">
            Results-driven Frontend Web Developer with 2+ years of experience
            building and deploying scalable web applications using Next.js,
            React.js, Node.js, and Django. Proficient in front-end development
            with Next.js, React.js, and JavaScript, and databases like
            PostgreSQL. Experienced in API integration. Passionate about
            problem-solving and delivering high-quality products. I'm a strong
            collaborator, and I'm always eager to learn new technologies and
            take on new challenges.
          </p>
          <div className="pt-2">
                <ul className='flex items-center gap-2 flex-wrap'>
                    {heroAboutTags.map((tag, index) => <li className='bg-slate-900 text-white rounded-full px-2 text-sm dark:border border-slate-500 dark:hover:bg-slate-700 cursor-pointer' key={index}>{tag.text}</li>)}
                </ul>
            </div>
            <hr className="my-8 border-slate-300 dark:border-slate-700" />
       
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
