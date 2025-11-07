import './App.css';
import { apps } from './data/apps';
import Header from './components/Header/Header';
import AppCard from './components/AppCard/AppCard';
import ScrollLink from './components/ScrollLink';
import { useState, useEffect } from 'react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Show nav bar and scroll button after 200px
      setShowScrollTop(window.scrollY > 200);

      // Update active section for navigation
      const sections = ['hero', 'apps', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Call once on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header 
        title="NexageApps" 
        subtitle="Next Generation Mobile Applications"
      />
      
      {/* Sticky Quick Nav */}
      <nav className={`quick-nav ${showScrollTop ? 'visible' : ''}`}>
        <div className="quick-nav-container">
          <ScrollLink to="hero" className={activeSection === 'hero' ? 'active' : ''}>Home</ScrollLink>
          <ScrollLink to="apps" className={activeSection === 'apps' ? 'active' : ''}>Apps</ScrollLink>
          <ScrollLink to="about" className={activeSection === 'about' ? 'active' : ''}>About</ScrollLink>
          <ScrollLink to="contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</ScrollLink>
        </div>
      </nav>

      {/* Hero Intro Section */}
      <section id="hero" className="hero-intro">
        <div className="hero-container-full">
          <div className="hero-main">
            <div className="hero-left">
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                <span>Trusted by 45K+ Users</span>
              </div>
              <h1 className="hero-title">
                Innovative Apps for <span className="hero-highlight">Modern Life</span>
              </h1>
              <p className="hero-description">
                At NexageApps, we craft powerful, intuitive mobile applications that simplify your daily tasks 
                and bring joy to your digital experience. From productivity to entertainment, we've got you covered.
              </p>
              
              <div className="hero-pricing-badge">
                <span className="pricing-free">FREE</span>
                <span className="pricing-text">to download & use</span>
                <span className="pricing-premium">Premium features available</span>
              </div>
              
              <div className="hero-cta">
                <ScrollLink to="apps" className="cta-button primary">
                  Explore Our Apps
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </ScrollLink>
                <ScrollLink to="contact" className="cta-button secondary">
                  Get in Touch
                </ScrollLink>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-quote-card">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                <blockquote className="hero-quote">
                  "The best way to predict the future is to create it."
                </blockquote>
                <cite className="hero-quote-author">— Peter Drucker</cite>
                <div className="quote-decoration"></div>
              </div>
              
              <div className="hero-stats-mini">
                <div className="stat-mini">
                  <span className="stat-mini-number">10K+</span>
                  <span className="stat-mini-label">Happy Users</span>
                </div>
                <div className="stat-mini">
                  <span className="stat-mini-number">4.4★</span>
                  <span className="stat-mini-label">App Rating</span>
                </div>
              </div>
            </div>

          </div>
          
          {/* Why Choose Us Section - Horizontal 4 Tiles */}
          <div className="why-choose-us-horizontal">
            <div className="why-card-horizontal">
              <div className="why-icon-horizontal">💰</div>
              <h3>Free</h3>
              <p>Core features at no cost</p>
            </div>
            <div className="why-card-horizontal">
              <div className="why-icon-horizontal">🔒</div>
              <h3>Private</h3>
              <p>Data stays on your device</p>
            </div>
            <div className="why-card-horizontal why-card-desktop-only">
              <div className="why-icon-horizontal">📴</div>
              <h3>Offline</h3>
              <p>No internet required</p>
            </div>
            <div className="why-card-horizontal why-card-desktop-only">
              <div className="why-icon-horizontal">⚡</div>
              <h3>Fast</h3>
              <p>Instant performance</p>
            </div>
          </div>
        </div>
      </section>
      
      <main className="container">
        {/* App Icons Overview Section */}
        <section id="apps" className="apps-overview" aria-label="Available applications">
          <h2 className="overview-title">Our Apps</h2>
          <div className="apps-icons-grid">
            {apps.map((app, index) => (
              <ScrollLink 
                key={app.id}
                to={app.id}
                className="app-icon-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="app-icon-wrapper">
                  <img 
                    src={app.icon} 
                    alt={`${app.name} icon`}
                    className="app-icon"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="app-icon-placeholder" style={{ display: 'none' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="app-icon-name">{app.name}</h3>
                <p className="app-icon-tagline">{app.tagline}</p>
              </ScrollLink>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section" aria-label="Our achievements">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="stat-number">45K+</h3>
              <p className="stat-label">Downloads</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3 className="stat-number">4.8</h3>
              <p className="stat-label">Average Rating</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="stat-number">10K+</h3>
              <p className="stat-label">Active Users</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="stat-number">2</h3>
              <p className="stat-label">Apps Available</p>
            </div>
          </div>
        </section>

        {/* Detailed App Cards Section */}
        <section className="apps-details" aria-label="Application details">
          <div className="apps-grid" role="list">
            {apps.map((app, index) => (
              <AppCard key={app.id} app={app} index={index} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section" aria-label="About us">
          <div className="about-content">
            <h2 className="section-title">About NexageApps</h2>
            <p className="about-text">
              NexageApps is where innovation meets simplicity. We're a passionate team of developers and designers 
              committed to creating mobile applications that don't just work—they delight. Our mission is to build 
              the next generation of apps that seamlessly integrate into your life.
            </p>
            <p className="about-text">
              From powerful QR scanning technology to fun decision-making tools, every app we create is designed 
              with you in mind. We believe in clean interfaces, smooth performance, and features that actually matter. 
              No bloat, no ads—just pure, quality experiences.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span>Quality First</span>
              </div>
              <div className="about-feature">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span>User-Centric Design</span>
              </div>
              <div className="about-feature">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
                <span>Regular Updates</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact" aria-label="Contact us">
          <div className="contact-content">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-intro">
              Have questions, feedback, or suggestions? We'd love to hear from you! 💌
            </p>
            
            <div className="contact-email-hero">
              <div className="email-icon-large">
                <svg viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="email-title">Drop us an email</h3>
              <a href="mailto:nexageapps@gmail.com" className="email-address">
                nexageapps@gmail.com
              </a>
              <p className="email-subtitle">
                We read every email and typically respond within 24 hours! 🚀
              </p>
            </div>
            
            <div className="contact-methods">
              <a href="https://twitter.com/nexageapps" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63.96-.7 1.8-1.56 2.46-2.55z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3 className="contact-title">Follow on Twitter</h3>
                  <p className="contact-detail">@nexageapps</p>
                </div>
              </a>

              <a href="https://github.com/nexageapps" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3 className="contact-title">Star on GitHub</h3>
                  <p className="contact-detail">@nexageapps</p>
                </div>
              </a>
              
              <a href="https://instagram.com/nexageapps" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3 className="contact-title">Follow on Instagram</h3>
                  <p className="contact-detail">@nexageapps</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <h3 className="footer-logo">NexageApps</h3>
              <p className="footer-tagline">Next Generation Mobile Applications</p>
              <p className="footer-description">
                Building innovative apps that make your life easier, one download at a time. 
                Join thousands of users who trust NexageApps for quality mobile experiences.
              </p>
              <div className="footer-stats">
                <div className="footer-stat">
                  <strong>45K+</strong>
                  <span>Downloads</span>
                </div>
                <div className="footer-stat">
                  <strong>4.4★</strong>
                  <span>Rating</span>
                </div>
                <div className="footer-stat">
                  <strong>2</strong>
                  <span>Apps</span>
                </div>
              </div>
            </div>
            
            <div className="footer-links-grid">
              <div className="footer-section">
                <h4 className="footer-heading">Our Apps</h4>
                <ul className="footer-links">
                  <li><ScrollLink to="qr-scan-pro">QR Scan Pro</ScrollLink></li>
                  <li><ScrollLink to="lucky-coin-flip">Lucky Coin Flip</ScrollLink></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-links">
                  <li><ScrollLink to="about">About Us</ScrollLink></li>
                  <li><ScrollLink to="contact">Contact</ScrollLink></li>
                  <li><a className="hide" href="#/careers">Careers</a></li>
                  <li><a className="hide" href="#/blog">Blog</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-heading">Support</h4>
                <ul className="footer-links">
                  <li><a href="#/help">Help Center</a></li>
                  <li><a href="#/faq">FAQ</a></li>
                  <li><a href="mailto:nexageapps@gmail.com">Email Support</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-heading">Resources</h4>
                <ul className="footer-links">
                 
                  <li><a href="#/privacypolicy">Privacy Policy</a></li>
                  <li><a href="#/terms">Terms of Service</a></li>
                  <li><a href="#/cookies">Cookie Policy</a></li>
                   <li><a className="hide" href="#/learn-ai">Learn AI 🎓</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>&copy; 2024 NexageApps. All rights reserved.</p>
              <p className="footer-made-with">
                Made with 
                <svg viewBox="0 0 24 24" fil  l="currentColor" width="16" height="16">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                for mobile users everywhere
              </p>
            </div>
            
            <div className="footer-social">
              <span className="footer-social-label">Follow Us</span>
              <div className="social-links">
                <a href="https://twitter.com/nexageapps" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63.96-.7 1.8-1.56 2.46-2.55z"/>
                  </svg>
                </a>
                <a href="https://github.com/nexageapps" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/nexageapps" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/nexageapps" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </button>
    </div>
  );
}

export default App;
