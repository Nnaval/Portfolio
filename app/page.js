import React from "react";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] scroll-smooth">
      {/* <NavBar/> */}
      <div className="container mt-20 mx-auto px-2 py-2">
        <HeroSection />
        <AboutSection/>
        <ProjectSection/>
      </div>
    </main>
  );
};

export default page;
