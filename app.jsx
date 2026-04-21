const { useState, useEffect } = React;

// Navbar
const Navbar = () => (
  <nav>
    <div className="container nav-content">
      <a href="#" className="nav-logo">Shubham.</a>
      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#arsenal">Arsenal</a>
        <a href="#vision">Vision</a>
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

// About Section with Profile Image
const About = () => (
  <section id="about" className="container">
    <div className="section-title">00 / About</div>
    <div className="about-grid">
      <div className="about-image-wrapper">
        <img src="image.jpeg" alt="Shubham Srivastava" className="profile-image" />
      </div>
      <div className="about-text">
        <h2 style={{fontSize: '2rem', marginBottom: '1.5rem', letterSpacing: '-0.03em'}}>The Person Behind The Code</h2>
        <p style={{color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem'}}>
          I'm Shubham Srivastava — a Software Engineer with over 6 years of experience building scalable, resilient systems across fintech and telecom industries.
        </p>
        <p style={{color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem'}}>
          Currently at <strong style={{color: 'var(--text-primary)'}}>NatWest Group</strong>, previously at <strong style={{color: 'var(--text-primary)'}}>Amdocs</strong> and <strong style={{color: 'var(--text-primary)'}}>Cognizant</strong>.
        </p>
        <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem'}}>
          Beyond code, I'm deeply fascinated by geopolitics and history. I believe understanding the world's macro-mechanics makes you a better engineer and a better thinker.
        </p>
      </div>
    </div>
  </section>
);

// Resume Download Banner
const ResumeBanner = () => (
  <div className="container">
    <div className="resume-banner glass">
      <div>
        <h3>Looking for the full technical breakdown?</h3>
        <p style={{color: 'var(--text-secondary)'}}>Download my complete resume for a detailed look at my professional history.</p>
      </div>
      <a href="#" className="btn" onClick={(e) => { e.preventDefault(); alert('Please update this link with your actual PDF resume URL!'); }}>
        <i className="ph ph-download-simple" style={{fontSize: '1.2rem'}}></i>
        Download Resume
      </a>
    </div>
  </div>
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
      description: 'Built highly scalable telecommunications software and optimized existing systems for performance.'
    },
    {
      company: 'Cognizant',
      role: 'Software Engineer',
      period: 'Previous',
      description: 'Developed enterprise-grade applications and collaborated across global teams to deliver business-critical systems.'
    }
  ];

  return (
    <section id="experience" className="container" style={{paddingTop: '2rem'}}>
      <div className="section-title">01 / Professional Trajectory</div>
      <div className="timeline">
        {roles.map((role, index) => (
          <div key={index} className="timeline-item glass">
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

// Technical Arsenal
const TechnicalArsenal = () => {
  return (
    <section id="arsenal" className="container">
      <div className="section-title">02 / Technical Arsenal</div>
      <div className="grid-2">
        <div className="card glass">
          <div className="skills-category">
            <h4>Backend & Architecture</h4>
            <div className="tag-list">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Node.js</span>
              <span className="tag">Microservices</span>
            </div>
          </div>
          <div className="skills-category">
            <h4>Frontend</h4>
            <div className="tag-list">
              <span className="tag">React</span>
              <span className="tag">JavaScript (ES6+)</span>
              <span className="tag">HTML5 / CSS3</span>
              <span className="tag">TypeScript</span>
            </div>
          </div>
          <div className="skills-category">
            <h4>Data & Infrastructure</h4>
            <div className="tag-list">
              <span className="tag">Kafka</span>
              <span className="tag">SQL</span>
              <span className="tag">Azure</span>
              <span className="tag">Git</span>
            </div>
          </div>
        </div>
        
        <div className="card glass" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <i className="ph ph-cpu card-icon" style={{fontSize: '3rem'}}></i>
          <h3>Engineering Philosophy</h3>
          <p>I believe in building systems that are not just functionally correct, but resilient, scalable, and maintainable. 6 years in the industry has taught me that the best code is the code you don't have to rewrite.</p>
        </div>
      </div>
    </section>
  );
};

// Career Highlights & Certs
const Highlights = () => {
  return (
    <section id="highlights" className="container">
      <div className="section-title">03 / Highlights & Credentials</div>
      
      <div className="highlight-card glass" style={{marginBottom: '2rem'}}>
        <i className="ph ph-trophy highlight-icon"></i>
        <h3>Hackathon Winner</h3>
        <p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>Secured 1st place at the Amdocs internal hackathon by designing and implementing an innovative technical solution under severe time constraints.</p>
      </div>

      <div className="grid-2">
        <div className="card glass">
          <i className="ph ph-graduation-cap card-icon"></i>
          <h3>Academic Foundation</h3>
          <p>Bachelor of Engineering (B.E.)</p>
          <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>RGPV University</p>
        </div>
        <div className="card glass">
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
      <div className="section-title">04 / The Vision & Pursuits</div>
      <div className="grid-2">
        <div className="card glass">
          <i className="ph ph-globe-hemisphere-west card-icon"></i>
          <h3>Global Perspectives</h3>
          <p>Deeply invested in understanding the world's macro-mechanics. I maintain a vast knowledge base in history and geopolitics to better understand the trajectory of human progress.</p>
        </div>
        <div className="card glass">
          <i className="ph ph-strategy card-icon"></i>
          <h3>Strategic Pursuits</h3>
          <p>Avid reader and strategic thinker. When not architecting software, I actively engage in competitive sports including cricket, chess, carrom board, and badminton.</p>
        </div>
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
      <About />
      <ResumeBanner />
      <Experience />
      <TechnicalArsenal />
      <Highlights />
      <Vision />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
