export default function EducationSection() {
  const education = [
    {
      degree: 'Post Graduate Diploma – Big Data Analytics',
      institution: 'Centre for Development of Advanced Computing (CDAC), Noida',
      period: 'Mar 2023 – Aug 2023',
      grade: '68.75%',
      details:
        'Intensive post-graduate program covering distributed systems, big data architectures, data engineering, and enterprise database systems.',
      coursework: [
        'Big Data Architectures',
        'Distributed Computing',
        'Database Management & SQL',
        'Data Analytics & Modeling',
        'Cloud & Container Technologies',
      ],
    },
    {
      degree: 'B.E. – Computer Science & Engineering',
      institution: 'Priyadarshini J.L College of Engineering (PJLCE), Nagpur',
      period: 'Aug 2017 – Aug 2021',
      grade: '70.77%',
      details:
        'Four-year comprehensive engineering program with strong foundations in object-oriented programming, data structures, algorithms, and software engineering methodologies.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (RDBMS)',
        'Software Engineering & SDLC',
        'Web Technologies',
        'Operating Systems & Networks',
      ],
    },
  ];

  return (
    <div className="education-container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="education-header">
              <div className="education-main-info">
                <span className="education-badge">Score: {edu.grade}</span>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
              </div>
              <div className="education-period-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{edu.period}</span>
              </div>
            </div>

            <p className="education-details">{edu.details}</p>

            <div className="education-sections-grid">
              <div className="education-sub-block">
                <h4 className="education-sub-title">Core Areas & Coursework</h4>
                <div className="education-tags">
                  {edu.coursework.map((course, i) => (
                    <span key={i} className="course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
