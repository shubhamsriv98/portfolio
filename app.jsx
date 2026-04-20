const { useState, useEffect } = React;

// Components
const Navbar = () => (
  <nav>
    <div className="container nav-content">
      <a href="#" className="nav-logo">Portfolio.</a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero container">
    <div className="hero-content animate-up">
      <span className="hero-subtitle">Welcome to my universe</span>
      <h1 className="hero-title">
        Hi, I'm <span>Your Name</span>.<br />
        I build things for the web.
      </h1>
      <p className="hero-desc">
        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          Check out my work
          <i className="ph ph-arrow-right"></i>
        </a>
        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

const About = () => {
  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'HTML/CSS', 'TypeScript', 'Java', 'SQL', 'Git'];

  return (
    <section id="about" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--accent-color)' }}>01.</span> About Me
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! My name is Shubham and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Here are a few technologies I've been working with recently:</p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
        <div className="about-image glass" style={{ aspectRatio: '1', borderRadius: 'var(--border-radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Placeholder for an actual profile image */}
          <i className="ph ph-user" style={{ fontSize: '5rem', color: 'var(--text-secondary)' }}></i>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Real-time Order Processing',
      description: 'A microservices-based system built with Java, Kafka, and React that handles real-time order processing and notifications for e-commerce platforms.',
      tech: ['Java', 'Kafka', 'React', 'Spring Boot'],
      github: '#',
      live: '#'
    },
    {
      title: 'Spotify Profile App',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
      tech: ['React', 'Styled Components', 'Spotify API'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'An AI tool that generates images from text descriptions. Built with Next.js, Tailwind CSS, and the OpenAI API.',
      tech: ['Next.js', 'OpenAI', 'Tailwind'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">
        <span style={{ color: 'var(--accent-color)' }}>02.</span> Some Things I've Built
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-header">
              <i className="ph ph-folder folder-icon"></i>
              <div className="project-links">
                <a href={project.github} target="_blank" aria-label="GitHub Link"><i className="ph ph-github-logo" style={{ fontSize: '1.5rem' }}></i></a>
                <a href={project.live} target="_blank" aria-label="External Link"><i className="ph ph-arrow-square-out" style={{ fontSize: '1.5rem' }}></i></a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => <span key={i}>{tech}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="container contact">
    <h2 className="section-title">
      <span style={{ color: 'var(--accent-color)' }}>03.</span> What's Next?
    </h2>
    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get In Touch</h1>
    <p className="contact-desc">
      Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
    </p>
    <a href="mailto:hello@example.com" className="btn btn-primary">Say Hello</a>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="#"><i className="ph ph-github-logo" style={{ fontSize: '1.5rem' }}></i></a>
        <a href="#"><i className="ph ph-linkedin-logo" style={{ fontSize: '1.5rem' }}></i></a>
        <a href="#"><i className="ph ph-twitter-logo" style={{ fontSize: '1.5rem' }}></i></a>
      </div>
      <p>Built with React & Vanilla CSS</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
