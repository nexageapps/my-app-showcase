import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import StructuredData from './StructuredData';

/**
 * SEO Component for managing document head meta tags and structured data
 * Uses React Helmet Async for dynamic meta tag management
 */
const SEO = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  ogType = 'website',
  ogUrl,
  twitterCard = 'summary_large_image',
  structuredData = null,
  noindex = false,
  lang = 'en'
}) => {
  // Validate SEO metadata in development
  if (process.env.NODE_ENV === 'development') {
    if (title && title.length > 60) {
      console.warn(`SEO Warning: Title exceeds 60 characters (${title.length} chars): "${title}"`);
    }
    if (description && description.length > 160) {
      console.warn(`SEO Warning: Description exceeds 160 characters (${description.length} chars): "${description}"`);
    }
  }

  // Use canonical URL as og:url if not explicitly provided
  const openGraphUrl = ogUrl || canonical;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(', ')} />
        )}
        
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Robots Meta Tag */}
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        {openGraphUrl && <meta property="og:url" content={openGraphUrl} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta property="og:image:alt" content={title} />}
        <meta property="og:site_name" content="NexageApps" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        {ogImage && <meta name="twitter:image:alt" content={title} />}
      </Helmet>
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && <StructuredData data={structuredData} />}
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  ogUrl: PropTypes.string,
  twitterCard: PropTypes.string,
  structuredData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
  noindex: PropTypes.bool,
  lang: PropTypes.string
};

export default SEO;
