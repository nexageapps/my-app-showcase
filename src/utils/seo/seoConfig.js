/**
 * SEO Configuration Constants
 * Centralized configuration for all SEO metadata across the website
 */

// Default SEO values
export const DEFAULT_SEO = {
  siteName: 'NexageApps',
  defaultTitle: 'NexageApps - Next Generation Mobile Applications',
  defaultDescription: 'Discover innovative, ad-free mobile apps including QR Scan Pro and Lucky Coin Flip. Download now for iOS and Android.',
  defaultImage: 'https://www.nexageapps.com/logo512.png',
  siteUrl: 'https://www.nexageapps.com',
  twitterHandle: '@nexageapps',
  language: 'en'
};

// Page-specific SEO configurations
export const SEO_CONFIG = {
  home: {
    title: 'NexageApps - Next Generation Mobile Applications',
    description: 'Discover innovative, ad-free mobile apps. Download QR Scan Pro and Lucky Coin Flip for iOS and Android. 45K+ downloads, 4.4★ rating.',
    keywords: [
      'mobile apps',
      'ad-free apps',
      'QR scanner',
      'coin flip app',
      'iOS apps',
      'Android apps',
      'next generation apps',
      'innovative mobile apps'
    ],
    canonical: 'https://www.nexageapps.com',
    ogImage: 'https://www.nexageapps.com/logo512.png',
    ogType: 'website'
  },

  qrScanPro: {
    title: 'QR Scan Pro - Lightning-Fast QR Code Scanner | NexageApps',
    description: 'QR Scan Pro: Lightning-fast, AI-powered QR scanner. Scan, create, and save QR codes offline. 100% ad-free. Download for iOS & Android.',
    keywords: [
      'QR scanner',
      'QR code reader',
      'barcode scanner',
      'QR code generator',
      'ad-free scanner',
      'offline QR scanner',
      'fast QR scanner',
      'AI QR scanner'
    ],
    canonical: 'https://www.nexageapps.com#qr-scan-pro',
    ogImage: 'https://www.nexageapps.com/images/qr-scan-pro-og.jpg',
    ogType: 'website'
  },

  luckyCoinFlip: {
    title: 'Lucky Coin Flip - 3D Coin Flip Decision Maker | NexageApps',
    description: 'Lucky Coin Flip: Beautiful 3D coin flip app with realistic physics. Make decisions in style. Zero ads, works offline. Free for iOS & Android.',
    keywords: [
      'coin flip',
      'decision maker',
      'coin toss',
      '3D animation',
      'random choice',
      'flip a coin',
      'coin flipper',
      'decision app'
    ],
    canonical: 'https://www.nexageapps.com#lucky-coin-flip',
    ogImage: 'https://www.nexageapps.com/images/lucky-coin-flip-og.jpg',
    ogType: 'website'
  },

  privacyPolicy: {
    title: 'Privacy Policy | NexageApps',
    description: 'Read NexageApps\' privacy policy. Learn how we protect your data and respect your privacy in our mobile applications.',
    keywords: [
      'privacy policy',
      'data protection',
      'user privacy',
      'GDPR compliance',
      'data security'
    ],
    canonical: 'https://www.nexageapps.com/privacypolicy',
    ogImage: 'https://www.nexageapps.com/logo512.png',
    ogType: 'website'
  },

  termsOfService: {
    title: 'Terms of Service | NexageApps',
    description: 'Terms of Service for NexageApps mobile applications. Read our terms and conditions for using our apps.',
    keywords: [
      'terms of service',
      'terms and conditions',
      'user agreement',
      'app terms',
      'legal terms'
    ],
    canonical: 'https://www.nexageapps.com/terms',
    ogImage: 'https://www.nexageapps.com/logo512.png',
    ogType: 'website'
  },

  cookiePolicy: {
    title: 'Cookie Policy | NexageApps',
    description: 'Learn about how NexageApps uses cookies and similar technologies on our website and mobile applications.',
    keywords: [
      'cookie policy',
      'cookies',
      'tracking',
      'privacy',
      'data collection'
    ],
    canonical: 'https://www.nexageapps.com/cookiepolicy',
    ogImage: 'https://www.nexageapps.com/logo512.png',
    ogType: 'website'
  },

  faq: {
    title: 'FAQ - Frequently Asked Questions | NexageApps',
    description: 'Find answers to common questions about NexageApps mobile applications, features, and support.',
    keywords: [
      'FAQ',
      'frequently asked questions',
      'help',
      'support',
      'questions',
      'answers',
      'app help'
    ],
    canonical: 'https://www.nexageapps.com/faq',
    ogImage: 'https://www.nexageapps.com/logo512.png',
    ogType: 'website'
  },

  helpCenter: {
    title: 'Help Center - Support & Guides | NexageApps',
    description: 'Get help with NexageApps mobile applications. Browse guides, tutorials, and support resources.',
    keywords: [
      'help center',
      'support',
      'guides',
      'tutorials',
      'documentation',
      'app support',
      'customer service'
    ],
    canonical: 'https://www.nexageapps.com/help',
    ogImage: 'https://www.nexageapps.com/logo512.png',
    ogType: 'website'
  },

  learnAI: {
    title: 'Learn AI - AI Education & Resources | NexageApps',
    description: 'Explore AI concepts, tutorials, and resources. Learn about artificial intelligence and machine learning with NexageApps.',
    keywords: [
      'learn AI',
      'artificial intelligence',
      'machine learning',
      'AI education',
      'AI tutorials',
      'AI resources'
    ],
    canonical: 'https://www.nexageapps.com/learnai',
    ogImage: 'https://www.nexageapps.com/logo512.png',
    ogType: 'website'
  }
};

/**
 * Get SEO configuration for a specific page
 * @param {string} pageKey - Key identifying the page (e.g., 'home', 'qrScanPro')
 * @returns {object} SEO configuration object with fallback to defaults
 */
export const getSEOConfig = (pageKey) => {
  const config = SEO_CONFIG[pageKey];
  
  if (!config) {
    console.warn(`SEO config not found for page: ${pageKey}. Using defaults.`);
    return {
      title: DEFAULT_SEO.defaultTitle,
      description: DEFAULT_SEO.defaultDescription,
      keywords: [],
      canonical: DEFAULT_SEO.siteUrl,
      ogImage: DEFAULT_SEO.defaultImage,
      ogType: 'website'
    };
  }
  
  return config;
};

/**
 * Merge custom SEO data with page defaults
 * @param {string} pageKey - Key identifying the page
 * @param {object} customData - Custom SEO data to override defaults
 * @returns {object} Merged SEO configuration
 */
export const mergeSEOConfig = (pageKey, customData = {}) => {
  const baseConfig = getSEOConfig(pageKey);
  return {
    ...baseConfig,
    ...customData
  };
};
