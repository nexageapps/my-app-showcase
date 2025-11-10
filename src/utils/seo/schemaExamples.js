/**
 * Schema Usage Examples
 * Demonstrates how to use the structured data schema generators
 */

import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateQRScanProSchema,
  generateLuckyCoinFlipSchema,
  generateBreadcrumbSchema,
  generateBreadcrumbsFromPath
} from './schemas';

/**
 * Example: Homepage with multiple schemas
 */
export const homepageSchemas = [
  generateOrganizationSchema(),
  generateWebSiteSchema(),
  generateQRScanProSchema(),
  generateLuckyCoinFlipSchema()
];

/**
 * Example: Legal page with breadcrumbs
 */
export const privacyPolicySchemas = [
  generateOrganizationSchema(),
  generateBreadcrumbSchema(
    generateBreadcrumbsFromPath('/privacypolicy')
  )
];

/**
 * Example: Custom organization schema with overrides
 */
export const customOrganizationSchema = generateOrganizationSchema({
  email: 'custom@example.com',
  socialLinks: [
    'https://twitter.com/custom',
    'https://facebook.com/custom'
  ]
});

/**
 * Example: Custom app schema with updated ratings
 */
export const customQRScanProSchema = generateQRScanProSchema({
  ratingValue: '4.5',
  ratingCount: '15000'
});

/**
 * Example: Generate breadcrumbs for any route
 */
export const getBreadcrumbsForRoute = (pathname) => {
  const breadcrumbs = generateBreadcrumbsFromPath(pathname);
  return generateBreadcrumbSchema(breadcrumbs);
};
