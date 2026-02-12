import React from 'react';

function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span>{profile.name}</span></h1>
          <h2>{profile.role}</h2>
          <p>{profile.bio}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="/resume.pdf" download className="btn btn-secondary">Download Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/1676037309091.jpeg" alt={profile.name} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
