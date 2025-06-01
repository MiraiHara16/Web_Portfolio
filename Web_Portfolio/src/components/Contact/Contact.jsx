import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <h2 className="contact-title">Let's Work Together</h2>
      <p className="contact-description">
        Have a project in mind? I'd love to hear about it. Let's create something amazing together.
      </p>
      <div className="contact-card">
        <div className="contact-grid">
          <div>
            <Mail className="contact-icon" />
            <h3 className="contact-subtitle">Email</h3>
            <p className="contact-text">john.doe@example.com</p>
          </div>
          <div>
            <Github className="contact-icon" />
            <h3 className="contact-subtitle">GitHub</h3>
            <a
              href="https://github.com/yourusername"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername
            </a>
          </div>
          <div>
            <Linkedin className="contact-icon" />
            <h3 className="contact-subtitle">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
