import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DailyContent, Interest } from '../types';
import { LazyImage } from './LazyImage';

interface DailyLifeProps {
  content: DailyContent;
  interests: Interest[];
}

export const DailyLife: React.FC<DailyLifeProps> = ({ content, interests }) => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <h2 className="section-title">{content.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((item, i) => (
          <div 
            key={i} 
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-black cursor-pointer"
            onClick={() => setSelectedImage(item.image)}
          >
            <LazyImage
              src={item.image}
              alt={item.title}
              aspectRatio="3/4"
              rounded="1.5rem"
              priority={i < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DailyLife;
