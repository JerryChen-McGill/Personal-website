import { useEffect, useRef } from 'react';
import { trackTimeOnPage } from '../utils/analytics';

export const useTimeTracking = () => {
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Track time when user leaves page
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    };

    // Track time on page visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
        trackTimeOnPage(timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Track time on unmount
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    };
  }, []);
};

export default useTimeTracking;
