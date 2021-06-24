import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
