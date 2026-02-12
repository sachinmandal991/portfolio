import React from 'react';

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        {projects.map(project => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.featured && <div className="badge">Featured AI Project</div>}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p><strong>Problem:</strong> {project.problem}</p>
              <p><strong>Solution:</strong> {project.solution}</p>
              {project.features && (
                <div className="features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              )}
              <div className="tech-stack">
                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} className="btn">GitHub</a>
                <a href={project.demo} className="btn btn-primary">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
