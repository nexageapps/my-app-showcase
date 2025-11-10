/**
 * Google Analytics 4 Event Tracking Utility
 * 
 * This utility provides functions to track custom events in Google Analytics 4.
 * Replace 'G-XXXXXXXXXX' in public/index.html with your actual GA4 Measurement ID.
 */

/**
 * Track a custom event in Google Analytics
 * @param {string} eventName - The name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track app store button clicks
 * @param {string} appName - Name of the app
 * @param {string} store - 'app_store' or 'play_store'
 * @param {string} appStoreUrl - URL of the app store link
 */
export const trackAppDownload = (appName, store, appStoreUrl) => {
  trackEvent('app_download_click', {
    app_name: appName,
    store_type: store,
    link_url: appStoreUrl,
    event_category: 'engagement',
    event_label: `${appName} - ${store}`
  });
};

/**
 * Track email contact clicks
 * @param {string} email - Email address clicked
 * @param {string} location - Where on the page the email was clicked
 */
export const trackEmailClick = (email, location = 'contact_section') => {
  trackEvent('email_click', {
    email_address: email,
    click_location: location,
    event_category: 'engagement',
    event_label: `Email: ${email}`
  });
};

/**
 * Track social media link clicks
 * @param {string} platform - Social media platform (twitter, github, instagram, linkedin)
 * @param {string} url - URL of the social media profile
 * @param {string} location - Where on the page the link was clicked (header, footer, contact)
 */
export const trackSocialClick = (platform, url, location = 'footer') => {
  trackEvent('social_media_click', {
    platform: platform,
    link_url: url,
    click_location: location,
    event_category: 'engagement',
    event_label: `${platform} - ${location}`
  });
};

/**
 * Track internal navigation clicks
 * @param {string} linkText - Text of the link clicked
 * @param {string} destination - Destination section or page
 */
export const trackInternalNavigation = (linkText, destination) => {
  trackEvent('internal_navigation', {
    link_text: linkText,
    destination: destination,
    event_category: 'navigation',
    event_label: `${linkText} -> ${destination}`
  });
};

/**
 * Track external link clicks
 * @param {string} linkText - Text of the link clicked
 * @param {string} url - External URL
 */
export const trackExternalLink = (linkText, url) => {
  trackEvent('external_link_click', {
    link_text: linkText,
    link_url: url,
    event_category: 'engagement',
    event_label: linkText
  });
};

/**
 * Track page views manually (for SPA navigation)
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};
