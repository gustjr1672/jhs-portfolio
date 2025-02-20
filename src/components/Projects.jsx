import React from "react";
import "../styles/projects.css";

const projects = [
  { id: 1, title: "프로젝트1", tech: "#React" },
  { id: 2, title: "프로젝트2", tech: "#Node.js" },
  { id: 3, title: "프로젝트3", tech: "#Python" }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>프로젝트</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <p>{project.title}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
