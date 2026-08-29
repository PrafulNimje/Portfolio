export default function CertificationsSection() {
  const certs = [
    {
      title: 'Azure AI Fundamentals AI-900',
      issuer: 'Microsoft',
      badgeColor: '#0078d4',
      skills: ['Azure Cloud', 'AI Workloads', 'Machine Learning Principles', 'Computer Vision & NLP'],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: 'Full Stack .NET',
      issuer: 'Seed Infotech',
      badgeColor: '#512bd4',
      skills: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Web API', 'Frontend Integration'],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'HTML5 with JavaScript & CSS3',
      issuer: 'Microsoft',
      badgeColor: '#e03a3e',
      skills: ['HTML5 Semantics', 'Modern CSS3', 'JavaScript ES6+', 'DOM Manipulation', 'Responsive Web Apps'],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-header">
              <div className="cert-icon-wrapper" style={{ borderColor: cert.badgeColor }}>
                {cert.icon}
              </div>
              <div className="cert-badge-info">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-year">Verified</span>
              </div>
            </div>

            <h3 className="cert-title">{cert.title}</h3>

            <div className="cert-skills-wrap">
              {cert.skills.map((skill, sIdx) => (
                <span key={sIdx} className="cert-skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
