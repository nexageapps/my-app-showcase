import React from 'react';
import styles from './Skeleton.module.css';

/**
 * Skeleton component for loading states
 * Provides visual feedback during content loading with shimmer animation
 * 
 * @param {string} variant - Type of skeleton: 'text', 'title', 'image', 'card'
 * @param {string} width - Custom width (e.g., '100%', '200px')
 * @param {string} height - Custom height (e.g., '20px', '100px')
 * @param {string} className - Additional CSS classes
 */
const Skeleton = ({ 
  variant = 'text', 
  width, 
  height, 
  className = '' 
}) => {
  const skeletonClass = `${styles.skeleton} ${styles[variant]} ${className}`;
  
  const style = {
    ...(width && { width }),
    ...(height && { height })
  };

  return (
    <div 
      className={skeletonClass} 
      style={style}
      aria-busy="true"
      aria-live="polite"
    />
  );
};

export default Skeleton;
