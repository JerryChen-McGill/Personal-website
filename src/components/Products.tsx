import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, Github } from 'lucide-react';
import { ProductsContent, Product } from '../types';
import { LazyImage } from './LazyImage';

interface ProductsProps {
  content: ProductsContent;
  products: Product[];
}

export const Products: React.FC<ProductsProps> = ({ content, products }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl pt-12"
    >
      <header className="mb-14 grid gap-8 border-b border-black/10 pb-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A7866]">{content.focusLine}</p>
          <h2 className="section-title mb-5">{content.title}</h2>
          <p className="max-w-2xl text-base leading-8 text-[#555] md:text-lg">{content.intro}</p>
        </div>
        <a 
          href="https://mcgill-my.sharepoint.com/:b:/g/personal/shuai_chen_mail_mcgill_ca/IQBio9_r-UYWQbZTwuLfVVb3AZ1Vkb46nD7L8ecq63fyv88?e=ThHsg4" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex h-fit items-center justify-center gap-2 rounded-full bg-[#2D2D2D] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
        >
          <FileText size={18} /> {content.viewResume}
        </a>
      </header>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-serif text-2xl italic text-[#3A332D]">{content.selectedProjects}</h3>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((p, i) => (
          <article key={p.name} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/5">
            <a href={p.link} target="_blank" rel="noreferrer" aria-label={`${p.isMiniProgram ? content.scanInWechat : content.visitProject}: ${p.name}`} className="block overflow-hidden bg-[#F1EFEC]">
              <LazyImage
                src={p.image}
                alt={p.name}
                aspectRatio="4/3"
                rounded="0"
                priority={i === 0}
                className="transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-7">
                <h3 className="mb-2 font-serif text-2xl italic text-[#302D2A]">{p.name}</h3>
                <p className="text-sm leading-7 text-[#666]">{p.desc}</p>
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-black/5 pt-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2D2D2D] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
                >
                  {p.isMiniProgram ? content.scanInWechat : content.visitProject} <ExternalLink size={14} />
                </a>
                {p.repoLink && p.repoLink !== p.link && (
                  <a
                    href={p.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#89837C] transition-colors hover:text-[#2D2D2D]"
                  >
                    <Github size={14} /> {content.visitGitHub}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;
