import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="navbar-logo">
            Portfolio
          </div>

          {/* Desktop Nav */}
          <div className="navbar-menu">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={activeSection === item ? 'active' : ''}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
