import { Link } from 'react-router-dom';
import './LegalPages.css';
import SEO from '../utils/seo/SEO';
import { getSEOConfig } from '../utils/seo/seoConfig';
import { trackEmailClick } from '../utils/analytics';

function CookiePolicy() {
  const seoConfig = getSEOConfig('cookiePolicy');

  return (
    <div className="legal-page">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        ogImage={seoConfig.ogImage}
        ogType={seoConfig.ogType}
      />
      <div className="legal-container">
        <header className="legal-header">
          <h1>Cookie Policy 🍪</h1>
          <p className="legal-subtitle">Spoiler: We don't use cookies!</p>
          <p className="legal-date">Last updated: November 2024</p>
        </header>

        <main className="legal-content">
          <section className="legal-section" aria-labelledby="best-policy-title">
            <div className="section-icon" aria-hidden="true">🎉</div>
            <h2 id="best-policy-title">The Best Cookie Policy Ever</h2>
            <p>
              Here's the thing: <strong>We don't use cookies.</strong> Not tracking cookies, not analytics cookies, 
              not any kind of cookies. Our apps are completely offline and don't connect to any servers.
            </p>
            <p>
              This might be the shortest cookie policy you've ever read, and that's a good thing! 🎯
            </p>
          </section>

          <section className="legal-section" aria-labelledby="dont-do-title">
            <div className="section-icon" aria-hidden="true">🚫</div>
            <h2 id="dont-do-title">What We DON'T Do</h2>
            <ul className="simple-list">
              <li>No tracking cookies</li>
              <li>No analytics cookies</li>
              <li>No advertising cookies</li>
              <li>No third-party cookies</li>
              <li>No cookies of any kind, really!</li>
            </ul>
          </section>

          <section className="legal-section" aria-labelledby="why-no-cookies-title">
            <div className="section-icon" aria-hidden="true">📱</div>
            <h2 id="why-no-cookies-title">Why No Cookies?</h2>
            <p>
              Our apps work completely offline. They don't need to "remember" you across sessions 
              because everything is stored locally on your device. No servers = no cookies needed!
            </p>
          </section>

          <section className="hide legal-section" aria-labelledby="website-title">
            <div className="section-icon" aria-hidden="true">🌐</div>
            <h2 id="website-title">What About This Website?</h2>
            <p>
              This website (nexageapps.com) also doesn't use cookies! We don't track visitors, 
              collect analytics, or use any third-party services that would require cookies.
            </p>
            <p>
              We believe in privacy-first design, both in our apps and on our website. 🔒
            </p>
          </section>

          <section className="legal-section" aria-labelledby="cookie-questions-title">
            <div className="section-icon" aria-hidden="true">💬</div>
            <h2 id="cookie-questions-title">Questions?</h2>
            <p>
              If you have any questions about our cookie policy (or lack thereof!), feel free to 
              email us at <a 
                href="mailto:nexageapps@gmail.com"
                onClick={() => trackEmailClick('nexageapps@gmail.com', 'cookie_policy')}
              >
                nexageapps@gmail.com
              </a> or visit our{' '}
              <Link to="/help">Help Center</Link>.
            </p>
          </section>

          <aside className="legal-footer">
            <p>
              <strong>TL;DR:</strong> No cookies here! Your privacy is safe with us. 🛡️
            </p>
            <p>
              Learn more about our <Link to="/privacy">privacy policy</Link> and <Link to="/terms">terms of service</Link>, or explore our <Link to="/">mobile apps</Link>.
            </p>
          </aside>
        </main>

        <nav className="back-home">
          <Link to="/">← Back to Home</Link>
        </nav>
      </div>
    </div>
  );
}

export default CookiePolicy;
