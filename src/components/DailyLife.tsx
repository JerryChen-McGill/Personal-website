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
          <div key={i} className="group text-center">
            <button
              type="button"
              className="block w-full overflow-hidden rounded-3xl bg-black cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2D2D2D]"
              onClick={() => setSelectedImage(item.image)}
              aria-label={`View ${item.title} image`}
            >
              <LazyImage
                src={item.image}
                alt={item.title}
                aspectRatio="3/4"
                rounded="1.5rem"
                priority={i < 2}
              />
            </button>
            <h3 className="mt-4 text-lg font-semibold text-[#2D2D2D] transition-colors group-hover:text-[#6B5B4D]">
              <span className="mr-2" aria-hidden="true">{item.icon}</span>
              {item.title}
            </h3>
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

