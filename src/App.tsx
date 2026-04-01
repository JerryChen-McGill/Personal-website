import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Code, 
  GraduationCap, 
  Heart, 
  FileText,
  Home as HomeIcon,
  ChevronRight,
  Globe,
  Download
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
type Section = 'home' | 'research' | 'teaching' | 'products' | 'daily';
type Language = 'en' | 'zh' | 'fr';
//test
// --- Translations ---
const translations = {
  en: {
    nav: {
      home: 'Home',
      research: 'Research',
      teaching: 'Teaching',
      products: 'Product',
      daily: 'Daily Life',
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
    footer: {
      copyright: 'Built with passion and code.',
      sayHello: 'Say Hello'
    }
  },
  zh: {
    nav: {
      home: '主页',
      research: '研究',
      teaching: '教学',
      products: '产品',
      daily: '日常生活',
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
    footer: {
      copyright: '用热爱和代码构建。',
      sayHello: '打个招呼'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      research: 'Recherche',
      teaching: 'Enseignement',
      products: 'Produits',
      daily: 'Vie Quotidienne',
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
    footer: {
      copyright: 'Construit avec passion et code.',
      sayHello: 'Dire Bonjour'
    }
  }
};

// --- Components ---

const Navbar = ({ 
  activeSection, 
  setActiveSection, 
  lang, 
  setLang 
}: { 
  activeSection: Section, 
  setActiveSection: (s: Section) => void,
  lang: Language,
  setLang: (l: Language) => void
}) => {
  const t = translations[lang].nav;
  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'research', label: t.research },
    { id: 'teaching', label: t.teaching },
    { id: 'products', label: t.products },
    { id: 'daily', label: t.daily },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-serif italic text-xl font-semibold tracking-tight cursor-pointer" onClick={() => setActiveSection('home')}>
          Jerry Chen
        </div>
        
        <div className="hidden lg:flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "nav-button",
                activeSection === item.id ? "nav-button-active" : "nav-button-inactive"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-black/5 p-1 rounded-full">
            {(['en', 'zh', 'fr'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2 py-1 rounded-full text-[10px] font-bold uppercase transition-all",
                  lang === l ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black"
                )}
              >
                {l}
              </button>
            ))}
          </div>
          
          <div className="lg:hidden flex items-center">
             <select 
              value={activeSection} 
              onChange={(e) => setActiveSection(e.target.value as Section)}
              className="bg-transparent border-none text-sm font-medium focus:ring-0"
             >
               {navItems.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
             </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home = ({ lang }: { lang: Language }) => {
  const t = translations[lang].home;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[80vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
    >
      <div className="flex-1 max-w-2xl">
        <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
          {t.greeting} <br />
          <span className="italic text-[#8E8E8E]">{t.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#555] font-light leading-relaxed mb-12">
          {t.intro}
        </p>
      </div>
      
      <div className="flex-1 w-full max-w-md">
        <div className="aspect-[4/5] bg-black/5 rounded-[40px] overflow-hidden relative group">
          <img 
            src="/img/me.PNG" 
            alt="Jerry Chen" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Research = ({ lang }: { lang: Language }) => {
  const t = translations[lang].research;
  const projects = [
    {
      type: "Poster",
      content: "Chen, S., & Su, J. (2025). Comparing students’ attitudes toward mathematics in the US, Canada, and Singapore: Insights from TIMSS 2023. Poster presented at the Poster Award Competition, ECP-ISG, McGill University.",
      year: "2025"
    },
    {
      type: "Forthcoming",
      content: "Chen, S., Su, J., & Gao, J. (submitted). A Systematic Review of Artificial Intelligence Applications in K–12 Math Education: Trends, Effectiveness, and Challenges. Manuscript submitting to Interactive Learning Environments.",
      year: "2024"
    },
    {
      type: "Forthcoming",
      content: "Lobczowski, N. G., Li, S., Wu, M., Chen, S., Lin, Y., Yu, Y., Yibulyain, M., Dong, J., Damoulianos, H., & Bana, C. (submitted). Tailoring Training for Technology Integration to Secondary Mathematics Teachers: A Design Case. Proposal for the AERA Annual Conference.",
      year: "2024"
    }
  ];

  const imageProjects = [
    { title: "AI in Math Education", image: "https://picsum.photos/seed/mathai/800/600" },
    { title: "TIMSS Data Analysis", image: "https://picsum.photos/seed/timss/800/600" },
    { title: "Teacher Training Design", image: "https://picsum.photos/seed/teacher/800/600" },
    { title: "Generative AI Evaluation", image: "https://picsum.photos/seed/genai/800/600" },
    { title: "K-12 Tech Integration", image: "https://picsum.photos/seed/k12/800/600" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl pt-12"
    >
      <h2 className="section-title">{t.title}</h2>
      <div className="mb-16">
        <p className="text-xl text-[#555] leading-relaxed mb-8">
          {t.intro}
        </p>
        <a 
          href="https://docs.google.com/document/d/1ISTeii31qJ0XzVYvTRXLys1qS5y4nvQ8BvBhtQu2UM8/edit?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
        >
          <FileText size={18} /> {t.cvLink}
        </a>
      </div>

      <div className="space-y-12 mb-24">
        {projects.map((p, i) => (
          <div key={i} className="group border-l-2 border-black/5 pl-8 py-2 hover:border-black transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-black/5 px-2 py-0.5 rounded text-[#888]">{p.type}</span>
              <span className="font-mono text-xs text-[#AAA]">{p.year}</span>
            </div>
            <p className="text-[#333] leading-relaxed italic">{p.content}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
        {imageProjects.map((p, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group">
            <img 
              src={p.image} 
              alt={p.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
              <span className="text-white text-xs font-medium">{p.title}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Teaching = ({ lang }: { lang: Language }) => {
  const t = translations[lang].teaching;
  const experiences = [
    {
      role: lang === 'zh' ? '教学助理' : lang === 'fr' ? 'Assistant d\'Enseignement' : "Teaching Assistant",
      institution: "McGill University, Montreal, Canada",
      period: "Jan 2026 – Present",
      points: lang === 'zh' ? [
        "为研究生讲授单变量和多变量统计实验课程。",
        "批改涉及多元回归、方差分析、协方差分析等统计方法的作业和演示。",
        "获得学生和课程教师的积极反馈。"
      ] : lang === 'fr' ? [
        "Dispenser des cours indépendants aux étudiants de maîtrise sur les travaux de laboratoire de statistiques univariées et multivariées.",
        "Corriger les devoirs et présentations couvrant la régression multiple, l'ANOVA, l'ANCOVA et les méthodes statistiques connexes.",
        "Reçu des retours positifs forts des étudiants et de l'enseignant du cours."
      ] : [
        "Delivered independent lectures to graduate students on univariate and multivariate statistics lab work.",
        "Graded assignments and presentations covering multiple regression, ANOVA, ANCOVA, and related statistical methods.",
        "Received strong positive feedback from both students and the course instructor."
      ],
      image: "/img/ta.jpg",
      location: t.onSite
    },
    {
      role: lang === 'zh' ? '夏令营辅导员' : lang === 'fr' ? 'Conseiller de Camp d\'Été' : "Summer Camp Counselor",
      institution: "Robotic Camp, Montreal, Canada",
      period: "Jun 2025 – Aug 2025",
      points: lang === 'zh' ? [
        "担任营地辅导员，帮助孩子们搭建和编程乐高机器人。帮助他们解决技术挑战，组织日常户外活动，并策划最终的机器人竞赛。",
        "拍摄和编辑营地活动的照片和短视频，为社交媒体和家长沟通创建引人入胜的视觉内容。"
      ] : lang === 'fr' ? [
        "Travaillé comme conseiller de camp, aidant les enfants à construire et programmer des robots LEGO. Les a soutenus pour résoudre les défis techniques, animé les activités quotidiennes de plein air et organisé les compétitions de robotique finales.",
        "Capturé et edited des photos et des vidéos courtes sur les activités du camp, créant un contenu visuel attrayant pour les réseaux sociaux et la communication avec les parents."
      ] : [
        "Worked as a camp counselor, helping children build and program LEGO robots. Supported them in solving technical challenges, led daily outdoor activities, and organized final robotics competitions.",
        "Captured and edited photos and short videos on camp activities, creating engaging visual content for social media and parent communication."
      ],
      image: "/img/counselor.jpg",
      location: t.onSite
    },
    {
      role: lang === 'zh' ? '小学数学教师' : lang === 'fr' ? 'Professeur de Mathématiques Primaire' : "Elementary Mathematics Teacher",
      institution: "Spark Education, Beijing, China",
      period: "Feb 2024 – Aug 2024",
      points: lang === 'zh' ? [
        "为来自中国、荷兰、加拿大和美国的3年级学生教授在线双语数学课程，为国际数学竞赛做准备。",
        "使用交互式在线教学软件进行授课，确保学习体验引人入胜且有效。"
      ] : lang === 'fr' ? [
        "Enseigné les mathématiques bilingues en ligne aux étudiants de 3e année de Chine, des Pays-Bas, du Canada et des États-Unis pour les préparer aux compétitions mathématiques internationales.",
        "Utilisé des logiciels d'enseignement en ligne interactifs pour dispenser les cours, garantissant une expérience d'apprentissage engageante et efficace."
      ] : [
        "Taught online bilingual math to Grade 3 students from China, Netherlands, Canada, and the United States in preparation for international mathematics competitions.",
        "Utilized interactive online teaching software to deliver lessons, ensuring an engaging and effective learning experience."
      ],
      image: "/img/spark.jpg",
      location: t.online
    },
    {
      role: lang === 'zh' ? '小学教师' : lang === 'fr' ? 'Professeur Primaire' : "Elementary Teacher",
      institution: "Pioneer L.A.T. Learning Community, Beijing, China",
      period: "Sep 2020 – Jan 2024",
      points: lang === 'zh' ? [
        "教授2-6年级数学并领导STEM和体育项目。支持幼儿园儿童的日常护理和户外活动。",
        "领导了3个为期一周的户外营地，协调5名教师和30多名学生进行滑雪、打雪仗和探险活动。"
      ] : lang === 'fr' ? [
        "Enseigné les mathématiques et dirigé des projets STEM et sportifs pour les niveaux CM1-6e. Soutenu les soins quotidiens et les activités de plein air pour les enfants de maternelle.",
        "Dirigé 3 camps d'une semaine en plein air, coordonnant 5 enseignants et plus de 30 élèves en ski, batailles de boules de neige et aventures."
      ] : [
        "Taught Math and led STEM & sports projects for Grades 2–6. Supported daily care and outdoor activities for kindergarten children.",
        "Led 3 one-week outdoor camps, coordinating 5 teachers & 30+ students in skiing, snowball fights, and adventures."
      ],
      image: "/img/pioneer.jpg",
      location: t.onSite
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <div className="flex justify-between items-start mb-12">
        <h2 className="section-title">{t.title}</h2>
        <a 
          href="https://mcgill-my.sharepoint.com/:b:/g/personal/shuai_chen_mail_mcgill_ca/IQCRUZiC7t4rSoNyWh5DlNm6Aeui2ddzFZXotaF4ZoHQq40" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
        >
          <FileText size={18} /> {t.viewResume}
        </a>
      </div>
      <div className="space-y-32">
        {experiences.map((exp, i) => (
          <div key={i} className={cn("flex flex-col md:flex-row gap-12 items-start", i % 2 === 1 && "md:flex-row-reverse")}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-[#AAA] uppercase tracking-widest">{exp.period}</span>
                <span className="px-2 py-0.5 bg-black/5 rounded text-[10px] font-bold text-[#888] uppercase">{exp.location}</span>
              </div>
              <h3 className="text-3xl font-serif italic mb-2">{exp.role}</h3>
              <p className="text-lg font-medium text-[#888] mb-6">{exp.institution}</p>
              <ul className="space-y-4">
                {exp.points.map((point, pi) => (
                  <li key={pi} className="flex gap-3 text-[#555] leading-relaxed">
                    <span className="text-black/20 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl shadow-black/5">
                <img 
                  src={exp.image} 
                  alt={exp.role} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Products = ({ lang }: { lang: Language }) => {
  const t = translations[lang].products;
  const products = [
    {
      name: "Personal Portfolio",
      desc: lang === 'zh' ? '我在教育、研究和产品开发方面的历程展示。' : lang === 'fr' ? "Un aperçu de mon parcours dans l'éducation, la recherche et le développement de produits." : "Showcasing innovative products I've built — from AI-powered learning tools to engaging educational platforms that transform how people learn.",
      link: "https://jerrychen-mcgill.github.io",
      image: "/img/portfolio.jpg"
    },
    {
      name: "GitHub Projects",
      desc: lang === 'zh' ? '探索我的开源贡献和技术实验。' : lang === 'fr' ? "Explorez mes contributions open-source et mes expérimentations techniques." : "Explore my open-source contributions and technical experiments.",
      link: "https://github.com/JerryChen-McGill",
      image: "/img/GitHub Projects.JPG"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <h2 className="section-title">{t.title}</h2>
      <div className="flex justify-end mb-8">
        <a 
          href="https://mcgill-my.sharepoint.com/:b:/g/personal/shuai_chen_mail_mcgill_ca/IQBio9_r-UYWQbZTwuLfVVb3AZ1Vkb46nD7L8ecq63fyv88?e=ThHsg4" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
        >
          <FileText size={18} /> {t.viewResume}
        </a>
      </div>
      <div className="space-y-16">
        {products.map((p, i) => (
          <div key={i} className="group relative rounded-[40px] overflow-hidden border border-black/5 bg-white">
            <div className="aspect-[21/9] overflow-hidden">
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
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
                {t.visitProject} <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const DailyLife = ({ lang }: { lang: Language }) => {
  const t = translations[lang].daily;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const interests = [
    { 
      title: lang === 'zh' ? '练字' : lang === 'fr' ? 'Calligraphie' : 'Calligraphy', 
      desc: lang === 'zh' ? '在每一笔中寻找平静。我每天练习中国传统书法。' : lang === 'fr' ? "Trouver la paix dans chaque trait. Je pratique la calligraphie traditionnelle chinoise quotidiennement." : "Finding peace in every stroke. I practice traditional Chinese calligraphy daily.", 
      icon: "🖋️", 
      image: "/img/Calligraphy.jpg" 
    },
    { 
      title: lang === 'zh' ? '桌游' : lang === 'fr' ? 'Jeux de Société' : 'Board Games', 
      desc: lang === 'zh' ? '策略、社交和乐趣。卡坦岛和火星改造是我最喜欢的。' : lang === 'fr' ? "Stratégie, interaction sociale et plaisir. Catan et Terraforming Mars sont mes favoris." : "Strategy, social interaction, and fun. Catan and Terraforming Mars are my favorites.", 
      icon: "🎲", 
      image: "/img/boardgame.jpg" 
    },
    { 
      title: lang === 'zh' ? '飞盘' : lang === 'fr' ? 'Disque Volant' : 'Frisbee', 
      desc: lang === 'zh' ? '运动与社区精神的完美结合。极限飞盘是我周末的仪式。' : lang === 'fr' ? "Le mélange parfait d'athlétisme et d'esprit communautaire. Le Frisbee ultime est mon rituel du week-end." : "The perfect mix of athleticism and community spirit. Ultimate Frisbee is my weekend ritual.", 
      icon: "🥏", 
      image: "/img/Frisbee1.JPG" 
    },
    { 
      title: lang === 'zh' ? '看书' : lang === 'fr' ? 'Lecture' : 'Reading', 
      desc: lang === 'zh' ? '哲学、科幻和技术类非虚构书籍的终身阅读之旅。' : lang === 'fr' ? "Un parcours à vie à travers la philosophie, la science-fiction et la非fiction technique." : "A lifelong journey through philosophy, sci-fi, and technical non-fiction.", 
      icon: "📚", 
      image: "/img/reading.jpg" 
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <h2 className="section-title">{t.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((item, i) => (
          <div 
            key={i} 
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-black cursor-pointer"
            onClick={() => setSelectedImage(item.image)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
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

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [lang, setLang] = useState<Language>('en');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home lang={lang} />;
      case 'research': return <Research lang={lang} />;
      case 'teaching': return <Teaching lang={lang} />;
      case 'products': return <Products lang={lang} />;
      case 'daily': return <DailyLife lang={lang} />;
      default: return <Home lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        lang={lang} 
        setLang={setLang} 
      />
      
      <main className="max-w-6xl mx-auto px-6 pt-32">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeSection}-${lang}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#AAA] text-xs mt-24">
        <p>© {new Date().getFullYear()} Jerry Chen. {translations[lang].footer.copyright}</p>
        <div className="flex gap-6">
          <a href="mailto:shuai.chen@mail.mcgill.ca" className="flex items-center gap-1 hover:text-[#2D2D2D] transition-colors">
            <Mail size={14} /> {translations[lang].footer.sayHello}
          </a>
          <a href="https://github.com/JerryChen-McGill" className="hover:text-[#2D2D2D] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jerry-chen-mcgill/" className="hover:text-[#2D2D2D] transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
