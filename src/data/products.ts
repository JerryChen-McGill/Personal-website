import { Product, Interest } from '../types';

export const products: Product[] = [
  {
    name: "MomentNote iOS App",
    desc: "A minimalist daily journal for capturing thoughts, moods, and everyday moments, with customizable entries, on-device storage, iCloud sync, and image export.",
    link: "https://apps.apple.com/ca/app/momentnote-daily-journal/id6756984234",
    image: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://apps.apple.com/ca/app/momentnote-daily-journal/id6756984234"
  },
  {
    name: "Startup Board Game",
    desc: "A browser-based startup board game exploring the challenges and decisions involved in building a company.",
    link: "https://jerrychen-mcgill.github.io/startupboardgame/",
    repoLink: "https://github.com/JerryChen-McGill/startupboardgame",
    image: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://jerrychen-mcgill.github.io/startupboardgame/"
  },
  {
    name: "Wealth01",
    desc: "An interactive web project focused on wealth and financial topics.",
    link: "https://jerrychen-mcgill.github.io/Wealth01/#top",
    repoLink: "https://github.com/JerryChen-McGill/Wealth01",
    image: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://jerrychen-mcgill.github.io/Wealth01/"
  },
  {
    name: "Interactive Web Project",
    desc: "A web experience built for the browser, with an automatically captured preview of the live site.",
    link: "https://frontend-self-eta-60.vercel.app/",
    image: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://frontend-self-eta-60.vercel.app/"
  },
  {
    name: "Personal Portfolio",
    desc: "Showcasing innovative products I've built — from AI-powered learning tools to engaging educational platforms that transform how people learn.",
    link: "https://jerrychen-mcgill.github.io",
    repoLink: "https://github.com/JerryChen-McGill/Personal-website",
    image: "/Personal-website/img/portfolio.jpg"
  },
  {
    name: "MathNexus",
    desc: "An interactive math learning platform featuring classic puzzles like Sudoku, Tower of Hanoi, Tangram, and Gomoku. Built with React and designed to make mathematics engaging and fun for learners of all ages.",
    link: "https://github.com/JerryChen-McGill/MathNexus",
    image: "/Personal-website/img/mathnexus.jpg"
  },
  {
    name: "KitchenMaster",
    desc: "An AI-powered cooking assistant that helps users discover recipes, plan meals, and master culinary techniques. Leveraging Gemini API to provide intelligent cooking guidance and personalized recommendations.",
    link: "https://github.com/JerryChen-McGill/kitchenMaster",
    image: "/Personal-website/img/GitHub Projects.JPG"
  },
  {
    name: "Client Project 1",
    desc: "A professional website project developed for a client, featuring modern web design principles, responsive layouts, and engaging visual content. Demonstrates practical web development skills in a real-world context.",
    link: "https://github.com/JerryChen-McGill/Client-Project-1",
    image: "/Personal-website/img/clientproject1.jpg"
  },
];

type Lang = 'en' | 'zh' | 'fr';

const interestsData: Record<Lang, Interest[]> = {
  en: [
    { title: 'Calligraphy', desc: "Finding peace in every stroke. I practice traditional Chinese calligraphy daily.", icon: "🖋️", image: "/Personal-website/img/Calligraphy.jpg" },
    { title: 'Board Games', desc: "Strategy, social interaction, and fun. Catan and Terraforming Mars are my favorites.", icon: "🎲", image: "/Personal-website/img/boardgame.jpg" },
    { title: 'Frisbee', desc: "The perfect mix of athleticism and community spirit. Ultimate Frisbee is my weekend ritual.", icon: "🥏", image: "/Personal-website/img/Frisbee1.JPG" },
    { title: 'Reading', desc: "A lifelong journey through philosophy, sci-fi, and technical non-fiction.", icon: "📚", image: "/Personal-website/img/reading.jpg" },
    { title: 'Texas Hold\'em', desc: "A game of strategy, psychology, and calculated risk. I enjoy the mental challenge and social dynamics of poker.", icon: "♠️", image: "/Personal-website/img/poker.jpg" },
  ],
  zh: [
    { title: '练字', desc: '在每一笔中寻找平静。我每天练习中国传统书法。', icon: "🖋️", image: "/Personal-website/img/Calligraphy.jpg" },
    { title: '桌游', desc: '策略、社交和乐趣。卡坦岛和火星改造是我最喜欢的。', icon: "🎲", image: "/Personal-website/img/boardgame.jpg" },
    { title: '飞盘', desc: '运动与社区精神的完美结合。极限飞盘是我周末的仪式。', icon: "🥏", image: "/Personal-website/img/Frisbee1.JPG" },
    { title: '看书', desc: '哲学、科幻和技术类非虚构书籍的终身阅读之旅。', icon: "📚", image: "/Personal-website/img/reading.jpg" },
    { title: '德州扑克', desc: '策略、心理和计算风险的游戏。我喜欢扑克带来的思维挑战和社交互动。', icon: "♠️", image: "/Personal-website/img/poker.jpg" },
  ],
  fr: [
    { title: 'Calligraphie', desc: "Trouver la paix dans chaque trait. Je pratique la calligraphie traditionnelle chinoise quotidiennement.", icon: "🖋️", image: "/Personal-website/img/Calligraphy.jpg" },
    { title: 'Jeux de Société', desc: "Stratégie, interaction sociale et plaisir. Catan et Terraforming Mars sont mes favoris.", icon: "🎲", image: "/Personal-website/img/boardgame.jpg" },
    { title: 'Disque Volant', desc: "Le mélange parfait d'athlétisme et d'esprit communautaire. Le Frisbee ultime est mon rituel du week-end.", icon: "🥏", image: "/Personal-website/img/Frisbee1.JPG" },
    { title: 'Lecture', desc: "Un parcours à vie à travers la philosophie, la science-fiction et la non-fiction technique.", icon: "📚", image: "/Personal-website/img/reading.jpg" },
    { title: 'Texas Hold\'em', desc: "Un jeu de stratégie, de psychologie et de risque calculé. J'apprécie le défi mental et la dynamique sociale du poker.", icon: "♠️", image: "/Personal-website/img/poker.jpg" },
  ]
};

export default interestsData;
