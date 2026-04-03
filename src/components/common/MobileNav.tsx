import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Section } from '../types';
import { cn } from '../lib/utils';

interface MobileNavProps {
  items: Array<{ id: Section; label: string }>;
  activeSection: Section;
  setActiveSection: (s: Section) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  items,
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 -mr-2 text-black/60 hover:text-black transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-black/5">
          <span className="font-serif italic text-xl font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-black/60 hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-6">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl transition-all duration-200",
                    activeSection === item.id
                      ? "bg-black text-white font-medium"
                      : "text-black/60 hover:bg-black/5 hover:text-black"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-black/5">
          <p className="text-xs text-black/40">Jerry Chen Portfolio</p>
        </div>
      </motion.div>
    </>
  );
};

import { AnimatePresence, motion } from 'motion/react';

export default MobileNav;
