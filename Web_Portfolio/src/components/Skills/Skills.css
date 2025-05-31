import React from 'react';
import { Code, Database, Palette, Globe } from 'lucide-react';

const skills = [
  { name: "Frontend", icon: <Code className="w-8 h-8" />, items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: <Database className="w-8 h-8" />, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
  { name: "Design", icon: <Palette className="w-8 h-8" />, items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"] },
  { name: "Tools", icon: <Globe className="w-8 h-8" />, items: ["Git", "Docker", "AWS", "Vite"] }
];

const Skills = () => (
  <section id="skills" className="py-20 px-4 bg-gray-800/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
            <div className="text-blue-400 mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
            <ul className="space-y-2 text-gray-300">
              {skill.items.map((item, idx) => (
                <li key={idx} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
