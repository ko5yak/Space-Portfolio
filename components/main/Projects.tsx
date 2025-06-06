import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A sleek, high-performance portfolio built with Next.js featuring smooth animations, dark mode, and optimized loading for showcasing professional work."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Dynamic UI cards with hover effects and micro-interactions, designed to enhance user engagement for SaaS product listings or portfolio showcases."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="An immersive cosmic experience with parallax scrolling, particle animations, and astronomy-themed content sections for educational or entertainment purposes."
        />
      </div>
    </div>
  );
};

export default Projects;
