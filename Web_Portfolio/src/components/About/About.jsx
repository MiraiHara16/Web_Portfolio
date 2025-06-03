import React from 'react';
import './About.css';

const About = ({ scrollToSection }) => (
  <section id="about" className="about-section">
    <div className="container">
      <h2 className="heading">About Me</h2>
      <div className="grid">
        <div>
          <h3 className="subheading">My Journey</h3>
          <p className="text">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital experiences that make a difference. I love turning complex problems 
            into simple, beautiful solutions.
          </p>
          <p className="text">
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or sharing knowledge with the developer community.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="button"
          >
            Get In Touch
          </button>
        </div>
        <div className="quick-facts">
          <h4 className="quick-facts-title">Quick Facts</h4>
          <ul className="quick-facts-list">
            <li>🎓 Computer Science Graduate</li>
            <li>💼 1+ Years Experience</li>
            <li>🌍 Based in Your City</li>
            <li>🍵 Matcha Lover</li>
            <li>🎮 Gaming & Tech Lover</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
