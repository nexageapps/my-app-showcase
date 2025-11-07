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
      {isInView && !hasError && (
        <picture>
          {/* WebP format with fallback */}
          {src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg') ? (
            <source 
              type="image/webp" 
              srcSet={srcSet || src.replace(/\.(png|jpg|jpeg)$/i, '.webp')}
              sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
            />
          ) : null}
          
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
            alt={alt}
            className={`${styles.image} ${isLoaded ? styles.loaded : styles.loading}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;
