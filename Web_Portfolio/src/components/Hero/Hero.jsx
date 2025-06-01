import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-container">
      <div className="mb-8">
        <div className="hero-avatar">
          NP
        </div>
      </div>
      <h1 className="hero-name">Nopnarong Puangkham</h1>
      <p className="hero-title">
        Full Stack Developer & Data Analyst
      </p>
      <p className="hero-description">
        Hi, I'm Noppanarong — a Computer Science student at KMITL who finds joy in building things that work (and work well).
        Whether it’s creating a smooth user experience or debugging backend logic at 2 AM, I love the challenge. I'm curious, optimistic, 
        and always up for learning something new — especially if it makes me a better developer (or just saves me five lines of code).
      </p>
      <div className="hero-icons">
        <a href="#" className="hero-icon-link">
          <Github className="w-6 h-6 " />
        </a>
        <a href="#" className="hero-icon-link">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="hero-icon-link">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
