import React, { useState } from 'react';
import { Mail , Phone, Linkedin, Github, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown, FileText, Download, Eye } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "MindSight Mentors",
      period: "Mar 2025 – Present",
      location: "USA",
      projects: [
        {
          name: "Donation Portal",
          link: "https://www.donate.mindsightmentors.org",
          highlights: [
            "Led end-to-end development with React (Mantine), Spring Boot, TypeScript, and PostgreSQL",
            "Integrated PayPal gateway processing 2000+ transactions and $5,000+ in first month",
            "Automated donation tracking with REST APIs, reducing manual monitoring by 60%",
            "Implemented JWT and Spring Security for role-based access control"
          ]
        },
        {
          name: "Event Management Portal",
          link: "https://www.events.mindsightmentors.org/GuestEventBrowsing",
          highlights: [
            "Architected event portal using Java Spring Boot and PostgreSQL for 1000+ users",
            "Applied TDD using JUnit and Mockito, achieving 90%+ code coverage",
            "Optimized DB queries reducing response times by 25%"
          ]
        }
      ]
    },
    {
      title: "Software Development Engineer",
      company: "Invit Solutions",
      period: "Jul 2022 – Dec 2022",
      projects: [
        {
          name: "E-Commerce Website",
          highlights: [
            "Built and deployed e-commerce platform for 1500+ products, driving 40% sales increase",
            "Developed with Node.js and Express.js for 10k+ customers",
            "Reduced DB load by 35% using Redis caching",
            "Managed 1M+ records with MySQL"
          ]
        },
        {
          name: "Payment Gateway Integration",
          highlights: [
            "Integrated Stripe payment gateway for international transactions",
            "Increased customer base and generated 10% more sales"
          ]
        }
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Invit Solutions",
      period: "May 2021 – Jul 2021",
      highlights: [
        "Designed internal communication system for 40+ employees",
        "Built React/Tailwind CSS frontend with Node.js/Socket.IO backend",
        "Validated system with 1M+ simulated messages for fault tolerance"
      ]
    }
  ];

  const projects = [
  {
    name: "Code Cutter - Refactoring Tool",
    period: "Jan 2024 – Mar 2024",
    tech: "Python, AST Parsing, Static Analysis",
    github: "https://github.com/deepanshu2001/refactoring_tool",
    highlights: [
      "Automated detection of code smells using AST parsing and Jaccard similarity",
      "Reduced code review time by 20% by automatically identifying and refactoring 95% of duplicate functions and implementing GUI-based visualization with PySimpleGUI for code smell analysis",
      "Enhanced parser robustness by redesigning AST generation to handle nested scopes and recursive logic, informed by research on ANTLR, Esprima, and Python’s scoping rules."
    ]
  },
  {
    name:'AlgoAce- AI-Powered Mock Interview Platform',
    period:'Dec 2024 – Present',
    tech:'React.js, SpringBoot, POSTGRESQL, OpenAI API',
    github:'https://github.com/deepanshu2001/AI-Interview-APP',
    livelink:"https://curious-caramel-ffc38a.netlify.app/",
    highlight:[
      "Architected a full-stack AI interview platform using Spring Boot and React, integrating LLaMA 3.1, Claude 3.5, and OpenAI Whisper to automate DSA code reviews and behavioral interviews, achieving 99% structured JSON response reliability.",
      "Implemented an intelligent code evaluation engine with Spring AI, providing real-time feedback on correctness, time complexity, and space complexity, reducing manual review effort by ~95%.",
      "Built an automated soft-skills assessment pipeline using Whisper-based audio transcription and multi-criteria LLM scoring to evaluate communication, leadership, and conflict-resolution skills.",
      "Designed a secure backend system with JWT-based authentication, Spring Security custom filters, and PostgreSQL, supporting encrypted user sessions, multipart interview uploads, and persistent interview history."
    ]

  }
];
  const skills = {
    "Languages": ["Java", "JavaScript", "Python", "C++", "TypeScript", "Rust", "Go", "C#"],
    "Frontend": ["React.js", "Redux", "Tailwind CSS", "Mantine", "HTML", "CSS", "jQuery"],
    "Backend": ["Spring Boot", "Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Fast API"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Hibernate"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git", "Kafka"]
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', zIndex: 1000, boxShadow: '0 2px 20px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DS</h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['about', 'experience', 'projects', 'skills', 'resume', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: activeSection === section ? '600' : '500',
                  color: activeSection === section ? '#667eea' : '#333',
                  textTransform: 'capitalize',
                  transition: 'all 0.3s'
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', paddingTop: '5rem' }}>
        <div style={{ textAlign: 'center', color: 'white', maxWidth: '800px' }}>
          <div style={{ fontSize: '1rem', fontWeight: '500', letterSpacing: '0.2em', marginBottom: '1rem', opacity: 0.9 }}>SOFTWARE ENGINEER</div>
          <h1 style={{ fontSize: '4rem', fontWeight: '800', margin: '0.5rem 0', lineHeight: '1.2' }}>Deepanshu Sharma</h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, margin: '1.5rem 0', lineHeight: '1.6' }}>
            Full-stack developer specializing in scalable web applications with expertise in React, Spring Boot, and cloud technologies
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="mailto:d.deepanshusharma12@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontSize: '1rem', textDecoration: 'none', fontWeight: '600' }}>
              <Mail size={20} /> d.deepanshusharma12@gmail.com
            </a>
            <a href="tel:2063340213" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontSize: '1rem', textDecoration: 'none', fontWeight: '600' }}>
              <Phone size={20} /> (206) 334-0213   
            </a>
            <a href="https://www.linkedin.com/in/deepanshusharma12" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontSize: '1rem', textDecoration: 'none', fontWeight: '600' }}>
              <Linkedin size={20} /> https://www.linkedin.com/in/deepanshusharma12
            </a>
          </div>
          <div style={{ marginTop: '4rem' }}>
            <ChevronDown size={32} style={{ animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
        {/* Education */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <GraduationCap size={32} style={{ color: '#667eea' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>Education</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>Master's of Science, Computer Science</h3>
              <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '0.5rem' }}>Seattle University, USA</p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Jan 2023 – Dec 2024</p>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>Distributed Systems, Cloud Computing, Parallel Computing, AI, Machine Learning</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>B.Tech, Computer Science</h3>
              <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '0.5rem' }}>Panjab University, India</p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Aug 2018 – Jul 2022</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', background: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Briefcase size={32} style={{ color: '#667eea' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>Experience</h2>
          </div>
          {experiences.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #667eea' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{exp.title}</h3>
                  <p style={{ fontSize: '1.1rem', color: '#667eea', fontWeight: '600' }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: '600', color: '#555' }}>{exp.period}</p>
                  {exp.location && <p style={{ color: '#666' }}>{exp.location}</p>}
                </div>
              </div>
              {exp.projects ? exp.projects.map((project, pidx) => (
                <div key={pidx} style={{ marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>{project.name}</h4>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx} style={{ color: '#444', fontSize: '0.95rem' }}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )) : (
                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8', marginTop: '1rem' }}>
                  {exp.highlights.map((highlight, hidx) => (
                    <li key={hidx} style={{ color: '#444', fontSize: '0.95rem' }}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Code size={32} style={{ color: '#667eea' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>Projects</h2>
          </div>
          {projects.map((project, idx) => (
  <div
    key={idx}
    style={{
      background: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      marginBottom: '2rem'
    }}
  >
    {/* Project Header */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}
    >
      <div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          {project.name}
        </h3>
        <p style={{ color: '#667eea', fontWeight: '600', fontSize: '0.95rem' }}>
          {project.tech}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <p style={{ fontWeight: '600', color: '#555', margin: 0 }}>
          {project.period}
        </p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#667eea' }}
            title="View on GitHub"
          >
            <Github size={20} />
          </a>
        )}
        {project.livelink && (
          <a
            href={project.livelink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#667eea' }}
            title="View Live Project"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>

    {/* ✅ Project Highlights */}
    <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
      {project.highlights.map((highlight, hidx) => (
        <li key={hidx} style={{ color: '#444', fontSize: '0.95rem' }}>
          {highlight}
        </li>
      ))}
    </ul>
  </div>
))}

        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', background: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Award size={32} style={{ color: '#667eea' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>Technical Skills</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', color: '#667eea' }}>{category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((skill, idx) => (
                    <span key={idx} style={{ background: 'white', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500', color: '#333', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume */}
        <section id="resume" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <FileText size={32} style={{ color: '#667eea' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>Resume</h2>
          </div>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <FileText size={64} style={{ color: '#667eea', margin: '0 auto' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Deepanshu Sharma - Resume</h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>download my complete resume</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/Portfolio/Deepanshu_sharma_resume.pdf"
  download="Deepanshu_Sharma_Resume.pdf"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textDecoration: 'none'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background = '#667eea';
    e.currentTarget.style.color = 'white';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = 'white';
    e.currentTarget.style.color = '#667eea';
  }}
>
  <Download size={20} /> Download PDF
</a>
            </div>
           
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>I'm always open to new opportunities and collaborations</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:d.deepanshusharma12@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#667eea', fontSize: '1.1rem', textDecoration: 'none', fontWeight: '600' }}>
              <Mail size={24} /> d.deepanshusharma12@gmail.com
            </a>
            <a href="tel:2063340213" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#667eea', fontSize: '1.1rem', textDecoration: 'none', fontWeight: '600' }}>
              <Phone size={24} /> (206) 334-0213
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#1a1a1a', color: 'white', padding: '2rem', textAlign: 'center' }}>
          <p style={{ margin: 0 }}>© 2024 Deepanshu Sharma. Built with React & Mantine UI</p>
        </footer>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        * { box-sizing: border-box; }
        a { transition: all 0.3s; }
        a:hover { transform: scale(1.1); opacity: 0.8; }
        button:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
}