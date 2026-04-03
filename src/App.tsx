import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail } from 'lucide-react';
import { Section } from './types';
import { translations } from './i18n';
import { useLanguage } from './hooks/useLanguage';
import { useSection } from './hooks/useSection';
import { useSEO, addStructuredData, addLazyImageStyles } from './utils/seo';

// Components
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Research } from './components/Research';
import { Teaching } from './components/Teaching';
import { Products } from './components/Products';
import { DailyLife } from './components/DailyLife';
import { Blog } from './components/Blog';
import { ScrollProgress } from './components/common/ScrollProgress';
import { ScrollToTop } from './components/common/ScrollToTop';

// Data
import { researchProjects } from './data/research';
import teachingData from './data/teaching';
import { products, default as interestsData } from './data/products';
import { getPublishedPosts, getAllTags } from './data/blog';

export default function App() {
  const { lang, setLang } = useLanguage();
  const { activeSection, setActiveSection } = useSection();
  const t = translations[lang];

  // Initialize global utilities
  useEffect(() => {
    addStructuredData();
    addLazyImageStyles();
  }, []);

  // Update SEO on section change
  useSEO(activeSection);

  // Smooth scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home content={t.home} />;
      case 'research':
        return <Research content={t.research} projects={researchProjects} />;
      case 'teaching':
        return <Teaching content={t.teaching} experiences={teachingData[lang]} />;
      case 'products':
        return <Products content={t.products} products={products} />;
      case 'daily':
        return <DailyLife content={t.daily} interests={interestsData[lang]} />;
      case 'blog':
        return <Blog posts={getPublishedPosts()} allTags={getAllTags()} />;
      default:
        return <Home content={t.home} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      {/* Optimization 3 & 4: SEO + scroll utilities */}
      <ScrollProgress />
      <ScrollToTop />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        lang={lang}
        setLang={setLang}
        navLabels={t.nav}
      />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSection}-${lang}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#AAA] text-xs mt-24">
        <p>© {new Date().getFullYear()} Jerry Chen. {t.footer.copyright}</p>
        <div className="flex gap-6">
          <a href="mailto:shuai.chen@mail.mcgill.ca" className="flex items-center gap-1 hover:text-[#2D2D2D] transition-colors">
            <Mail size={14} /> {t.footer.sayHello}
          </a>
          <a href="https://github.com/JerryChen-McGill" className="hover:text-[#2D2D2D] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jerry-chen-mcgill/" className="hover:text-[#2D2D2D] transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
