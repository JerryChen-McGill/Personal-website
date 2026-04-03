import React from 'react';
import { Section, Language } from '../types';
import { cn } from '../lib/utils';
import { MobileNav } from './common/MobileNav';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
  lang: Language;
  setLang: (l: Language) => void;
  navLabels: {
    home: string;
    research: string;
    teaching: string;
    products: string;
    daily: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  lang,
  setLang,
  navLabels,
}) => {
  const items: { id: Section; label: string }[] = [
    { id: 'home', label: navLabels.home },
    { id: 'research', label: navLabels.research },
    { id: 'teaching', label: navLabels.teaching },
    { id: 'products', label: navLabels.products },
    { id: 'daily', label: navLabels.daily },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          className="font-serif italic text-xl font-semibold tracking-tight cursor-pointer"
          onClick={() => setActiveSection('home')}
        >
          Jerry Chen
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "nav-button",
                activeSection === item.id ? "nav-button-active" : "nav-button-inactive"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex bg-black/5 p-1 rounded-full">
            {(['en', 'zh', 'fr'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2 py-1 rounded-full text-[10px] font-bold uppercase transition-all",
                  lang === l ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mobile Navigation (Optimization 4: replaces select dropdown) */}
          <div className="lg:hidden">
            <MobileNav
              items={items}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
