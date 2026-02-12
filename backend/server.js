const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: ['http://localhost:3002', 'https://your-frontend-url.vercel.app'],
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Your Name',
    role: 'AI Developer & Full Stack Developer',
    bio: 'Building intelligent solutions with AI and modern web technologies.',
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    whatsapp: 'https://wa.me/1234567890'
  });
});

app.get('/api/skills', (req, res) => {
  res.json([
    { category: 'Programming', skills: ['HTML', 'CSS', 'JavaScript', 'Python'] },
    { category: 'Frameworks', skills: ['React', 'Node.js', 'Express', 'MongoDB'] },
    { category: 'AI & ML', skills: ['NLP', 'Speech Recognition', 'TTS'] },
    { category: 'Tools', skills: ['GitHub', 'Vercel', 'Figma'] }
  ]);
});

app.get('/api/projects', (req, res) => {
  res.json([
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
    },
    {
      id: 4,
      title: 'Web Dashboard',
      problem: 'Complex data visualization needs.',
      solution: 'Responsive dashboard with real-time data visualization.',
      tech: ['React', 'Node.js', 'CSS', 'APIs'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'API-based Application',
      problem: 'Need for third-party service integration.',
      solution: 'Full-stack app with RESTful API integration.',
      tech: ['Node.js', 'React', 'REST API', 'JavaScript'],
      github: '#',
      demo: '#'
    }
  ]);
});

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    const mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${req.body.subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${req.body.name}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Subject:</strong> ${req.body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${req.body.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
