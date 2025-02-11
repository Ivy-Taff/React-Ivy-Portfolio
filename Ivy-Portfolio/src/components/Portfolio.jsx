import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>My Sample Projects</h2>
      <div className="projects">
        {['app1', 'app2', 'app3', 'app4', 'app5', 'app6'].map((app) => (
          <div className="project" key={app}>
            <img src={`../assets/images/${app}.jpg`} alt={app} />
            <h3>{app}</h3>
            <a href={`https://github.com/${app}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`https://deployed-${app}.com`} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
