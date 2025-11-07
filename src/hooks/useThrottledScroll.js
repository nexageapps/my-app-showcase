import { useEffect, useRef } from 'react';

/**
 * Custom hook for optimized scroll event handling
 * Throttles scroll events to improve performance
 * 
 * @param {Function} callback - Function to call on scroll
 * @param {number} delay - Throttle delay in milliseconds (default: 100ms)
 */
const useThrottledScroll = (callback, delay = 100) => {
  const timeoutRef = useRef(null);
  const lastRunRef = useRef(Date.now());
  
  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const timeSinceLastRun = now - lastRunRef.current;
      
      // If enough time has passed, execute immediately
      if (timeSinceLastRun >= delay) {
        callback();
        lastRunRef.current = now;
        return;
      }
      
      // Otherwise, schedule for later
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        callback();
        lastRunRef.current = Date.now();
        timeoutRef.current = null;
      }, delay - timeSinceLastRun);
    };
    
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
};

export default useThrottledScroll;
