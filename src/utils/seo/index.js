/**
 * SEO Utilities
 * Export all SEO-related utilities and configurations
 */

export { SEO_CONFIG, DEFAULT_SEO, getSEOConfig, mergeSEOConfig } from './seoConfig';
export { validateTitle, validateDescription, validateSEOMetadata, validateAllMetadata } from './validation';
export { default as SEO } from './SEO';
export { default as StructuredData } from './StructuredData';
export {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateQRScanProSchema,
  generateLuckyCoinFlipSchema,
  generateBreadcrumbSchema,
  generateBreadcrumbsFromPath,
  generateFAQSchema
} from './schemas';
