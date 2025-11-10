import { Link } from 'react-router-dom';
import './LegalPages.css';
import SEO from '../utils/seo/SEO';
import { getSEOConfig } from '../utils/seo/seoConfig';

function PrivacyPolicy() {
  const seoConfig = getSEOConfig('privacyPolicy');

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
          <h1>Privacy Policy 🔒</h1>
          <p className="legal-subtitle">Your privacy matters. A lot.</p>
          <p className="legal-date">Last updated: November 2024</p>
        </header>

        <main className="legal-content">
          <section className="legal-section" aria-labelledby="good-news-title">
            <div className="section-icon" aria-hidden="true">🎉</div>
            <h2 id="good-news-title">The Good News First!</h2>
            <p>
              Here's the best part: <strong>We don't collect your data. Period.</strong> 
              Both QR Scan Pro and Lucky Coin Flip are completely offline apps. 
              Everything happens right on your device, and nothing leaves it.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="what-means-title">
            <div className="section-icon" aria-hidden="true">📱</div>
            <h2 id="what-means-title">What This Means for You</h2>
            <div className="feature-list">
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <strong>No Account Required</strong>
                  <p>Just download and start using. No sign-ups, no passwords, no hassle.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <strong>No Data Collection</strong>
                  <p>We don't track what you scan, flip, or do in our apps. Your business is your business.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <strong>No Internet Required</strong>
                  <p>Our apps work perfectly offline. Airplane mode? No problem!</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <strong>No Third-Party Tracking</strong>
                  <p>No analytics, no ad networks, no creepy tracking pixels. Just you and the app.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section" aria-labelledby="stored-data-title">
            <div className="section-icon" aria-hidden="true">💾</div>
            <h2 id="stored-data-title">What Gets Stored on Your Device</h2>
            <p>
              Some data needs to be saved locally so the apps can actually work. Here's what stays on your device:
            </p>
            <ul className="simple-list">
              <li><strong>QR Scan Pro:</strong> Your scan history, saved QR codes, and custom categories (all stored locally on your device)</li>
              <li><strong>Lucky Coin Flip:</strong> Your app preferences and settings (that's it!)</li>
            </ul>
            <p className="note">
              💡 <strong>Pro tip:</strong> You can delete this data anytime by clearing the app's storage or uninstalling the app.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="camera-access-title">
            <div className="section-icon" aria-hidden="true">📸</div>
            <h2 id="camera-access-title">Camera & Photo Access</h2>
            <p>
              <strong>QR Scan Pro</strong> needs camera access to scan QR codes (obviously! 😄). 
              We also ask for photo library access so you can scan QR codes from images you've saved.
            </p>
            <p>
              <strong>Important:</strong> We never upload your photos anywhere. The scanning happens 
              entirely on your device, and the images are never stored or transmitted.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="security-title">
            <div className="section-icon" aria-hidden="true">🔐</div>
            <h2 id="security-title">Security</h2>
            <p>
              Since everything stays on your device, your data is as secure as your device is. 
              We recommend using your device's built-in security features like passcodes, 
              Face ID, or fingerprint locks.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="children-privacy-title">
            <div className="section-icon" aria-hidden="true">👶</div>
            <h2 id="children-privacy-title">Children's Privacy</h2>
            <p>
              Our apps are safe for everyone, including kids. Since we don't collect any data, 
              there's nothing to worry about. Parents can feel confident letting their children 
              use our apps.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="changes-policy-title">
            <div className="section-icon" aria-hidden="true">🔄</div>
            <h2 id="changes-policy-title">Changes to This Policy</h2>
            <p>
              If we ever change how we handle privacy (spoiler: we won't start collecting data), 
              we'll update this page and let you know through an app update. We'll always keep 
              things transparent and user-friendly.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="questions-title">
            <div className="section-icon" aria-hidden="true">💬</div>
            <h2 id="questions-title">Questions?</h2>
            <p>
              We're real people who actually read emails! If you have any questions about privacy 
              or anything else, reach out to us at{' '}
              <a href="mailto:nexageapps@gmail.com">nexageapps@gmail.com</a>. You can also visit our{' '}
              <Link to="/help">Help Center</Link> or check our <Link to="/faq">FAQ</Link> for quick answers.
            </p>
          </section>

          <aside className="legal-footer">
            <p>
              <strong>TL;DR:</strong> We don't collect your data. Everything stays on your device. 
              You're in complete control. That's how it should be. 🎯
            </p>
            <p>
              Learn more about our <Link to="/terms">terms of service</Link> or explore our <Link to="/">mobile apps</Link>.
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

export default PrivacyPolicy;
