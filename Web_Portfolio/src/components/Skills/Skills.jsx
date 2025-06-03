import React from 'react';
import { Code, Database, Palette, Globe } from 'lucide-react';
import './Skills.css';

const skills = [
  { name: "Frontend", icon: <Code className="w-8 h-8" />, items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: <Database className="w-8 h-8" />, items: ["Node.js", "Python", "PostgreSQL", "C#"] },
  { name: "Design", icon: <Palette className="w-8 h-8" />, items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] },
  { name: "Tools", icon: <Globe className="w-8 h-8" />, items: ["Git", "Docker", "Microsoft azure", "Vite" ,".NET"] }
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-container">
      <h2 className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.name}</h3>
            <ul className="skill-list">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
