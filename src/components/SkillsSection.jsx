import { useState } from 'react';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    {
      title: 'Languages',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      skills: [
        'ASP.NET Core Web API',
        'ASP.NET Core MVC',
        'Angular 16+',
        'Entity Framework Core',
        'ADO.NET',
        'LINQ',
        'Bootstrap',
        'PrimeNG',
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      skills: ['Azure DevOps (CI/CD Pipelines)', 'GitHub Actions', 'Git'],
    },
    {
      title: 'Databases',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      skills: ['SQL Server', 'Azure SQL', 'Stored Procedures', 'Query Optimization'],
    },
    {
      title: 'Architecture',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      skills: [
        'Microservices',
        'REST API Design',
        'N-Tier Architecture',
        'OOP',
        'Design Patterns (Repository, Dependency Injection)',
        'SOA',
      ],
    },
    {
      title: 'Testing',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      skills: ['NUnit', 'Unit Testing', 'Integration Testing', 'Debugging', 'Performance Tuning'],
    },
    {
      title: 'Reporting & Tools',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: [
        'RDLC Reports',
        'Power BI',
        'SSMS',
        'Postman',
        'GitHub',
        'Microsoft Visual Studio',
        'JIRA',
        'Claude Code',
      ],
    },
    {
      title: 'Methodologies',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      skills: ['Agile Methodologies', 'SDLC', 'Code Reviews', 'Technical Documentation'],
    },
  ];

  const categoryFilterList = ['All', ...categories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((c) => c.title === selectedCategory);

  return (
    <div className="skills-section-wrapper">
      {/* Category Filters */}
      <div className="skills-controls-bar" style={{ justifyContent: 'center' }}>
        <div className="skills-category-filters">
          {categoryFilterList.map((cat) => (
            <button
              key={cat}
              className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-container">
        {displayedCategories.map((cat) => (
          <div key={cat.title} className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-cat-icon">{cat.icon}</div>
              <h4 className="skill-cat-title">{cat.title}</h4>
            </div>

            <div className="skill-tags-cloud">
              {cat.skills.map((skillName) => (
                <div key={skillName} className="skill-bubble">
                  <span className="bubble-name">{skillName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
