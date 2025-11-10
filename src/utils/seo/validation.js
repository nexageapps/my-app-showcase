/**
 * SEO Metadata Validation Utilities
 * Provides validation functions for SEO best practices
 */

/**
 * Validates title length according to SEO best practices
 * Recommended: 50-60 characters
 * @param {string} title - The page title to validate
 * @returns {object} Validation result with isValid flag and message
 */
export const validateTitle = (title) => {
  if (!title) {
    return {
      isValid: false,
      message: 'Title is required'
    };
  }

  const length = title.length;
  
  if (length < 30) {
    return {
      isValid: false,
      message: `Title is too short (${length} chars). Recommended: 50-60 characters.`,
      severity: 'warning'
    };
  }
  
  if (length > 60) {
    return {
      isValid: false,
      message: `Title exceeds recommended length (${length} chars). Recommended: 50-60 characters. Title may be truncated in search results.`,
      severity: 'warning'
    };
  }
  
  return {
    isValid: true,
    message: `Title length is optimal (${length} chars)`,
    severity: 'success'
  };
};

/**
 * Validates meta description length according to SEO best practices
 * Recommended: 150-160 characters
 * @param {string} description - The meta description to validate
 * @returns {object} Validation result with isValid flag and message
 */
export const validateDescription = (description) => {
  if (!description) {
    return {
      isValid: false,
      message: 'Description is required'
    };
  }

  const length = description.length;
  
  if (length < 120) {
    return {
      isValid: false,
      message: `Description is too short (${length} chars). Recommended: 150-160 characters.`,
      severity: 'warning'
    };
  }
  
  if (length > 160) {
    return {
      isValid: false,
      message: `Description exceeds recommended length (${length} chars). Recommended: 150-160 characters. Description may be truncated in search results.`,
      severity: 'warning'
    };
  }
  
  return {
    isValid: true,
    message: `Description length is optimal (${length} chars)`,
    severity: 'success'
  };
};

/**
 * Validates SEO metadata and logs warnings in development mode
 * @param {object} metadata - SEO metadata object with title and description
 * @param {string} metadata.title - Page title
 * @param {string} metadata.description - Meta description
 * @param {string} pageName - Name of the page for logging context
 */
export const validateSEOMetadata = (metadata, pageName = 'Unknown Page') => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { title, description } = metadata;
  
  // Validate title
  const titleValidation = validateTitle(title);
  if (!titleValidation.isValid) {
    console.warn(`[SEO Validation - ${pageName}] ${titleValidation.message}`);
  }
  
  // Validate description
  const descriptionValidation = validateDescription(description);
  if (!descriptionValidation.isValid) {
    console.warn(`[SEO Validation - ${pageName}] ${descriptionValidation.message}`);
  }
};

/**
 * Validates all SEO metadata fields
 * @param {object} metadata - Complete SEO metadata object
 * @returns {object} Validation results for all fields
 */
export const validateAllMetadata = (metadata) => {
  const results = {
    title: validateTitle(metadata.title),
    description: validateDescription(metadata.description),
    hasCanonical: !!metadata.canonical,
    hasOgImage: !!metadata.ogImage,
    hasKeywords: metadata.keywords && metadata.keywords.length > 0
  };
  
  return results;
};
