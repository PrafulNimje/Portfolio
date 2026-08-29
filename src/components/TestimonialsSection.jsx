export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Prafull delivered our university admission and grievance tracking modules ahead of schedule with exceptional attention to data integrity. His SQL optimization cut report generation times substantially for 5,000+ students.',
      name: 'Dr. S. Kulkarni',
      role: 'Project Director & Academic Coordinator',
      org: 'Ratan Tata Maharashtra State Skills University (RTMSSU)',
      avatarInitial: 'SK',
    },
    {
      quote:
        'A sharp engineer with a deep mastery of the .NET ecosystem. His implementation of clean architecture, repository patterns, and automated RDLC document flows made our backend scalable and easy to maintain.',
      name: 'Anand Deshmukh',
      role: 'Senior Technical Architect',
      org: 'Enterprise Systems Consultant',
      avatarInitial: 'AD',
    },
    {
      quote:
        'Prafull brings a rare combination of strong backend C# fundamentals and modern frontend agility. He solved complex geotagged attendance verification and multi-role RBAC security effortlessly.',
      name: 'Rohan Sharma',
      role: 'Full-Stack Engineering Lead',
      org: 'Collaborative Projects Group',
      avatarInitial: 'RS',
    },
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-grid">
        {testimonials.map((item, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-quote-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{item.avatarInitial}</div>
              <div className="author-info">
                <h4 className="author-name">{item.name}</h4>
                <p className="author-role">{item.role}</p>
                <span className="author-org">{item.org}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
