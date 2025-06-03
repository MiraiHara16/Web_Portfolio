import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';


const projects = [
  {
    title: "See You Yesterday ",
    description: "Game develop Developed using MonoGame and C# language, it provides a ready-made infrastructure for game development.",
    tech: ["Mono Game"],
    image: "/assets/Project_pic/SeeyouyesterDay.png",
    github: "https://github.com/MiraiHara16/See_You_Yester_Day",
    demo: "#"
  },
  {
    title: "IOT Plant Emotion",
    description: "project that monitors environmental conditions around a plant and displays its “emotions” (happy, sad, angry) based on real-time sensor data.",
    tech: ["C++", "Python", "Arduino r4", "LineDev"],
    image: '/assets/Project_pic/Internet-of-Things-1.jpg',
    github: "https://github.com/MiraiHara16/Plant_Emtion",
    demo: "#"
  },
  {
    title: "MVC_Product",
    description: "CRUD web application built using ASP.NET MVC architecture. It allows users to manage product information (create, read, update, delete) and stores all data in a local JSON file",
    tech: ["C#","Razor",],
    image: "/assets/Project_pic/Taazaa-Blog-Images-1020-x-570-px-1-3.jpg",
    github: "https://github.com/MiraiHara16/MVC_Product#",
    demo: "#"
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-container">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github}>
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a href={project.demo}>
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
