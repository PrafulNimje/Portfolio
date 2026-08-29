export default function EngineeringPhilosophy() {
  const pillars = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Clean Architecture & DDD',
      description:
        'Architecting maintainable N-tier and microservices systems adhering strictly to SOLID principles, CQRS patterns, and clean separation between Domain, Application, and Infrastructure layers.',
      tags: ['SOLID Principles', 'Repository Pattern', 'CQRS', 'Dependency Injection', 'DTO Mapping'],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      title: 'High-Throughput SQL & Data Engineering',
      description:
        'Designing relational schemas, crafting optimized stored procedures, fine-tuning indexes, analyzing execution plans, and blending ADO.NET and EF Core for maximum query efficiency.',
      tags: ['Stored Procedures', 'Execution Plans', 'Index Tuning', 'EF Core', 'ADO.NET', 'Redis Caching'],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'Enterprise Security & RBAC',
      description:
        'Implementing bulletproof authentication & authorization flows using JWT, ASP.NET Core Identity, Claim-based policies, and multi-role permission systems to safeguard sensitive data.',
      tags: ['JWT Tokens', 'RBAC & Claims', 'ASP.NET Identity', 'Input Sanitation', 'Data Encryption'],
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      title: 'Cloud Deployment & DevOps Automation',
      description:
        'Containerizing applications with Docker, managing cloud infrastructure on Azure App Services and Azure SQL, and streamlining automated deployments with GitHub Actions and Azure DevOps CI/CD.',
      tags: ['Docker', 'Azure App Services', 'GitHub Actions', 'CI/CD Pipelines', 'Azure SQL'],
    },
  ];

  return (
    <div className="philosophy-section">
      <div className="philosophy-grid">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="philosophy-card">
            <div className="philosophy-icon-wrap">{pillar.icon}</div>
            <h3 className="philosophy-title">{pillar.title}</h3>
            <p className="philosophy-desc">{pillar.description}</p>
            <div className="philosophy-tags">
              {pillar.tags.map((t, i) => (
                <span key={i} className="philosophy-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
