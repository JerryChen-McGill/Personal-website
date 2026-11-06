import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink } from 'lucide-react';
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
      <h2 className="section-title">{content.title}</h2>
      <div className="flex justify-end mb-8">
        <a 
          href="https://mcgill-my.sharepoint.com/:b:/g/personal/shuai_chen_mail_mcgill_ca/IQBio9_r-UYWQbZTwuLfVVb3AZ1Vkb46nD7L8ecq63fyv88?e=ThHsg4" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
        >
          <FileText size={18} /> {content.viewResume}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <article key={p.link} className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <a href={p.link} target="_blank" rel="noreferrer" aria-label={`${content.visitProject}: ${p.name}`} className="block overflow-hidden">
              <LazyImage
                src={p.image}
                alt={p.name}
                aspectRatio="4/3"
                rounded="0"
                priority={i === 0}
                className="transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
            <div className="flex min-h-44 flex-col p-6">
              <div className="mb-5">
                <h3 className="mb-2 font-serif text-2xl italic">{p.name}</h3>
                <p className="text-sm leading-relaxed text-[#666] line-clamp-3">{p.desc}</p>
              </div>
              <a 
                href={p.link} 
                target="_blank" 
                rel="noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#444]"
              >
                {content.visitProject} <ExternalLink size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;
