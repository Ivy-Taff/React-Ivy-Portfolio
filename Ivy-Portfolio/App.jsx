import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="app">
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <main>
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
