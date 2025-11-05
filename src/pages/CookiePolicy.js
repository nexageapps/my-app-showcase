import React from 'react';
import './LegalPages.css';

function CookiePolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Cookie Policy 🍪</h1>
          <p className="legal-subtitle">Spoiler: We don't use cookies!</p>
          <p className="legal-date">Last updated: November 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <div className="section-icon">🎉</div>
            <h2>The Best Cookie Policy Ever</h2>
            <p>
              Here's the thing: <strong>We don't use cookies.</strong> Not tracking cookies, not analytics cookies, 
              not any kind of cookies. Our apps are completely offline and don't connect to any servers.
            </p>
            <p>
              This might be the shortest cookie policy you've ever read, and that's a good thing! 🎯
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">🚫</div>
            <h2>What We DON'T Do</h2>
            <ul className="simple-list">
              <li>No tracking cookies</li>
              <li>No analytics cookies</li>
              <li>No advertising cookies</li>
              <li>No third-party cookies</li>
              <li>No cookies of any kind, really!</li>
            </ul>
          </section>

          <section className="legal-section">
            <div className="section-icon">📱</div>
            <h2>Why No Cookies?</h2>
            <p>
              Our apps work completely offline. They don't need to "remember" you across sessions 
              because everything is stored locally on your device. No servers = no cookies needed!
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">🌐</div>
            <h2>What About This Website?</h2>
            <p>
              This website (nexageapps.com) also doesn't use cookies! We don't track visitors, 
              collect analytics, or use any third-party services that would require cookies.
            </p>
            <p>
              We believe in privacy-first design, both in our apps and on our website. 🔒
            </p>
          </section>

          <section className="legal-section">
            <div className="section-icon">💬</div>
            <h2>Questions?</h2>
            <p>
              If you have any questions about our cookie policy (or lack thereof!), feel free to 
              email us at <a href="mailto:nexageapps@gmail.com">nexageapps@gmail.com</a>
            </p>
          </section>

          <div className="legal-footer">
            <p>
              <strong>TL;DR:</strong> No cookies here! Your privacy is safe with us. 🛡️
            </p>
          </div>
        </div>

        <div className="back-home">
          <a href="/">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
