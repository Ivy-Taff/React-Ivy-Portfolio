import React from 'react';
import Navigation from './Navigation';

const Header = ({ setActiveSection, activeSection }) => {
  return (
    <header className="header">
      <h1>Ivy's Portfolio</h1>
      <Navigation setActiveSection={setActiveSection} activeSection={activeSection} />
    </header>
  );
};

export default Header;
