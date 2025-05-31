import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold">
            {personalInfo.initials}
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          {personalInfo.description}
        </p>
        <div className="flex justify-center space-x-6">
          <a href={personalInfo.social.github} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={personalInfo.social.linkedin} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={personalInfo.social.email} className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;