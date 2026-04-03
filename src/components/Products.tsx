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
      className="max-w-5xl pt-12"
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
      <div className="space-y-16">
        {products.map((p, i) => (
          <div key={i} className="group relative rounded-[40px] overflow-hidden border border-black/5 bg-white">
            <div className="aspect-[21/9] overflow-hidden">
              <LazyImage
                src={p.image}
                alt={p.name}
                aspectRatio="21/9"
                rounded="0"
                priority={i === 0}
              />
            </div>
            <div className="p-12 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
              <div>
                <h3 className="text-3xl font-serif italic mb-2">{p.name}</h3>
                <p className="text-[#666] max-w-xl">{p.desc}</p>
              </div>
              <a 
                href={p.link} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-sm font-bold hover:bg-[#444] transition-all whitespace-nowrap"
              >
                {content.visitProject} <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;
