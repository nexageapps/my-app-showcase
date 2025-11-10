import React, { useState, useEffect, useRef } from 'react';
import styles from './LazyImage.module.css';
import Skeleton from '../Skeleton/Skeleton';

const LazyImage = ({ 
  src, 
  srcSet,
  sizes,
  alt, 
  className = '', 
  aspectRatio = '9 / 19.5',
  width,
  height,
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: load immediately
      setIsInView(true);
      return;
    }

    // Create observer with 50px root margin
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnect observer once image is in view
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleImageLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  const handleImageError = (e) => {
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  const renderPlaceholder = () => (
    <div className={styles.errorPlaceholder} role="img" aria-label={alt || 'Image placeholder'}>
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

  // Handle both string paths and module objects from require()
  const imageSrc = typeof src === 'string' ? src : src?.default || src;

  return (
    <div 
      ref={imgRef} 
      className={`${styles.imageContainer} ${className}`}
      style={{ aspectRatio }}
    >
      {/* Show skeleton while not loaded */}
      {!isLoaded && !hasError && (
        <Skeleton variant="image" className={styles.skeletonOverride} />
      )}

      {/* Show error placeholder if image failed to load */}
      {hasError && renderPlaceholder()}

      {/* Load image only when in view */}
      {isInView && !hasError && imageSrc && (
        <img
          src={imageSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          className={`${styles.image} ${isLoaded ? styles.loaded : styles.loading}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
