import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Context for global mobile state management
 * Provides device information throughout the application
 */
const MobileContext = createContext({
  isMobile: false,
  isTablet: false,
  isTouchDevice: false,
  viewportWidth: 0,
  viewportHeight: 0
});

/**
 * Provider component for mobile context
 * Wraps the application to provide mobile state to all components
 */
export const MobileProvider = ({ children }) => {
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
    
    // Update on resize with debouncing for performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateDeviceInfo, 150);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);
  
  return (
    <MobileContext.Provider value={deviceInfo}>
      {children}
    </MobileContext.Provider>
  );
};

/**
 * Custom hook to access mobile context
 * @returns {Object} Device information from context
 */
export const useMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};

export default MobileContext;
