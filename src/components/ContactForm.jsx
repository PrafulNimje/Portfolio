import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  // Web3Forms Access Key (Can be set via .env as VITE_WEB3FORMS_ACCESS_KEY or updated directly)
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    return errors;
  };

  const errors = validate();

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    setErrorMessage('');

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            subject: `[Portfolio Inquiry] ${formData.subject}`,
            message: formData.message,
            from_name: `${formData.name} (via Portfolio)`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTouched({});
        } else {
          // If access key is placeholder or invalid, notify clearly
          if (ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
            setErrorMessage('Please add your free Web3Forms Access Key in ContactForm.jsx or .env to receive emails directly into your inbox.');
          } else {
            setErrorMessage(result.message || 'Failed to send message. Please try again.');
          }
        }
      } catch {
        setErrorMessage('Network error occurred. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="contact-section-wrapper">
      <div className="contact-grid-layout">
        {/* Left: Direct Contact Information */}
        <div className="contact-info-panel">
          <h3 className="contact-info-title">Let's Connect</h3>
          <p className="contact-info-subtitle">
            Send a message directly to my inbox or reach out via email or phone.
          </p>

          <div className="contact-cards-list">
            <div className="contact-info-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Email</span>
                <a href="mailto:prafulnimje1999@gmail.com" className="contact-item-value">
                  prafulnimje1999@gmail.com
                </a>
              </div>
              <button
                type="button"
                className="copy-field-btn"
                onClick={() => copyToClipboard('prafulnimje1999@gmail.com', 'email')}
                title="Copy Email"
              >
                {copiedField === 'email' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="contact-info-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Phone</span>
                <a href="tel:+919021070022" className="contact-item-value">
                  +91 9021070022
                </a>
              </div>
              <button
                type="button"
                className="copy-field-btn"
                onClick={() => copyToClipboard('+919021070022', 'phone')}
                title="Copy Phone"
              >
                {copiedField === 'phone' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="contact-info-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-value">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-container">
          {submitted ? (
            <div className="form-success-state">
              <div className="success-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Message Sent Successfully!</h3>
              <p style={{ maxWidth: '420px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
                Your message has been sent directly to <strong>prafulnimje1999@gmail.com</strong>. I'll get back to you shortly!
              </p>

              <button
                type="button"
                className="cta-btn primary"
                onClick={() => setSubmitted(false)}
                style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {errorMessage && (
                <div style={{ padding: '0.85rem 1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '10px', color: '#ef4444', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">
                  Your Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={touched.name && errors.name ? 'input-error' : ''}
                />
                {touched.name && errors.name && <span className="field-error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Your Email <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={touched.email && errors.email ? 'input-error' : ''}
                />
                {touched.email && errors.email && <span className="field-error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry / Job opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={() => handleBlur('subject')}
                  className={touched.subject && errors.subject ? 'input-error' : ''}
                />
                {touched.subject && errors.subject && <span className="field-error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <div className="label-with-counter">
                  <label htmlFor="message">
                    Message <span className="req">*</span>
                  </label>
                  <span className="char-count">{formData.message.length} chars</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Hello Prafull, I'd like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  className={touched.message && errors.message ? 'input-error' : ''}
                ></textarea>
                {touched.message && errors.message && <span className="field-error-msg">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending Message Directly...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
