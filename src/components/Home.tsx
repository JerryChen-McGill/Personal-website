import React from 'react';
import { motion } from 'motion/react';
import { HomeContent } from '../types';

interface HomeProps {
  content: HomeContent;
}

export const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[80vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
    >
      <div className="flex-1 max-w-2xl">
        <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
          {content.greeting} <br />
          <span className="italic text-[#8E8E8E]">{content.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#555] font-light leading-relaxed mb-12">
          {content.intro}
        </p>
      </div>
      
      <div className="flex-1 w-full max-w-md">
        <div className="aspect-[4/5] bg-black/5 rounded-[40px] overflow-hidden relative group">
          <img 
            src="/Personal-website/img/me.PNG" 
            alt="Jerry Chen" 
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
