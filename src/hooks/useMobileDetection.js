import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting mobile devices and viewport characteristics
 * Provides device type information and viewport dimensions
 * 
 * @returns {Object} Device information object
 * @returns {boolean} isMobile - True if viewport width < 768px
 * @returns {boolean} isTablet - True if viewport width between 768px and 1024px
 * @returns {boolean} isTouchDevice - True if device supports touch events
 * @returns {number} viewportWidth - Current viewport width in pixels
 * @returns {number} viewportHeight - Current viewport height in pixels
 */
const useMobileDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isTouchDevice: false,
    viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        viewportWidth: width,
        viewportHeight: window.innerHeight
      });
    };
    
    // Initial detection
    updateDeviceInfo();
    
    // Update on resize
    window.addEventListener('resize', updateDeviceInfo);
    
    return () => window.removeEventListener('resize', updateDeviceInfo);
  }, []);
  
  return deviceInfo;
};

export default useMobileDetection;
