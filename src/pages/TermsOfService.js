import { Link } from 'react-router-dom';
import './LegalPages.css';
import SEO from '../utils/seo/SEO';
import { getSEOConfig } from '../utils/seo/seoConfig';

function TermsOfService() {
  const seoConfig = getSEOConfig('termsOfService');

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
          <h1>Terms of Service 📜</h1>
          <p className="legal-subtitle">The boring legal stuff, made less boring</p>
          <p className="legal-date">Last updated: November 2024</p>
        </header>

        <main className="legal-content">
          <section className="legal-section" aria-labelledby="welcome-title">
            <div className="section-icon" aria-hidden="true">👋</div>
            <h2 id="welcome-title">Welcome!</h2>
            <p>
              Thanks for choosing NexageApps! We've tried to make these terms as human-friendly 
              as possible. By using our apps (QR Scan Pro and Lucky Coin Flip), you're agreeing 
              to these terms. Don't worry—there are no gotchas here.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="getting-title">
            <div className="section-icon" aria-hidden="true">🎯</div>
            <h2 id="getting-title">What You're Getting</h2>
            <p>
              Our apps are designed to make your life easier:
            </p>
            <ul className="simple-list">
              <li><strong>QR Scan Pro:</strong> A powerful, ad-free QR code scanner and generator that works offline</li>
              <li><strong>Lucky Coin Flip:</strong> A beautiful, realistic coin flip app for making decisions with style</li>
            </ul>
            <p>
              Both apps are <strong>free to download and use</strong> with core features available at no cost. 
              Some apps offer optional premium features for enhanced functionality. No hidden fees or surprise charges! 🎁
            </p>
          </section>

          <section className="legal-section" aria-labelledby="can-do-title">
            <div className="section-icon" aria-hidden="true">✅</div>
            <h2 id="can-do-title">What You Can Do</h2>
            <div className="feature-list">
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <strong>Use the apps freely</strong>
                  <p>Download, install, and use our apps as much as you want</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <strong>Share with friends</strong>
                  <p>Tell everyone about how awesome our apps are!</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <strong>Give us feedback</strong>
                  <p>We love hearing from users. Suggestions, bug reports, or just saying hi—we're all ears!</p>
                </div>
              </div>
            </div>
          </section>

          <section className="legal-section" aria-labelledby="cant-do-title">
            <div className="section-icon" aria-hidden="true">🚫</div>
            <h2 id="cant-do-title">What You Can't Do</h2>
            <p>
              Just a few common-sense rules to keep things fair for everyone:
            </p>
            <ul className="simple-list">
              <li>Don't try to reverse-engineer, decompile, or hack our apps</li>
              <li>Don't copy our code or design and claim it as your own</li>
              <li>Don't use our apps for anything illegal or harmful</li>
              <li>Don't try to break or disrupt the apps' functionality</li>
            </ul>
            <p className="note">
              💡 Basically: Be cool, and we'll be cool. Simple as that!
            </p>
          </section>

          <section className="legal-section" aria-labelledby="disclaimer-title">
            <div className="section-icon" aria-hidden="true">🛡️</div>
            <h2 id="disclaimer-title">Disclaimer (The Legal Stuff)</h2>
            <p>
              We work hard to make our apps reliable and bug-free, but we're human. 
              Here's the honest truth:
            </p>
            <ul className="simple-list">
              <li>Our apps are provided "as is" without warranties of any kind</li>
              <li>We're not responsible if something goes wrong with your device (though that's super unlikely)</li>
              <li>For QR Scan Pro: Always verify important QR codes before taking action. We scan them, but we can't control what they link to</li>
              <li>For Lucky Coin Flip: It's for fun and decision-making. Don't use it for anything legally binding! 😄</li>
            </ul>
          </section>

          <section className="legal-section" aria-labelledby="updates-title">
            <div className="section-icon" aria-hidden="true">🔄</div>
            <h2 id="updates-title">Updates & Changes</h2>
            <p>
              We're constantly improving our apps with new features and bug fixes. When we release 
              updates, you'll see them in the App Store or Google Play. We recommend keeping your 
              apps updated for the best experience.
            </p>
            <p>
              If we need to change these terms, we'll update this page and let you know through 
              an app update. Continued use of the apps means you accept the new terms.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="ip-title">
            <div className="section-icon" aria-hidden="true">⚖️</div>
            <h2 id="ip-title">Intellectual Property</h2>
            <p>
              All the code, designs, graphics, and content in our apps belong to NexageApps. 
              We've put a lot of love and late nights into creating these apps, so please respect 
              our work. The app names, logos, and branding are our trademarks.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="jurisdiction-title">
            <div className="section-icon" aria-hidden="true">🌍</div>
            <h2 id="jurisdiction-title">Where These Terms Apply</h2>
            <p>
              Our apps are available worldwide! These terms are governed by the laws of the 
              United States, but they apply to everyone, everywhere. We're all part of the 
              same global community. 🌎
            </p>
          </section>

          <section className="legal-section" aria-labelledby="termination-title">
            <div className="section-icon" aria-hidden="true">🚪</div>
            <h2 id="termination-title">Termination</h2>
            <p>
              You can stop using our apps anytime by simply deleting them from your device. 
              No hard feelings! We hope you'll come back, but we understand if our apps aren't 
              for you.
            </p>
            <p>
              We reserve the right to discontinue the apps or remove them from app stores if 
              needed, but we'll always try to give you a heads up first.
            </p>
          </section>

          <section className="legal-section" aria-labelledby="contact-title">
            <div className="section-icon" aria-hidden="true">📧</div>
            <h2 id="contact-title">Contact Us</h2>
            <p>
              Got questions about these terms? Want to report a problem? Just want to chat? 
              We're here for you:
            </p>
            <p>
              Email us at <a href="mailto:nexageapps@gmail.com">nexageapps@gmail.com</a> or visit our{' '}
              <Link to="/help">Help Center</Link> for more support options.
            </p>
            <p>
              We actually read and respond to every email. Promise! 💌
            </p>
          </section>

          <aside className="legal-footer">
            <p>
              <strong>TL;DR:</strong> Use our apps freely and responsibly. Don't be a jerk. 
              We'll keep making awesome apps. Everyone wins! 🎉
            </p>
            <p>
              Check out our <Link to="/privacy">privacy policy</Link>, browse our <Link to="/faq">FAQ</Link>, or explore our <Link to="/">mobile apps</Link>.
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

export default TermsOfService;
