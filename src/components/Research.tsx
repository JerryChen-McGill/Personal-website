import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { ResearchContent, ResearchProject } from '../types';
import { LazyImage } from './LazyImage';

interface ResearchProps {
  content: ResearchContent;
  projects: ResearchProject[];
}

const imageProjects = [
  { title: "AI in Math Education", image: "https://picsum.photos/seed/mathai/800/600" },
  { title: "TIMSS Data Analysis", image: "https://picsum.photos/seed/timss/800/600" },
  { title: "Teacher Training Design", image: "https://picsum.photos/seed/teacher/800/600" },
  { title: "Generative AI Evaluation", image: "https://picsum.photos/seed/genai/800/600" },
  { title: "K-12 Tech Integration", image: "https://picsum.photos/seed/k12/800/600" },
];

export const Research: React.FC<ResearchProps> = ({ content, projects }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl pt-12"
    >
      <h2 className="section-title">{content.title}</h2>
      <div className="mb-16">
        <p className="text-xl text-[#555] leading-relaxed mb-8">
          {content.intro}
        </p>
        <a 
          href="https://docs.google.com/document/d/1ISTeii31qJ0XzVYvTRXLys1qS5y4nvQ8BvBhtQu2UM8/edit?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
        >
          <FileText size={18} /> {content.cvLink}
        </a>
      </div>

      <div className="space-y-12 mb-24">
        {projects.map((p, i) => (
          <div key={i} className="group border-l-2 border-black/5 pl-8 py-2 hover:border-black transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-black/5 px-2 py-0.5 rounded text-[#888]">{p.type}</span>
              <span className="font-mono text-xs text-[#AAA]">{p.year}</span>
            </div>
            <p className="text-[#333] leading-relaxed italic">{p.content}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
        {imageProjects.map((p, i) => (
          <LazyImage
            key={i}
            src={p.image}
            alt={p.title}
            aspectRatio="1/1"
            rounded="1rem"
            priority={i < 2}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Research;
