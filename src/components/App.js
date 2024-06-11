import React from 'react';

const Project = ({ name, description }) => {
  return (
    <div className="project">
      <h1 data-ns-test="project-name">{name}</h1>
      <h6 data-ns-test="project-description">{description}</h6>
    </div>
  );
};

function App() {
  const projects = [
    { name: 'Project 1', description: 'This is my first dream project.' },
    { name: 'Project 2', description: 'This is my second dream project.' },
    // Add more projects here
  ];

  return (
    <div className="ns-wrapper" id='main'>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}

export default App;
