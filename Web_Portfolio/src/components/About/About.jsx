import React from 'react';

const About = ({ scrollToSection }) => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Journey</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital experiences that make a difference. I love turning complex problems 
            into simple, beautiful solutions.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge with the developer community.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
        <div className="bg-gray-800 p-8 rounded-2xl">
          <h4 className="text-xl font-semibold mb-4">Quick Facts</h4>
          <ul className="space-y-3 text-gray-300">
            <li>🎓 Computer Science Graduate</li>
            <li>💼 5+ Years Experience</li>
            <li>🌍 Based in Your City</li>
            <li>☕ Coffee Enthusiast</li>
            <li>🎮 Gaming & Tech Lover</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
