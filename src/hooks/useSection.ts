import { useState, useEffect, useCallback } from 'react';
import { Section } from '../types';

export const useSection = () => {
  const [activeSection, setActiveSection] = useState<Section>(() => {
    // Check URL hash
    const hash = window.location.hash.slice(1) as Section;
    const validSections: Section[] = ['home', 'research', 'teaching', 'products', 'daily'];
    return validSections.includes(hash) ? hash : 'home';
  });

  // Update URL hash when section changes
  useEffect(() => {
    if (activeSection === 'home') {
      window.history.replaceState(null, '', window.location.pathname);
    } else {
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  // Listen for hash changes (back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as Section;
      const validSections: Section[] = ['home', 'research', 'teaching', 'products', 'daily'];
      if (validSections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections: Section[] = ['home', 'research', 'teaching', 'products', 'daily'];
      const currentIndex = sections.indexOf(activeSection);
      
      if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
        setActiveSection(sections[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setActiveSection(sections[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const goToNextSection = useCallback(() => {
    const sections: Section[] = ['home', 'research', 'teaching', 'products', 'daily'];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  }, [activeSection]);

  const goToPrevSection = useCallback(() => {
    const sections: Section[] = ['home', 'research', 'teaching', 'products', 'daily'];
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1]);
    }
  }, [activeSection]);

  return { activeSection, setActiveSection, goToNextSection, goToPrevSection };
};

export default useSection;