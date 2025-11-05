import React from 'react';
import './HelpCenter.css';

function HelpCenter() {
  const helpTopics = [
    {
      icon: "🚀",
      title: "Getting Started",
      description: "New to our apps? Start here!",
      link: "/faq#general"
    },
    {
      icon: "📱",
      title: "QR Scan Pro Help",
      description: "Learn how to scan, create, and organize QR codes",
      link: "/faq#qr-scan-pro"
    },
    {
      icon: "🪙",
      title: "Lucky Coin Flip Help",
      description: "Everything about flipping coins with style",
      link: "/faq#lucky-coin-flip"
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description: "Your data, your control",
      link: "/privacy"
    },
    {
      icon: "🛠️",
      title: "Troubleshooting",
      description: "Fix common issues quickly",
      link: "/faq#troubleshooting"
    },
    {
      icon: "💬",
      title: "Contact Support",
      description: "We're here to help!",
      link: "/#contact"
    }
  ];

  return (
    <div className="help-center-page">
      <div className="help-container">
        <div className="help-header">
          <h1>Help Center 🆘</h1>
          <p className="help-subtitle">We're here to help you succeed!</p>
          <p className="help-description">
            Find answers, learn tips and tricks, or reach out to our friendly support team.
          </p>
        </div>

        <div className="help-grid">
          {helpTopics.map((topic, index) => (
            <a key={index} href={topic.link} className="help-card">
              <div className="help-icon">{topic.icon}</div>
              <h3 className="help-title">{topic.title}</h3>
              <p className="help-description">{topic.description}</p>
              <span className="help-arrow">→</span>
            </a>
          ))}
        </div>

        <div className="help-contact">
          <h2>Can't find what you're looking for? 🤔</h2>
          <p>
            No worries! Our support team is just an email away. We typically respond within 24 hours.
          </p>
          <a href="mailto:nexageapps@gmail.com" className="contact-button">
            Email Support
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

        <div className="back-home">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
