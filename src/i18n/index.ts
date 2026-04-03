// Internationalization translations for Jerry's Portfolio

import { Translations } from '../types';

export const en: Translations = {
  nav: {
    home: 'Home',
    research: 'Research',
    teaching: 'Teaching',
    products: 'Product',
    daily: 'Daily Life',
    blog: 'Blog',
  },
  home: {
    greeting: 'Hello,',
    name: "I'm Jerry.",
    intro: 'A researcher and developer passionate about creating wonderful learning experiences and bridging the gap between education and state-of-the-art technologies. I enjoy exploring the intersection of technology, education, and daily creativity.',
    cta: 'Say Hello'
  },
  research: {
    title: 'Research',
    intro: 'I am a PhD student in Learning Sciences at McGill University, working with Professor Nikki G. Lobczowski in the CREATE Lab. My research focuses on technology integration in mathematics education, specifically the design, application, and evaluation of generative AI to enhance mathematical learning.',
    cvLink: 'View Research CV'
  },
  teaching: {
    title: 'Teaching Experience',
    viewResume: 'View Resume',
    onSite: 'On-site',
    online: 'Online'
  },
  products: {
    title: 'Product Building',
    viewResume: 'View Resume',
    visitProject: 'Visit Project'
  },
  daily: {
    title: 'Daily Life'
  },
  blog: {
    title: 'Blog',
    readMore: 'Read More'
  },
  footer: {
    copyright: 'Built with passion and code.',
    sayHello: 'Say Hello'
  }
};

export const zh: Translations = {
  nav: {
    home: '主页',
    research: '研究',
    teaching: '教学',
    products: '产品',
    daily: '日常生活',
    blog: '博客',
  },
  home: {
    greeting: '你好，',
    name: "我是 Jerry。",
    intro: '我是一名研究员和开发人员，热衷于创造精彩的学习体验，并致力于弥合教育与最先进技术之间的鸿沟。我喜欢探索技术、教育和日常创造力的交汇点。',
    cta: '打个招呼'
  },
  research: {
    title: '研究',
    intro: '我是麦吉尔大学学习科学专业的博士生，在 CREATE 实验室师从 Nikki G. Lobczowski 教授。我的研究重点是数学教育中的技术整合，特别是生成式人工智能在增强数学学习方面的设计、应用和评估。',
    cvLink: '查看研究简历'
  },
  teaching: {
    title: '教学经验',
    viewResume: '查看简历',
    onSite: '线下',
    online: '线上'
  },
  products: {
    title: '产品开发',
    viewResume: '查看简历',
    visitProject: '访问项目'
  },
  daily: {
    title: '日常生活'
  },
  blog: {
    title: '博客',
    readMore: '阅读更多'
  },
  footer: {
    copyright: '用热爱和代码构建。',
    sayHello: '打个招呼'
  }
};

export const fr: Translations = {
  nav: {
    home: 'Accueil',
    research: 'Recherche',
    teaching: 'Enseignement',
    products: 'Produits',
    daily: 'Vie Quotidienne',
    blog: 'Blog',
  },
  home: {
    greeting: 'Bonjour,',
    name: "Je suis Jerry.",
    intro: "Un chercheur et développeur passionné par la création d'expériences d'apprentissage merveilleuses et par le comblement du fossé entre l'éducation et les technologies de pointe. J'aime explorer l'intersection de la technologie, de l'éducation et de la créativité quotidienne.",
    cta: 'Dire Bonjour'
  },
  research: {
    title: 'Recherche',
    intro: "Je suis étudiant au doctorat en sciences de l'apprentissage à l'Université McGill, travaillant avec la professeure Nikki G. Lobczowski au laboratoire CREATE. Mes recherches portent sur l'intégration des technologies dans l'enseignement des mathématiques, plus précisément sur la conception, l'application et l'évaluation de l'IA générative pour améliorer l'apprentissage des mathématiques.",
    cvLink: 'Voir le CV de recherche'
  },
  teaching: {
    title: "Expérience d'Enseignement",
    viewResume: 'Voir le CV',
    onSite: 'Sur place',
    online: 'En ligne'
  },
  products: {
    title: 'Création de Produits',
    viewResume: 'Voir le CV',
    visitProject: 'Voir le Projet'
  },
  daily: {
    title: 'Vie Quotidienne'
  },
  blog: {
    title: 'Blog',
    readMore: 'Lire Plus'
  },
  footer: {
    copyright: 'Construit avec passion et code.',
    sayHello: 'Dire Bonjour'
  }
};

export const translations = { en, zh, fr };

export default translations;
