import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path-to-resume.pdf" download>Download my resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>Git, GitHub</li>
      </ul>
    </section>
  );
};

export default Resume;
