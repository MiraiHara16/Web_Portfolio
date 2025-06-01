import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Firebase", "Material-UI", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["React", "API Integration", "Chart.js", "CSS3"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    github: "#",
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
