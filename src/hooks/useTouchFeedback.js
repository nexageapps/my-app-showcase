import { useState, useEffect } from 'react';

/**
 * Custom hook for providing touch interaction feedback
 * Tracks touch state for visual feedback on mobile devices
 * 
 * @param {React.RefObject} ref - Reference to the element to track
 * @returns {boolean} isPressed - Whether the element is currently being touched
 */
const useTouchFeedback = (ref) => {
  const [isPressed, setIsPressed] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleTouchStart = () => setIsPressed(true);
    const handleTouchEnd = () => setIsPressed(false);
    const handleTouchCancel = () => setIsPressed(false);
    
    // Use passive listeners for better scroll performance
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });
    element.addEventListener('touchcancel', handleTouchCancel, { passive: true });
    
    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('touchcancel', handleTouchCancel);
    };
  }, [ref]);
  
  return isPressed;
};

export default useTouchFeedback;
