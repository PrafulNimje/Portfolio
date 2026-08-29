import { useState, useEffect } from 'react';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import ScrollIndicators from './components/ScrollIndicators';
import SocialLinks from './components/SocialLinks';
import ParticleBackground from './components/ParticleBackground';
import SkillsSection from './components/SkillsSection';
import ProjectsShowcase from './components/ProjectsShowcase';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import ContactForm from './components/ContactForm';

// Section Heading helper
const SectionHeading = ({ text, className = '' }) => (
  <h2 className={`section-heading ${className}`}>{text}</h2>
);

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'skills',
        'experience',
        'projects',
        'education',
        'certifications',
        'contact',
      ];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiencePoints = [
    'Gathered business requirements from university stakeholders and configured backend modules in C#, ASP.NET Core MVC, ADO.NET, and SQL Server to meet specific operational needs across admissions, grievances, and reporting workflows for 5,000+ student records.',
    'Automated 5+ RDLC report pipelines (certificates, receipts, migration documents), reducing manual reporting workload by 35% for 500+ students.',
    'Developed multi-role admission approval subsystem (200+ students) and grievance workflow (150+ requests); optimized SQL stored procedures improving query performance by 20%.',
    'Produced technical documentation, data mapping sheets, and user training guides, conducted UAT walkthroughs and managed delivery of modules across all phases of the implementation cycle for 300+ end users.',
    'Conducting code reviews to enforce coding standards, design patterns, and SOLID principles, performing SQL query performance tuning and API response optimization in Agile/Scrum sprints.',
  ];

  return (
    <div className="app">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#top" className="nav-logo">
            <span>Prafull Nimje</span>
            <span className="dot">.</span>
          </a>

          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={activeSection === 'education' ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className={activeSection === 'certifications' ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <button
                type="button"
                className="nav-resume-btn"
                onClick={() => {
                  setMobileOpen(false);
                  setResumeModalOpen(true);
                }}
              >
                Resume
              </button>
            </li>
          </ul>

          <div className="nav-controls">
            <ThemeToggle />
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <ScrollIndicators />

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-content">
          <div className="hero-badge-tag">
            <span>⚡ .NET Developer & Full Stack Software Engineer</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm Prafull Nimje<span className="dot">.</span>
          </h1>

          <p className="hero-subtitle">
            Results-driven <strong>.NET Developer</strong> with 1 year of experience in <strong>C#</strong>, <strong>ASP.NET Core</strong>, and <strong>SQL Server</strong>, delivering production systems for <strong>5,000+ users</strong>. Skilled in requirements gathering, solution configuration, debugging, and reverse engineering. Experienced in peer code reviews, technical documentation, and communicating technical concepts to non-technical stakeholders. Hands-on with <strong>Azure</strong>, <strong>Docker</strong>, <strong>Angular 16+</strong>, <strong>NgRx</strong>, <strong>EF Core</strong>, and <strong>CI/CD</strong>.
          </p>

          <div className="hero-pills-row">
            <span className="hero-pill">C# & ASP.NET Core</span>
            <span className="hero-pill">SQL Server & Stored Procedures</span>
            <span className="hero-pill">Angular 16+ & NgRx</span>
            <span className="hero-pill">Azure & Docker</span>
            <span className="hero-pill">CI/CD Pipelines</span>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="cta-btn primary">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <button
              type="button"
              className="cta-btn outline"
              onClick={() => setResumeModalOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>View Resume</span>
            </button>
            <a href="#contact" className="cta-btn secondary">
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero-socials-wrapper">
            <SocialLinks centered />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-title">
          <SectionHeading text="Professional Summary" />
          <p>Results-driven engineering with sharp focus on reliable enterprise delivery</p>
        </div>
        <div className="about-card">
          <div className="about-card-inner">
            <p>
              Results-driven <strong>.NET Developer</strong> with 1 year of experience in <strong>C#</strong>, <strong>ASP.NET Core</strong>, and <strong>SQL Server</strong>, delivering production systems for <strong>5,000+ users</strong>. Skilled in requirements gathering, solution configuration, debugging, and reverse engineering.
            </p>
            <p>
              Experienced in peer code reviews, technical documentation, and communicating technical concepts to non-technical stakeholders. Hands-on with <strong>Azure</strong>, <strong>Docker</strong>, <strong>Angular 16+</strong>, <strong>NgRx</strong>, <strong>EF Core</strong>, and <strong>CI/CD</strong> pipelines.
            </p>
          </div>
          <div className="stats">
            {[
              { num: '1 Year', label: 'Experience' },
              { num: '5,000+', label: 'Users Served' },
              { num: '35%', label: 'Workload Reduced' },
              { num: '20%', label: 'Query Speedup' },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="section-title">
          <SectionHeading text="Technical Skills" />
          <p>Languages, Frameworks, Cloud, Databases, Architecture, Testing, Reporting & Methodologies</p>
        </div>
        <SkillsSection />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="section-title">
          <SectionHeading text="Work Experience" />
          <p>Career journey and production deliverables</p>
        </div>
        <div className="timeline">
          <div className="timeline-item" style={{ width: '100%', paddingLeft: '2rem', paddingRight: '0', marginLeft: '0' }}>
            <div className="timeline-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="timeline-head">
                <div>
                  <span className="timeline-year">June 2025 – May 2026</span>
                  <h3 className="timeline-title" style={{ marginTop: '0.25rem' }}>.NET Developer</h3>
                  <p className="timeline-company" style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: '600', marginBottom: '0.25rem' }}>
                    Ratan Tata Maharashtra State Skills University (RTMSSU)
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '1rem' }}>Pune, India</p>
                </div>
                <span className="timeline-tag">Full-Time</span>
              </div>

              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--accent)', fontSize: '0.94rem', lineHeight: '1.65' }}>
                {experiencePoints.map((pt, idx) => (
                  <li key={idx}>
                    <span style={{ color: 'var(--accent)' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects">
        <div className="section-title">
          <SectionHeading text="Projects" />
          <p>Featured full-stack platforms and enterprise applications</p>
        </div>
        <ProjectsShowcase />
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="section-title">
          <SectionHeading text="Education" />
          <p>Academic qualifications and specialized technical coursework</p>
        </div>
        <EducationSection />
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <div className="section-title">
          <SectionHeading text="Certifications" />
          <p>Industry accreditations and specialized credentials</p>
        </div>
        <CertificationsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-title">
          <SectionHeading text="Contact" />
          <p>Get in touch for software development opportunities</p>
        </div>
        <ContactForm />
      </section>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div className="project-modal-overlay" onClick={() => setResumeModalOpen(false)}>
          <div className="project-modal resume-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setResumeModalOpen(false)}
              aria-label="Close resume modal"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-badge-group">
                <span className="project-badge-pill">Curriculum Vitae</span>
                <span className="project-category-tag">.NET Developer</span>
              </div>
              <h2 className="modal-title">Prafull Nimje</h2>
              <p className="modal-desc">
                Pune, IN | prafulnimje1999@gmail.com | +919021070022 | linkedin.com/in/prafull-nimje | github.com/PrafulNimje
              </p>
            </div>

            <div className="modal-body resume-preview-body">
              <div className="resume-section-preview">
                <h4>Professional Summary</h4>
                <p>
                  Results-driven .NET Developer with 1 year of experience in C#, ASP.NET Core, and SQL Server, delivering production systems for 5,000+ users. Skilled in requirements gathering, solution configuration, debugging, and reverse engineering. Experienced in peer code reviews, technical documentation, and communicating technical concepts to non-technical stakeholders. Hands-on with Azure, Docker, Angular 16+, NgRx, EF Core, and CI/CD.
                </p>
              </div>

              <div className="resume-section-preview">
                <h4>Work Experience — .NET Developer (RTMSSU, Pune)</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>June 2025 – May 2026</p>
                <ul>
                  {experiencePoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="resume-section-preview">
                <h4>Education</h4>
                <p>
                  <strong>Post Graduate Diploma – Big Data Analytics</strong> (Mar 2023 – Aug 2023 | 68.75%)<br />
                  Centre for Development of Advanced Computing (CDAC), Noida
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  <strong>B.E. – Computer Science & Engineering</strong> (Aug 2017 – Aug 2021 | 70.77%)<br />
                  Priyadarshini J.L College of Engineering (PJLCE), Nagpur
                </p>
              </div>

              <div className="resume-section-preview">
                <h4>Certifications</h4>
                <p>
                  • Azure AI Fundamentals AI-900 (Microsoft)<br />
                  • Full Stack .NET — Seed Infotech<br />
                  • HTML5 with JavaScript & CSS3 (Microsoft)
                </p>
              </div>
            </div>

            <div className="modal-footer">
              <a
                href="mailto:prafulnimje1999@gmail.com?subject=Resume%20Inquiry%20-%20Prafull%20Nimje"
                className="modal-cta primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Email Prafull</span>
              </a>
              <button
                type="button"
                className="modal-cta secondary"
                onClick={() => setResumeModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div className="nav-logo" style={{ justifyContent: 'center', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
            <span>Prafull Nimje</span>
            <span className="dot">.</span>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--accent)', marginBottom: '1.25rem' }}>
            .NET Developer — Pune, IN | prafulnimje1999@gmail.com | +919021070022
          </p>

          <div style={{ margin: '1.25rem 0 1.75rem' }}>
            <SocialLinks centered />
          </div>

          <p style={{ fontSize: '0.82rem', color: 'var(--accent)' }}>
            © {new Date().getFullYear()} Prafull Nimje — .NET Developer Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
