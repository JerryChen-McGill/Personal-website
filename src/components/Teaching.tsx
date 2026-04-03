import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { TeachingContent, TeachingExperience } from '../types';
import { LazyImage } from './LazyImage';

interface TeachingProps {
  content: TeachingContent;
  experiences: TeachingExperience[];
}

export const Teaching: React.FC<TeachingProps> = ({ content, experiences }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <div className="flex justify-between items-start mb-12">
        <h2 className="section-title">{content.title}</h2>
        <a 
          href="https://mcgill-my.sharepoint.com/:b:/g/personal/shuai_chen_mail_mcgill_ca/IQCRUZiC7t4rSoNyWh5DlNm6Aeui2ddzFZXotaF4ZoHQq40" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
        >
          <FileText size={18} /> {content.viewResume}
        </a>
      </div>
      <div className="space-y-32">
        {experiences.map((exp, i) => (
          <div key={i} className={`flex flex-col md:flex-row gap-12 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-[#AAA] uppercase tracking-widest">{exp.period}</span>
                <span className="px-2 py-0.5 bg-black/5 rounded text-[10px] font-bold text-[#888] uppercase">{exp.location}</span>
              </div>
              <h3 className="text-3xl font-serif italic mb-2">{exp.role}</h3>
              <p className="text-lg font-medium text-[#888] mb-6">{exp.institution}</p>
              <ul className="space-y-4">
                {exp.points.map((point, pi) => (
                  <li key={pi} className="flex gap-3 text-[#555] leading-relaxed">
                    <span className="text-black/20 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl shadow-black/5">
                <LazyImage
                  src={exp.image}
                  alt={exp.role}
                  aspectRatio="4/3"
                  rounded="2.5rem"
                  priority={i === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teaching;
