const { useState, useEffect } = React;

// Navbar
const Navbar = () => (
  <nav>
    <div className="container nav-content">
      <a href="#" className="nav-logo">Shubham.</a>
      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#vision">Vision</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  </nav>
);

// Hero
const Hero = () => (
  <section className="hero container">
    <div className="hero-content animate-up">
      <span className="hero-subtitle">System Architecture & Engineering</span>
      <h1 className="hero-title">
        Shubham Srivastava.
      </h1>
      <p className="hero-desc">
        Software Engineer with 6+ years of experience architecting resilient systems. Passionate about geopolitics, history, and building technology that pushes boundaries.
      </p>
      <a href="#experience" className="btn">
        Explore Trajectory
      </a>
    </div>
  </section>
);

// Experience Timeline
const Experience = () => {
  const roles = [
    {
      company: 'NatWest Group',
      role: 'Software Engineer',
      period: 'Present',
      description: 'Currently architecting and developing robust financial technology solutions and infrastructure.'
    },
    {
      company: 'Amdocs',
      role: 'Software Developer',
      period: 'Previous',
      description: 'Built highly scalable telecommunications software. Winner of the internal Amdocs Hackathon.'
    },
    {
      company: 'Cognizant',
      role: 'Software Engineer',
      period: 'Previous',
      description: 'Developed enterprise-grade applications and collaborated across global teams to deliver business-critical systems.'
    }
  ];

  return (
    <section id="experience" className="container">
      <div className="section-title">01 / Professional Trajectory</div>
      <div className="timeline">
        {roles.map((role, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-meta">{role.period}</div>
            <div className="timeline-content">
              <h3>{role.role}</h3>
              <div className="company">{role.company}</div>
              <p>{role.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Education & Certifications
const Education = () => {
  return (
    <section id="credentials" className="container">
      <div className="section-title">02 / Credentials & Certifications</div>
      <div className="grid-2">
        <div className="card">
          <i className="ph ph-graduation-cap card-icon"></i>
          <h3>Academic Foundation</h3>
          <p>Bachelor of Engineering (B.E.)</p>
          <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>RGPV University</p>
        </div>
        <div className="card">
          <i className="ph ph-certificate card-icon"></i>
          <h3>Certifications</h3>
          <div className="tag-list">
            <span className="tag">Microsoft AZ-900</span>
            <span className="tag">NPTEL Java</span>
            <span className="tag">NPTEL C</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Vision / Interests
const Vision = () => {
  return (
    <section id="vision" className="container">
      <div className="section-title">03 / The Vision & Pursuits</div>
      <div className="grid-2">
        <div className="card">
          <i className="ph ph-globe-hemisphere-west card-icon"></i>
          <h3>Global Perspectives</h3>
          <p>Deeply invested in understanding the world's macro-mechanics. I maintain a vast knowledge base in history and geopolitics to better understand the trajectory of human progress.</p>
        </div>
        <div className="card">
          <i className="ph ph-strategy card-icon"></i>
          <h3>Strategic Pursuits</h3>
          <p>Avid reader and strategic thinker. When not architecting software, I actively engage in competitive sports including cricket, chess, carrom board, and badminton.</p>
        </div>
      </div>
    </section>
  );
};

// Projects
const Projects = () => {
  const projects = [
    {
      title: 'Real-time Order Processing',
      description: 'A microservices-based system built with Java, Kafka, and React that handles real-time order processing.',
      tech: ['Java', 'Kafka', 'React']
    },
    {
      title: 'AI Image Generator',
      description: 'An AI tool that generates images from text descriptions using advanced machine learning APIs.',
      tech: ['Next.js', 'OpenAI', 'Tailwind']
    }
  ];

  return (
    <section id="projects" className="container">
      <div className="section-title">04 / Selected Projects</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="tag-list">
              {project.tech.map((tech, i) => <span key={i} className="tag">{tech}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="container" id="contact" style={{ paddingBottom: '4rem' }}>
    <div className="section-title" style={{ justifyContent: 'center' }}>05 / Initiate Contact</div>
    <div className="social-links" style={{ marginTop: '3rem', gap: '3rem' }}>
      <a href="https://www.linkedin.com/in/shubhamsriv98" target="_blank" aria-label="LinkedIn" title="LinkedIn">
        <i className="ph ph-linkedin-logo" style={{ fontSize: '2.5rem' }}></i>
      </a>
      <a href="https://topmate.io/shubham_srivastava98/" target="_blank" aria-label="Topmate" title="Book a call on Topmate">
        <i className="ph ph-calendar-plus" style={{ fontSize: '2.5rem' }}></i>
      </a>
      <a href="mailto:shubhambyte98@gmail.com" aria-label="Email" title="Email Me">
        <i className="ph ph-envelope-simple" style={{ fontSize: '2.5rem' }}></i>
      </a>
    </div>
    <p style={{ marginTop: '3rem' }}>Architected by Shubham Srivastava.</p>
  </footer>
);

// App
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Vision />
      <Projects />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
