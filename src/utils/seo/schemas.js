/**
 * Structured Data Schema Generators
 * Functions to generate Schema.org JSON-LD structured data
 */

import { DEFAULT_SEO } from './seoConfig';

/**
 * Generate Organization schema with company info, logo, and social links
 * @param {object} options - Optional overrides for organization data
 * @returns {object} Organization schema in JSON-LD format
 */
export const generateOrganizationSchema = (options = {}) => {
  const {
    name = DEFAULT_SEO.siteName,
    url = DEFAULT_SEO.siteUrl,
    logo = DEFAULT_SEO.defaultImage,
    description = DEFAULT_SEO.defaultDescription,
    email = 'nexageapps@gmail.com',
    socialLinks = [
      'https://twitter.com/nexageapps',
      'https://github.com/nexageapps',
      'https://instagram.com/nexageapps'
    ]
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo
    },
    description,
    sameAs: socialLinks,
    contactPoint: {
      '@type': 'ContactPoint',
      email,
      contactType: 'Customer Support',
      availableLanguage: ['English']
    }
  };
};

/**
 * Generate WebSite schema with site name and URL
 * @param {object} options - Optional overrides for website data
 * @returns {object} WebSite schema in JSON-LD format
 */
export const generateWebSiteSchema = (options = {}) => {
  const {
    name = DEFAULT_SEO.siteName,
    url = DEFAULT_SEO.siteUrl,
    description = DEFAULT_SEO.defaultDescription,
    includeSearchAction = true
  } = options;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description
  };

  // Add SearchAction for site search functionality
  if (includeSearchAction) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    };
  }

  return schema;
};

/**
 * Generate SoftwareApplication schema for QR Scan Pro
 * @param {object} options - Optional overrides for app data
 * @returns {object} SoftwareApplication schema in JSON-LD format
 */
export const generateQRScanProSchema = (options = {}) => {
  const {
    name = 'QR Scan Pro',
    description = 'Lightning-fast QR scanner that\'s smart, ad-free, and works offline. Scan, create, and save QR codes with AI-powered technology.',
    applicationCategory = 'UtilitiesApplication',
    operatingSystem = 'iOS, Android',
    price = '0',
    priceCurrency = 'USD',
    ratingValue = '4.4',
    ratingCount = '10000',
    downloadUrl = DEFAULT_SEO.siteUrl
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory,
    operatingSystem,
    description,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      ratingCount
    },
    url: downloadUrl,
    author: {
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName
    }
  };
};

/**
 * Generate SoftwareApplication schema for Lucky Coin Flip
 * @param {object} options - Optional overrides for app data
 * @returns {object} SoftwareApplication schema in JSON-LD format
 */
export const generateLuckyCoinFlipSchema = (options = {}) => {
  const {
    name = 'Lucky Coin Flip',
    description = 'Beautiful 3D coin flip app with realistic physics. Make decisions in style with stunning animations. Zero ads, works offline.',
    applicationCategory = 'EntertainmentApplication',
    operatingSystem = 'iOS, Android',
    price = '0',
    priceCurrency = 'USD',
    ratingValue = '4.4',
    ratingCount = '5000',
    downloadUrl = DEFAULT_SEO.siteUrl
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory,
    operatingSystem,
    description,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      ratingCount
    },
    url: downloadUrl,
    author: {
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName
    }
  };
};

/**
 * Generate BreadcrumbList schema for navigation
 * @param {Array} breadcrumbs - Array of breadcrumb items with name and url
 * @returns {object} BreadcrumbList schema in JSON-LD format
 * 
 * Example breadcrumbs:
 * [
 *   { name: 'Home', url: 'https://www.nexageapps.com' },
 *   { name: 'Help Center', url: 'https://www.nexageapps.com/help' }
 * ]
 */
export const generateBreadcrumbSchema = (breadcrumbs = []) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  const itemListElement = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  };
};

/**
 * Generate breadcrumbs based on current route path
 * @param {string} pathname - Current route pathname (e.g., '/help', '/privacypolicy')
 * @param {string} baseUrl - Base URL of the site
 * @returns {Array} Array of breadcrumb items
 */
export const generateBreadcrumbsFromPath = (pathname, baseUrl = DEFAULT_SEO.siteUrl) => {
  const breadcrumbs = [
    { name: 'Home', url: baseUrl }
  ];

  // Route name mappings
  const routeNames = {
    '/privacypolicy': 'Privacy Policy',
    '/terms': 'Terms of Service',
    '/cookiepolicy': 'Cookie Policy',
    '/faq': 'FAQ',
    '/help': 'Help Center',
    '/learnai': 'Learn AI'
  };

  // Add current page to breadcrumbs if not home
  if (pathname && pathname !== '/' && routeNames[pathname]) {
    breadcrumbs.push({
      name: routeNames[pathname],
      url: `${baseUrl}${pathname}`
    });
  }

  return breadcrumbs;
};

/**
 * Generate FAQPage schema for FAQ pages
 * @param {Array} faqItems - Array of FAQ items with question and answer
 * @returns {object} FAQPage schema in JSON-LD format
 * 
 * Example faqItems:
 * [
 *   { question: 'Are your apps really free?', answer: 'Yes! The base version is 100% free...' },
 *   { question: 'Do you collect my data?', answer: 'Absolutely not! We don\'t collect...' }
 * ]
 */
export const generateFAQSchema = (faqItems = []) => {
  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  const mainEntity = faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity
  };
};
