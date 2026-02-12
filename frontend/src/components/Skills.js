import React from 'react';

function Skills({ skills }) {
  if (!skills || !Array.isArray(skills)) return null;
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <div key={i} className="skill-category">
              <h3>{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span key={j}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
