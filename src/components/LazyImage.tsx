import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  rounded?: string;
  onClick?: () => void;
  priority?: boolean;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio,
  rounded,
  onClick,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px', threshold: 0.01 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  // Optimize image URL for better performance
  const getOptimizedSrc = (originalSrc: string): string => {
    if (originalSrc.includes('picsum.photos')) {
      const match = originalSrc.match(/picsum\.photos\/seed\/([^/]+)\/(\d+)\/(\d+)/);
      if (match) {
        const [, seed, width, height] = match;
        const newWidth = Math.min(parseInt(width) * 0.8, 800);
        const newHeight = Math.min(parseInt(height) * 0.8, 600);
        return `https://picsum.photos/seed/${seed}/${newWidth}/${newHeight}`;
      }
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    borderRadius: rounded || '0',
    aspectRatio: aspectRatio || undefined,
  };

  return (
    <div
      ref={containerRef}
      className={`lazy-image-container ${className}`}
      style={containerStyle}
      onClick={onClick}
    >
      {/* Skeleton placeholder */}
      {!isLoaded && !error && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}

      {/* Actual image */}
      {isInView && !error && (
        <img
          src={optimizedSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

export default LazyImage;
