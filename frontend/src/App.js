import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sachin Kumar Mandal',
    role: 'AI Developer & Full Stack Developer',
    bio: 'Building intelligent solutions with AI and modern web technologies.',
    email: 'sachinmandal991@gmail.com',
    linkedin: 'https://linkedin.com/in/sachinkrmandal',
    github: 'https://github.com/sachinmandal991',
    whatsapp: 'https://wa.me/9955579689'
  });
  const [skills, setSkills] = useState([
    { category: 'Programming', skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java'] },
    { category: 'Frameworks', skills: ['React', 'Node.js', 'Express', 'MongoDB'] },
    { category: 'AI & ML', skills: ['NLP', 'Speech Recognition', 'TTS'] },
    { category: 'Tools', skills: ['GitHub', 'Vercel', 'Figma', 'Postman'] }
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Multilingual AI Voice Assistant',
      problem: 'Need for accessible voice-based navigation in multiple languages.',
      solution: 'Built intelligent voice assistant with speech recognition and multi-language support.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'NLP', 'TTS'],
      github: '#',
      demo: '#',
      featured: true,
      features: ['Speech recognition', 'Multi-language (English, Tamil, Hindi)', 'Navigation guidance', 'Voice announcements']
    },
    {
      id: 2,
      title: 'Campus Navigation System',
      problem: 'Students struggle to navigate large campus areas.',
      solution: 'Interactive navigation with real-time pathfinding.',
      tech: ['React', 'Node.js', 'JavaScript', 'APIs'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'AI Chatbot',
      problem: 'Need for automated customer support.',
      solution: 'Intelligent chatbot using NLP for natural conversations.',
      tech: ['Python', 'NLP', 'JavaScript', 'React'],
      github: '#',
      demo: '#'
    }
  ]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <div className="logo">Portfolio</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">{darkMode ? '☀️' : '🌙'}</button></li>
          </ul>
        </div>
      </nav>
      <Hero profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} />
      <footer>
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
