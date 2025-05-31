import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} John Doe. Built with React & Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
