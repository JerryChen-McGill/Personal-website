import React from 'react';
import { Section } from '../types';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  url: string;
}

const seoConfigs: Record<Section, SEOConfig> = {
  home: {
    title: "Jerry Chen - Researcher & Developer | McGill University",
    description: "PhD student in Learning Sciences at McGill University. Passionate about creating wonderful learning experiences and bridging education with AI technology.",
    keywords: "Jerry Chen, McGill, Learning Sciences, AI in Education, Researcher, Developer",
    ogImage: "/Personal-website/img/me.PNG",
    url: "https://jerrychen-mcgill.github.io"
  },
  research: {
    title: "Research - Jerry Chen | AI in Mathematics Education",
    description: "My research focuses on technology integration in mathematics education, specifically the design, application, and evaluation of generative AI to enhance mathematical learning.",
    keywords: "AI in Education, Mathematics Education, Generative AI, TIMSS, PhD Research",
    ogImage: "/Personal-website/img/portfolio.jpg",
    url: "https://jerrychen-mcgill.github.io#research"
  },
  teaching: {
    title: "Teaching Experience - Jerry Chen | Education & Pedagogy",
    description: "Teaching assistant at McGill University, summer camp counselor, and elementary mathematics teacher with experience in bilingual education.",
    keywords: "Teaching, Education, McGill TA, Mathematics Teacher, STEM Education",
    ogImage: "/Personal-website/img/ta.jpg",
    url: "https://jerrychen-mcgill.github.io#teaching"
  },
  products: {
    title: "Product Building - Jerry Chen | Educational Technology",
    description: "Showcasing innovative products I've built — from AI-powered learning tools to engaging educational platforms.",
    keywords: "Educational Technology, Product Development, AI Tools, Learning Platforms",
    ogImage: "/Personal-website/img/portfolio.jpg",
    url: "https://jerrychen-mcgill.github.io#products"
  },
  daily: {
    title: "Daily Life - Jerry Chen | Hobbies & Interests",
    description: "Exploring the intersection of technology, education, and daily creativity. Calligraphy, board games, frisbee, and reading.",
    keywords: "Calligraphy, Board Games, Ultimate Frisbee, Reading, Hobbies",
    ogImage: "/Personal-website/img/Calligraphy.jpg",
    url: "https://jerrychen-mcgill.github.io#daily"
  },
  blog: {
    title: "Blog - Jerry Chen | Research & Technology Insights",
    description: "Thoughts on AI in education, educational technology, and my research journey in Learning Sciences at McGill University.",
    keywords: "Blog, AI in Education, EdTech, Research Blog, Jerry Chen",
    ogImage: "/Personal-website/img/portfolio.jpg",
    url: "https://jerrychen-mcgill.github.io#blog"
  }
};

export const useSEO = (activeSection: Section) => {
  React.useEffect(() => {
    const config = seoConfigs[activeSection];

    // Update title
    document.title = config.title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) meta.setAttribute('property', name);
        else meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', config.description);
    updateMeta('keywords', config.keywords);
    updateMeta('og:title', config.title, true);
    updateMeta('og:description', config.description, true);
    updateMeta('og:image', config.ogImage, true);
    updateMeta('og:url', config.url, true);
    updateMeta('og:type', 'website', true);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', config.title);
    updateMeta('twitter:description', config.description);
    updateMeta('twitter:image', config.ogImage);
  }, [activeSection]);
};

export const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jerry Chen",
  "jobTitle": "PhD Student in Learning Sciences",
  "affiliation": { "@type": "Organization", "name": "McGill University" },
  "url": "https://jerrychen-mcgill.github.io",
  "sameAs": [
    "https://github.com/JerryChen-McGill",
    "https://www.linkedin.com/in/jerry-chen-mcgill/"
  ],
  "knowsAbout": ["Learning Sciences", "Artificial Intelligence in Education", "Mathematics Education", "Educational Technology"]
});

export const addStructuredData = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(generateStructuredData());
  document.head.appendChild(script);
};

export const addLazyImageStyles = () => {
  const styleId = 'lazy-image-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      .lazy-image-container { will-change: transform; }
      .lazy-image-container img { backface-visibility: hidden; }
    `;
    document.head.appendChild(style);
  }
};

export default useSEO;
