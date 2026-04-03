import { useEffect } from 'react';
import { initGA, trackSectionView } from '../utils/analytics';
import { useLanguage } from './useLanguage';
import { useSection } from './useSection';
import { useScrollTracking } from './useScrollTracking';
import { useTimeTracking } from './useTimeTracking';

export const useAnalytics = () => {
  const { lang } = useLanguage();
  const { activeSection } = useSection();

  // Initialize scroll and time tracking
  useScrollTracking();
  useTimeTracking();

  // Initialize GA on mount
  useEffect(() => {
    initGA();
  }, []);

  // Track section views
  useEffect(() => {
    trackSectionView(activeSection, lang);
  }, [activeSection, lang]);
};

export default useAnalytics;
