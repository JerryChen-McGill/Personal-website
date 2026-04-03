// Type definitions for Jerry's Portfolio

export type Section = 'home' | 'research' | 'teaching' | 'products' | 'daily' | 'blog';

export type Language = 'en' | 'zh' | 'fr';

// Navigation
export interface NavItem {
  id: Section;
  label: string;
}

// Home Section
export interface HomeContent {
  greeting: string;
  name: string;
  intro: string;
  cta: string;
}

// Research Section
export interface ResearchProject {
  type: 'Poster' | 'Forthcoming' | 'Published';
  content: string;
  year: string;
}

export interface ResearchImage {
  title: string;
  image: string;
}

export interface ResearchContent {
  title: string;
  intro: string;
  cvLink: string;
}

// Teaching Section
export interface TeachingExperience {
  role: string;
  institution: string;
  period: string;
  points: string[];
  image: string;
  location: 'On-site' | 'Online';
}

export interface TeachingContent {
  title: string;
  viewResume: string;
  onSite: string;
  online: string;
}

// Products Section
export interface Product {
  name: string;
  desc: string;
  link: string;
  image: string;
}

export interface ProductsContent {
  title: string;
  viewResume: string;
  visitProject: string;
}

// Daily Life Section
export interface Interest {
  title: string;
  desc: string;
  icon: string;
  image: string;
}

export interface DailyContent {
  title: string;
}

// Blog Section
export interface BlogContent {
  title: string;
  readMore: string;
}

// Footer
export interface FooterContent {
  copyright: string;
  sayHello: string;
}

// Translations
export interface Translations {
  nav: {
    home: string;
    research: string;
    teaching: string;
    products: string;
    daily: string;
    blog: string;
  };
  home: HomeContent;
  research: ResearchContent;
  teaching: TeachingContent;
  products: ProductsContent;
  daily: DailyContent;
  blog: BlogContent;
  footer: FooterContent;
}
