export default function MetricsRibbon() {
  const metrics = [
    {
      value: '5,000+',
      label: 'Active Users Powered',
      subtext: 'Across enterprise university portals & workflows',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      value: '35%',
      label: 'Manual Overhead Reduced',
      subtext: 'Via automated RDLC document & approval pipelines',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      value: '20%',
      label: 'Performance Gain',
      subtext: 'Through SQL Stored Procedure & API endpoint tuning',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      value: '10+',
      label: 'Production Modules',
      subtext: 'Admissions, grievances, attendance, and reporting',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  return (
    <div className="metrics-ribbon-container">
      <div className="metrics-grid">
        {metrics.map((item, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon-wrap">{item.icon}</div>
            <div className="metric-content">
              <span className="metric-value">{item.value}</span>
              <h4 className="metric-title">{item.label}</h4>
              <p className="metric-subtext">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
