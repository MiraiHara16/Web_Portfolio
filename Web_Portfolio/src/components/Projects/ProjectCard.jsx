import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={project.github} className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
          <a href={project.demo} className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;