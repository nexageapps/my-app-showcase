import React, { useState } from 'react';
import LazyImage from '../LazyImage/LazyImage';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images = [], appName }) => {
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (index) => {
    setFailedImages(prev => ({ ...prev, [index]: true }));
  };

  // Render placeholder when no images or all images failed
  const renderPlaceholder = () => (
    <div className={styles.placeholder} role="img" aria-label={`${appName} placeholder image`}>
      <svg 
        className={styles.placeholderIcon} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );

  // No images provided - show placeholder
  if (!images || images.length === 0) {
    return (
      <div className={styles.gallery} role="region" aria-label={`${appName} image gallery`}>
        <div className={styles.imageWrapper}>
          {renderPlaceholder()}
        </div>
      </div>
    );
  }

  // Filter out failed images
  const validImages = images.filter((_, index) => !failedImages[index]);

  // All images failed - show placeholder
  if (validImages.length === 0 && Object.keys(failedImages).length > 0) {
    return (
      <div className={styles.gallery} role="region" aria-label={`${appName} image gallery`}>
        <div className={styles.imageWrapper}>
          {renderPlaceholder()}
        </div>
      </div>
    );
  }

  const imageCount = images.length;

  return (
    <div 
      className={`${styles.gallery} ${styles[`gallery${imageCount}`]}`}
      role="region"
      aria-label={`${appName} image gallery with ${imageCount} screenshot${imageCount > 1 ? 's' : ''}`}
    >
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          {failedImages[index] ? (
            renderPlaceholder()
          ) : (
            <LazyImage
              src={image}
              alt={`${appName} screenshot ${index + 1} of ${imageCount}`}
              className={styles.image}
              aspectRatio="9 / 19.5"
              width="220"
              height="476"
              sizes="(max-width: 640px) 160px, (max-width: 1023px) 190px, 220px"
              onError={() => handleImageError(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
