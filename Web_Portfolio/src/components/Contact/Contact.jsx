import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-12">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>
        <div className="bg-gray-800 p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">hello@johndoe.com</p>
            </div>
            <div>
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                @johndoe
              </a>
            </div>
            <div>
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                johndoe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
