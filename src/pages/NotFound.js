import { Link } from 'react-router-dom';
import './NotFound.css';
import SEO from '../utils/seo/SEO';

function NotFound() {
  return (
    <div className="not-found-page">
      <SEO
        title="Page Not Found | NexageApps"
        description="The page you're looking for doesn't exist. Explore our mobile apps or visit our help center."
        noindex={true}
      />
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="120" height="120">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          
          <h1 className="not-found-title">404 - Page Not Found</h1>
          <p className="not-found-description">
            Oops! The page you're looking for seems to have wandered off. 
            Don't worry, we'll help you find your way back! 🧭
          </p>

          <div className="not-found-actions">
            <Link to="/" className="not-found-button primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Go to Homepage
            </Link>
            <Link to="/help" className="not-found-button secondary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg>
              Visit Help Center
            </Link>
          </div>

          <section className="popular-pages" aria-labelledby="popular-pages-title">
            <h2 id="popular-pages-title">Popular Pages</h2>
            <nav className="popular-pages-grid">
              <Link to="/" className="popular-page-card">
                <div className="page-icon" aria-hidden="true">🏠</div>
                <h3>Home</h3>
                <p>Explore our mobile apps</p>
              </Link>
              
              <Link to="/faq" className="popular-page-card">
                <div className="page-icon" aria-hidden="true">❓</div>
                <h3>FAQ</h3>
                <p>Frequently asked questions</p>
              </Link>
              
              <Link to="/help" className="popular-page-card">
                <div className="page-icon" aria-hidden="true">🆘</div>
                <h3>Help Center</h3>
                <p>Get support and guides</p>
              </Link>
              
              <Link to="/privacy" className="popular-page-card">
                <div className="page-icon" aria-hidden="true">🔒</div>
                <h3>Privacy Policy</h3>
                <p>Your data, your control</p>
              </Link>
              
              <Link to="/terms" className="popular-page-card">
                <div className="page-icon" aria-hidden="true">📜</div>
                <h3>Terms of Service</h3>
                <p>Our terms and conditions</p>
              </Link>
              
              <a href="mailto:nexageapps@gmail.com" className="popular-page-card">
                <div className="page-icon" aria-hidden="true">📧</div>
                <h3>Contact Us</h3>
                <p>Get in touch with support</p>
              </a>
            </nav>
          </section>

          <aside className="not-found-tip">
            <p>
              💡 <strong>Tip:</strong> If you think this page should exist, please{' '}
              <a href="mailto:nexageapps@gmail.com">let us know</a> so we can fix it!
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
