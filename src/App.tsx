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
type Section = 'home' | 'research' | 'teaching' | 'products' | 'daily' | 'cv';
type Language = 'en' | 'zh' | 'fr';

// --- Translations ---
const translations = {
  en: {
    nav: {
      home: 'Home',
      research: 'Research',
      teaching: 'Teaching',
      products: 'Product',
      daily: 'Daily Life',
      cv: 'CV & LinkedIn'
    },
    home: {
      greeting: 'Hello,',
      name: "I'm Jerry.",
      intro: 'A researcher and developer passionate about creating wonderful learning experiences and bridging the gap between education and state-of-the-art technologies. I enjoy exploring the intersection of technology, education, and daily creativity.',
      cta: 'Say Hello'
    },
    research: {
      intro: 'I am a PhD student in Learning Sciences at McGill University, working with Professor Nikki G. Lobczowski in the CREATE Lab. My research focuses on technology integration in mathematics education, specifically the design, application, and evaluation of generative AI to enhance mathematical learning.',
      cvLink: 'View Research CV'
    }
  },
  zh: {
    nav: {
      home: '主页',
      research: '研究',
      teaching: '教学',
      products: '产品',
      daily: '日常生活',
      cv: '简历与联系'
    },
    home: {
      greeting: '你好，',
      name: "我是 Jerry。",
      intro: '我是一名研究员和开发人员，热衷于创造精彩的学习体验，并致力于弥合教育与最先进技术之间的鸿沟。我喜欢探索技术、教育和日常创造力的交汇点。',
      cta: '打个招呼'
    },
    research: {
      intro: '我是麦吉尔大学学习科学专业的博士生，在 CREATE 实验室师从 Nikki G. Lobczowski 教授。我的研究重点是数学教育中的技术整合，特别是生成式人工智能在增强数学学习方面的设计、应用和评估。',
      cvLink: '查看研究简历'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      research: 'Recherche',
      teaching: 'Enseignement',
      products: 'Produits',
      daily: 'Vie Quotidienne',
      cv: 'CV & LinkedIn'
    },
    home: {
      greeting: 'Bonjour,',
      name: "Je suis Jerry.",
      intro: "Un chercheur et développeur passionné par la création d'expériences d'apprentissage merveilleuses et par le comblement du fossé entre l'éducation et les technologies de pointe. J'aime explorer l'intersection de la technologie, de l'éducation et de la créativité quotidienne.",
      cta: 'Dire Bonjour'
    },
    research: {
      intro: "Je suis étudiant au doctorat en sciences de l'apprentissage à l'Université McGill, travaillant avec la professeure Nikki G. Lobczowski au laboratoire CREATE. Mes recherches portent sur l'intégration des technologies dans l'enseignement des mathématiques, plus précisément sur la conception, l'application et l'évaluation de l'IA générative pour améliorer l'apprentissage des mathématiques.",
      cvLink: 'Voir le CV de recherche'
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
    { id: 'cv', label: t.cv },
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
        <div className="flex gap-6">
          <a href="mailto:jerrychenmcgill@gmail.com" className="flex items-center gap-2 text-sm font-medium hover:underline">
            <Mail size={18} /> {t.cta}
          </a>
          <a href="https://github.com/JerryChen-McGill" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:underline">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/jerry-chen-mcgill/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium hover:underline">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
      
      <div className="flex-1 w-full max-w-md">
        <div className="aspect-[4/5] bg-black/5 rounded-[40px] overflow-hidden relative group">
          <div className="absolute inset-0 flex items-center justify-center text-[#AAA] font-serif italic">
            {/* Placeholder for photo */}
            Photo Space
          </div>
          <img 
            src="https://picsum.photos/seed/jerry/800/1000" 
            alt="Jerry Chen" 
            className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
      <h2 className="section-title">Research</h2>
      <div className="mb-16">
        <p className="text-xl text-[#555] leading-relaxed mb-8">
          {t.intro}
        </p>
        <a 
          href="https://sites.google.com/view/shuaijerrychen/cv?authuser=0" 
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

const Teaching = () => {
  const experiences = [
    {
      role: "Teaching Assistant",
      institution: "McGill University, Montreal, Canada",
      period: "Jan 2026 – Present",
      points: [
        "Delivered independent lectures to graduate students on univariate and multivariate statistics lab work.",
        "Graded assignments and presentations covering multiple regression, ANOVA, ANCOVA, and related statistical methods.",
        "Received strong positive feedback from both students and the course instructor."
      ],
      image: "https://picsum.photos/seed/mcgill/800/600",
      location: "On-site"
    },
    {
      role: "Summer Camp Counselor",
      institution: "Robotic Camp, Montreal, Canada",
      period: "Jun 2025 – Aug 2025",
      points: [
        "Worked as a camp counselor, helping children build and program LEGO robots. Supported them in solving technical challenges, led daily outdoor activities, and organized final robotics competitions.",
        "Captured and edited photos and short videos on camp activities, creating engaging visual content for social media and parent communication."
      ],
      image: "https://picsum.photos/seed/robot/800/600",
      location: "On-site"
    },
    {
      role: "Elementary Mathematics Teacher",
      institution: "Spark Education, Beijing, China",
      period: "Feb 2024 – Aug 2024",
      points: [
        "Taught online bilingual math to Grade 3 students from China, Netherlands, Canada, and the United States in preparation for international mathematics competitions.",
        "Utilized interactive online teaching software to deliver lessons, ensuring an engaging and effective learning experience."
      ],
      image: "https://picsum.photos/seed/spark/800/600",
      location: "Online"
    },
    {
      role: "Elementary Teacher",
      institution: "Pioneer L.A.T. Learning Community, Beijing, China",
      period: "Sep 2020 – Jan 2024",
      points: [
        "Taught Math and led STEM & sports projects for Grades 2–6. Supported daily care and outdoor activities for kindergarten children.",
        "Led 3 one-week outdoor camps, coordinating 5 teachers & 30+ students in skiing, snowball fights, and adventures."
      ],
      image: "https://picsum.photos/seed/pioneer/800/600",
      location: "On-site"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <h2 className="section-title">Teaching Experience</h2>
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

const Products = () => {
  const products = [
    {
      name: "Personal Portfolio",
      desc: "A showcase of my journey in education, research, and product development.",
      link: "https://jerrychen-mcgill.github.io/",
      image: "https://picsum.photos/seed/portfolio/1200/800"
    },
    {
      name: "GitHub Projects",
      desc: "Explore my open-source contributions and technical experiments.",
      link: "https://github.com/JerryChen-McGill",
      image: "https://picsum.photos/seed/github/1200/800"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <h2 className="section-title">Product Building</h2>
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
                Visit Project <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const DailyLife = () => {
  const interests = [
    { title: "练字 (Calligraphy)", desc: "Finding peace in every stroke. I practice traditional Chinese calligraphy daily.", icon: "🖋️", image: "https://picsum.photos/seed/ink/600/800" },
    { title: "桌游 (Board Games)", desc: "Strategy, social interaction, and fun. Catan and Terraforming Mars are my favorites.", icon: "🎲", image: "https://picsum.photos/seed/tabletop/600/800" },
    { title: "飞盘 (Frisbee)", desc: "The perfect mix of athleticism and community spirit. Ultimate Frisbee is my weekend ritual.", icon: "🥏", image: "https://picsum.photos/seed/sport/600/800" },
    { title: "看书 (Reading)", desc: "A lifelong journey through philosophy, sci-fi, and technical non-fiction.", icon: "📚", image: "https://picsum.photos/seed/library/600/800" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl pt-12"
    >
      <h2 className="section-title">Daily Life</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((item, i) => (
          <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-black">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const CV = ({ lang }: { lang: Language }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-4xl pt-12 pb-24 mx-auto"
  >
    <div className="text-center mb-16">
      <h2 className="section-title">CV & Connections</h2>
      <p className="text-[#666] max-w-xl mx-auto">
        Find my complete professional record and connect with me through the following platforms.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#AAA] mb-4">Professional Links</h3>
        <div className="space-y-4">
          <a href="https://www.linkedin.com/in/jerry-chen-mcgill/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white border border-black/5 rounded-[32px] hover:shadow-xl transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0077B5]/10 rounded-2xl flex items-center justify-center">
                <Linkedin size={24} className="text-[#0077B5]" />
              </div>
              <div>
                <span className="block font-bold">LinkedIn</span>
                <span className="text-xs text-[#AAA]">Professional Network</span>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#AAA] group-hover:translate-x-1 transition-transform" />
          </a>

          <a href="https://github.com/JerryChen-McGill" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 bg-white border border-black/5 rounded-[32px] hover:shadow-xl transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
                <Github size={24} />
              </div>
              <div>
                <span className="block font-bold">GitHub</span>
                <span className="text-xs text-[#AAA]">Code & Projects</span>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#AAA] group-hover:translate-x-1 transition-transform" />
          </a>

          <a href="mailto:jerrychenmcgill@gmail.com" className="flex items-center justify-between p-6 bg-white border border-black/5 rounded-[32px] hover:shadow-xl transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                <Mail size={24} className="text-emerald-600" />
              </div>
              <div>
                <span className="block font-bold">Email</span>
                <span className="text-xs text-[#AAA]">Direct Contact</span>
              </div>
            </div>
            <ChevronRight size={20} className="text-[#AAA] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#AAA] mb-4">Documents</h3>
        <div className="flex-1 p-10 bg-[#2D2D2D] text-white rounded-[40px] flex flex-col justify-center items-center text-center group">
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
            <FileText size={40} className="text-white/80" />
          </div>
          <h3 className="text-3xl font-serif italic mb-4">Curriculum Vitae</h3>
          <p className="text-sm text-white/60 mb-10 max-w-xs">
            Access my full academic and professional journey via Google Docs.
          </p>
          <a 
            href="https://docs.google.com/document/d/1ISTeii31qJ0XzVYvTRXLys1qS5y4nvQ8BvBhtQu2UM8/edit?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="w-full py-5 bg-white text-black rounded-2xl text-sm font-bold hover:bg-[#FDFCFB] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            Open CV Document <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [lang, setLang] = useState<Language>('en');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home lang={lang} />;
      case 'research': return <Research lang={lang} />;
      case 'teaching': return <Teaching />;
      case 'products': return <Products />;
      case 'daily': return <DailyLife />;
      case 'cv': return <CV lang={lang} />;
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
        <p>© {new Date().getFullYear()} Jerry Chen. Built with passion and code.</p>
        <div className="flex gap-6">
          <a href="https://github.com/JerryChen-McGill" className="hover:text-[#2D2D2D] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jerry-chen-mcgill/" className="hover:text-[#2D2D2D] transition-colors">LinkedIn</a>
          <a href="mailto:jerrychenmcgill@gmail.com" className="hover:text-[#2D2D2D] transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
