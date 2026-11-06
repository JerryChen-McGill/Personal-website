import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { ResearchContent, ResearchProject } from '../types';

interface ResearchProps {
  content: ResearchContent;
  projects: ResearchProject[];
}

export const Research: React.FC<ResearchProps> = ({ content, projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl pt-12"
    >
      <header className="mb-14 border-b border-black/10 pb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7866]">
          {content.focusLine}
        </p>
        <h2 className="section-title mb-5">{content.title}</h2>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-3xl text-base leading-8 text-[#555] md:text-lg">
            {content.intro}
          </p>
          <a
            href="https://docs.google.com/document/d/1ISTeii31qJ0XzVYvTRXLys1qS5y4nvQ8BvBhtQu2UM8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-fit items-center justify-center gap-2 rounded-full bg-[#2D2D2D] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            <FileText size={18} /> {content.cvLink}
          </a>
        </div>
      </header>

      <section aria-labelledby="research-work-heading" className="mb-24">
        <h3 id="research-work-heading" className="mb-6 font-serif text-2xl italic text-[#3A332D]">
          {content.selectedWork}
        </h3>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {projects.map((project, index) => (
            <article key={index} className="grid gap-3 py-6 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8">
              <div className="flex items-start gap-3 md:flex-col md:gap-2">
                <span className="font-mono text-xs text-[#8A7866]">{project.year}</span>
                <span className="rounded-full bg-[#F0EEEA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#756D64]">
                  {project.type}
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-7 text-[#45413D] md:text-base">
                {project.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Research;
