import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * StructuredData Component
 * Renders JSON-LD structured data script tags
 * Supports single schema object or array of schema objects
 */
const StructuredData = ({ data }) => {
  if (!data) {
    return null;
  }

  // Handle array of schemas
  if (Array.isArray(data)) {
    return (
      <Helmet>
        {data.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
    );
  }

  // Handle single schema object
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

StructuredData.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

export default StructuredData;
