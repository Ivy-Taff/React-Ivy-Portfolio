import React from 'react';

const Navigation = ({ setActiveSection, activeSection }) => {
  return (
    <nav className="navigation">
      {['about', 'portfolio', 'contact', 'resume'].map((section) => (
        <a
          href="#"
          key={section}
          onClick={() => setActiveSection(section)}
          className={activeSection === section ? 'active' : ''}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
