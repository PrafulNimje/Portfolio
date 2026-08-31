import { useState, useEffect } from 'react';
import clinicalTaskManagerImg from '../assets/projects/clinical_task_manager.jpg';
import clinicalTaskPatientChartImg from '../assets/projects/clinical_task_patient_chart.jpg';
import stcAdminPanelImg from '../assets/projects/STC_AdminPanel.png';
import stcUserPanelImg from '../assets/projects/STC_UserPanel.png';
import stcAttendanceManagementImg from '../assets/projects/STC_AttendanceManagement.png';
import stcGeotaggingImg from '../assets/projects/STC_Geotagging.png';
import stcTestScoresImg from '../assets/projects/STC_TestScores.png';
import stcCertGenerationImg from '../assets/projects/STC_CertGeneration.png';
import stcBatchReportImg from '../assets/projects/STC_BatchReport.png';
import stcInvoiceImg from '../assets/projects/STC_Invoice.png';
import rtmssuManagementImg from '../assets/projects/rtmssu_management_portal.jpg';
import rtmssuGrievanceWorkflowImg from '../assets/projects/rtmssu_grievance_workflow.jpg';

function ProjectImageCarousel({ images, projectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsLightboxOpen(false);
  }, [projectTitle]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  if (!images || images.length === 0) return null;

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="project-carousel-container">
        <div
          className="carousel-slide-wrapper"
          onClick={() => setIsLightboxOpen(true)}
          title="Click to view full size screenshot"
        >
          <img
            src={images[currentIndex].src}
            alt={`${projectTitle} - ${images[currentIndex].label}`}
            className="carousel-main-image"
          />

          <div className="carousel-zoom-hint">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <span>Click to expand</span>
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="carousel-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous image"
                title="Previous Screenshot"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                className="carousel-nav-btn next"
                onClick={handleNext}
                aria-label="Next image"
                title="Next Screenshot"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className="carousel-badge">
                <span className="carousel-label">{images[currentIndex].label}</span>
                <span className="carousel-counter">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="carousel-indicators">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}: ${img.label}`}
                title={`${idx + 1}. ${img.label}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="image-lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="image-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close fullscreen view"
              title="Close (Esc)"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={images[currentIndex].src}
              alt={`${projectTitle} - ${images[currentIndex].label}`}
              className="lightbox-image"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  title="Previous (Left Arrow)"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={handleNext}
                  aria-label="Next image"
                  title="Next (Right Arrow)"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            <div className="lightbox-footer">
              <div className="lightbox-info">
                <span className="lightbox-title">{projectTitle}</span>
                <span className="lightbox-divider">•</span>
                <span className="lightbox-label">{images[currentIndex].label}</span>
              </div>
              <div className="lightbox-actions">
                <span className="lightbox-counter">
                  {currentIndex + 1} / {images.length}
                </span>
                <a
                  href={images[currentIndex].src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightbox-open-raw-btn"
                  title="Open original image in new tab"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Open Full Size</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Clinical Task Manager',
      coverImage: clinicalTaskManagerImg,
      images: [
        { src: clinicalTaskManagerImg, label: 'Task Management & Medical Flow Dashboard' },
        { src: clinicalTaskPatientChartImg, label: 'EMR Patient Charting & Health Trends' },
      ],
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
    },
    {
      title: 'Short Term Course Management Portal',
      coverImage: stcAdminPanelImg,
      images: [
        { src: stcAdminPanelImg, label: 'Admin Dashboard & Batch Oversight' },
        { src: stcUserPanelImg, label: 'User & Faculty Management Panel' },
        { src: stcAttendanceManagementImg, label: 'Attendance Management & Records' },
        { src: stcGeotaggingImg, label: 'Geotagged Photo Attendance Verification' },
        { src: stcTestScoresImg, label: 'Test Scores & Marks Evaluation' },
        { src: stcCertGenerationImg, label: 'Automated Certificate Generation & Issuance' },
        { src: stcBatchReportImg, label: 'Batch Performance & Completion Report' },
        { src: stcInvoiceImg, label: 'Billing & Invoice Generation' },
      ],
      shortDesc: 'Multi-role batch and student management portal (100+ users) with geotagged photo attendance and automated certification.',
      features: [
        'Built a multi-role batch and student management portal (100+ users) with course creation, student enrollment, and geotagged photo-based attendance tracking maintaining 500+ verified session records.',
        'Implemented end-of-session marks management for 200+ students and automated course completion certificate generation with eligibility validation logic to ensure only qualified students receive certification.',
        'Designed and optimized SQL Server stored procedures and parameterized queries for batch data retrieval, reducing data fetch time and improving portal responsiveness.',
        'Built responsive Bootstrap UI and admin panel for batch oversight; communicated technical solutions to non-technical administrators and facilitated end-user training for smooth platform adoption.',
      ],
      tags: ['C#', 'ASP.NET', 'SQL Server', 'ADO.NET', 'Bootstrap'],
    },
    {
      title: 'RTMSSU Management Portal',
      coverImage: rtmssuManagementImg,
      images: [
        { src: rtmssuManagementImg, label: 'Admissions & Grievance Overview Dashboard' },
        { src: rtmssuGrievanceWorkflowImg, label: 'Grievance Resolution & RDLC Document Verification' },
      ],
      shortDesc: 'Multi-module student management portal for 300+ end-users covering admissions, grievance routing, and automated RDLC reports.',
      features: [
        'Architected a multi-module student management portal for 300+ end-users covering admissions (200+ students), grievance routing (150+ requests), and certificate document generation (500+ documents) with role-based access control.',
        'Automated 5+ RDLC report pipelines for transfer and migration certificates, eliminating manual processing and improving documentation efficiency by 35%; optimized SQL stored procedures achieving 20% performance gain.',
        'Delivered full technical documentation, data mapping sheets, and user training materials; conducted UAT walkthroughs and resolved post-launch defects ensuring stable adoption across all user roles.',
      ],
      tags: ['C#', 'ASP.NET Core MVC', 'ADO.NET', 'SQL Server', 'RDLC', 'HTML', 'JavaScript'],
    },
  ];

  return (
    <>
      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div
              className="project-card-image-wrap"
              onClick={() => setSelectedProject(project)}
              title="Click to view project details & preview"
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="project-card-image"
                loading="lazy"
              />
              <div className="project-image-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span>{project.images.length} Views</span>
              </div>
            </div>
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
                  <span>View Project Details & Images</span>
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
              {/* Image Carousel */}
              <ProjectImageCarousel
                images={selectedProject.images}
                projectTitle={selectedProject.title}
              />

              <h3 className="modal-section-title" style={{ marginTop: '1.75rem' }}>
                Key Contributions & Features
              </h3>
              <ul className="modal-features">
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="modal-cta secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}