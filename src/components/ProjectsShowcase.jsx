import { useState } from 'react';

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Clinical Task Manager',
      shortDesc: 'Full-stack clinical task management platform (Admin/Staff roles) with Angular 16+, NgRx, and containerized ASP.NET Core Web API.',
      features: [
        'Built a full-stack clinical task management app (Admin/Staff roles) using Angular 16+, NgRx (@ngrx/store, @ngrx/effects), reactive forms, PrimeNG components, and JWT-protected route guards.',
        'Developed ASP.NET Core Web API with JWT bearer auth, role-based authorization, EF Core code-first migrations, and RESTful endpoints, wrote NUnit unit and integration tests for all API layers.',
        'Containerized the API with Docker, deployed to Azure App Service; built GitHub Actions CI/CD pipeline automating build, test, Docker image build, and deployment on every push to main.',
      ],
      tags: [
        'Angular 16+',
        'NgRx',
        'ASP.NET Core Web API',
        'EF Core',
        'SQL Server',
        'JWT',
        'Docker',
        'Azure',
        'GitHub Actions',
      ],
      githubLink: 'https://github.com/PrafulNimje',
    },
    {
      title: 'Short Term Course Management Portal',
      shortDesc: 'Multi-role batch and student management portal (100+ users) with geotagged photo attendance and automated certification.',
      features: [
        'Built a multi-role batch and student management portal (100+ users) with course creation, student enrollment, and geotagged photo-based attendance tracking maintaining 500+ verified session records.',
        'Implemented end-of-session marks management for 200+ students and automated course completion certificate generation with eligibility validation logic to ensure only qualified students receive certification.',
        'Designed and optimized SQL Server stored procedures and parameterized queries for batch data retrieval, reducing data fetch time and improving portal responsiveness.',
        'Built responsive Bootstrap UI and admin panel for batch oversight; communicated technical solutions to non-technical administrators and facilitated end-user training for smooth platform adoption.',
      ],
      tags: ['C#', 'ASP.NET', 'SQL Server', 'ADO.NET', 'Bootstrap'],
      githubLink: 'https://github.com/PrafulNimje',
    },
    {
      title: 'RTMSSU Management Portal',
      shortDesc: 'Multi-module student management portal for 300+ end-users covering admissions, grievance routing, and automated RDLC reports.',
      features: [
        'Architected a multi-module student management portal for 300+ end-users covering admissions (200+ students), grievance routing (150+ requests), and certificate document generation (500+ documents) with role-based access control.',
        'Automated 5+ RDLC report pipelines for transfer and migration certificates, eliminating manual processing and improving documentation efficiency by 35%; optimized SQL stored procedures achieving 20% performance gain.',
        'Delivered full technical documentation, data mapping sheets, and user training materials; conducted UAT walkthroughs and resolved post-launch defects ensuring stable adoption across all user roles.',
      ],
      tags: ['C#', 'ASP.NET Core MVC', 'ADO.NET', 'SQL Server', 'RDLC', 'HTML', 'JavaScript'],
      githubLink: 'https://github.com/PrafulNimje',
    },
  ];

  return (
    <>
      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDesc}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <button
                  type="button"
                  className="project-link-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>View Project Details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <h3 className="modal-section-title">Key Contributions & Features</h3>
              <ul className="modal-features">
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-footer">
              <a
                href={selectedProject.githubLink}
                className="modal-cta primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}