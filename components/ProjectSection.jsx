import React from "react";
import ProjectCard from "./ProjectCard";
import { workData } from "./Data";
import Link from "next/link";

const ProjectSection = () => {
  const ProjectSlice = workData.slice(0, 3);
  return (
    <section id="projects">
      <h1 className="text-center text-4xl font-bold text-white mb-5">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ProjectSlice.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            imgUrl={project.imgUrl}
            gitURL={project.gitURL}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>
      <Link href="/projects">
        <button className="text-white text-center cursor-pointer bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full mt-8">
          See More
        </button>
      </Link>
    </section>
  );
};

export default ProjectSection;
