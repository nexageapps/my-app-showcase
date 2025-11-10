import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';
import SEO from '../utils/seo/SEO';
import { getSEOConfig } from '../utils/seo/seoConfig';
import { generateFAQSchema } from '../utils/seo/schemas';
import { trackEmailClick } from '../utils/analytics';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      icon: "❓",
      questions: [
        {
          q: "Are your apps really free?",
          a: "Yes! The base version is 100% free to download and use with all core features. We also offer optional premium features for power users who want even more! No forced subscriptions. 🎉"
        },
        {
          q: "What's the difference between free and premium?",
          a: "The free version includes all essential features you need. Premium unlocks advanced features like unlimited storage, priority support, and exclusive tools. But the free version is fully functional—no annoying limitations! 💎"
        },
        {
          q: "Do I need an internet connection?",
          a: "Nope! Both QR Scan Pro and Lucky Coin Flip work completely offline. Perfect for airplane mode! ✈️"
        },
        {
          q: "Which devices are supported?",
          a: "Our apps work on both iOS (iPhone/iPad) and Android devices. If you can download from the App Store or Google Play, you're good to go! 📱"
        }
      ]
    },
    {
      category: "Privacy & Security",
      icon: "🔒",
      questions: [
        {
          q: "Do you collect my data?",
          a: "Absolutely not! We don't collect, store, or share any of your data. Everything stays on your device. Your privacy is sacred to us! 🛡️"
        },
        {
          q: "Are there any ads?",
          a: "Zero ads. Zilch. Nada. We hate ads as much as you do! Our apps are completely ad-free forever. 🚫"
        },
        {
          q: "Is my scan history private?",
          a: "Yes! Your QR scan history is stored only on your device. We never see it, and it never leaves your phone. 🔐"
        }
      ]
    },
    {
      category: "QR Scan Pro",
      icon: "📱",
      questions: [
        {
          q: "Can I scan QR codes from photos?",
          a: "Absolutely! Just tap the gallery icon and select any image with a QR code. Works like magic! ✨"
        },
        {
          q: "How do I create my own QR code?",
          a: "Easy! Open the app, tap the 'Create' button, enter your text or URL, and boom—instant QR code! You can save it or share it right away. 🎨"
        },
        {
          q: "Can I organize my scanned codes?",
          a: "Yes! Create custom categories, mark favorites, and search through your history. Stay organized like a pro! 📂"
        },
        {
          q: "What types of QR codes can I scan?",
          a: "All of them! URLs, text, WiFi passwords, contact info, calendar events—if it's a QR code, we can scan it! 🎯"
        }
      ]
    },
    {
      category: "Lucky Coin Flip",
      icon: "🪙",
      questions: [
        {
          q: "Is the coin flip really random?",
          a: "Yes! We use your device's random number generator for true randomness. It's as fair as flipping a real coin! 🎲"
        },
        {
          q: "Can I customize the coin?",
          a: "The current version has a beautiful default coin, but we're working on custom coins for future updates! Stay tuned! 🎨"
        },
        {
          q: "Does it work without sound?",
          a: "Yep! The app works perfectly in silent mode. The visual animation is satisfying enough! 🔇"
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: "🛠️",
      questions: [
        {
          q: "The app won't open. What should I do?",
          a: "Try restarting your device first. If that doesn't work, uninstall and reinstall the app. Still stuck? Email us at nexageapps@gmail.com! 🔧"
        },
        {
          q: "QR scanner isn't working. Help!",
          a: "Make sure you've granted camera permissions in your device settings. Also, try cleaning your camera lens—it works wonders! 📸"
        },
        {
          q: "I found a bug. How do I report it?",
          a: "We love bug reports! Email us at nexageapps@gmail.com with details and screenshots. We'll fix it ASAP! 🐛"
        },
        {
          q: "Can I request a feature?",
          a: "Absolutely! We're always looking for ways to improve. Send your ideas to nexageapps@gmail.com. We read every email! 💡"
        }
      ]
    },
    {
      category: "Updates & Support",
      icon: "🚀",
      questions: [
        {
          q: "How often do you update the apps?",
          a: "We release updates regularly with new features, improvements, and bug fixes. Keep your apps updated for the best experience! 🔄"
        },
        {
          q: "How do I contact support?",
          a: "Email us at nexageapps@gmail.com! We're real humans who actually read and respond to every email, usually within 24 hours. 💌"
        },
        {
          q: "Do you have a roadmap?",
          a: "We're constantly working on new features! Follow us on Twitter @nexageapps for sneak peeks and updates! 🗺️"
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get SEO configuration
  const seoConfig = getSEOConfig('faq');

  // Flatten all FAQ items for schema
  const allFAQItems = faqs.flatMap(category =>
    category.questions.map(item => ({
      question: item.q,
      answer: item.a
    }))
  );

  // Generate FAQ schema
  const faqSchema = generateFAQSchema(allFAQItems);

  return (
    <div className="faq-page">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        ogImage={seoConfig.ogImage}
        ogType={seoConfig.ogType}
        structuredData={faqSchema}
      />
      <div className="faq-container">
        <header className="faq-header">
          <h1>Frequently Asked Questions 💬</h1>
          <p className="faq-subtitle">Got questions? We've got answers!</p>
          <p className="faq-description">
            Can't find what you're looking for? Visit our <Link to="/help">Help Center</Link> or drop us an email at{' '}
            <a 
              href="mailto:nexageapps@gmail.com"
              onClick={() => trackEmailClick('nexageapps@gmail.com', 'faq_header')}
            >
              nexageapps@gmail.com
            </a>
          </p>
        </header>

        <main className="faq-content">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex} className="faq-category" aria-labelledby={`category-${categoryIndex}-title`}>
              <div className="category-header">
                <span className="category-icon" aria-hidden="true">{category.icon}</span>
                <h2 id={`category-${categoryIndex}-title`} className="category-title">{category.category}</h2>
              </div>
              
              <div className="questions-list">
                {category.questions.map((item, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <article key={questionIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        className="faq-question"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`answer-${index}`}
                      >
                        <h3>{item.q}</h3>
                        <svg
                          className="faq-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      <div id={`answer-${index}`} className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>

        <aside className="faq-footer">
          <h2>Still have questions? 🤔</h2>
          <p>
            We're here to help! Visit our <Link to="/help">Help Center</Link> for more resources, check out our <Link to="/">mobile apps</Link>, or reach out to us at{' '}
            <a 
              href="mailto:nexageapps@gmail.com"
              onClick={() => trackEmailClick('nexageapps@gmail.com', 'faq_footer')}
            >
              nexageapps@gmail.com
            </a>
            {' '}and we'll get back to you faster than you can flip a coin! 🪙
          </p>
          <p>
            Learn more about our <Link to="/privacy">privacy policy</Link> and <Link to="/terms">terms of service</Link>.
          </p>
        </aside>

        <nav className="back-home">
          <Link to="/">← Back to Home</Link>
        </nav>
      </div>
    </div>
  );
}

export default FAQ;
