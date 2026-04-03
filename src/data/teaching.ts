import { TeachingExperience } from '../types';

type Lang = 'en' | 'zh' | 'fr';

const teachingData: Record<Lang, TeachingExperience[]> = {
  en: [
    {
      role: "Teaching Assistant",
      institution: "McGill University, Montreal, Canada",
      period: "Jan 2026 – Present",
      points: [
        "Delivered independent lectures to graduate students on univariate and multivariate statistics lab work.",
        "Graded assignments and presentations covering multiple regression, ANOVA, ANCOVA, and related statistical methods.",
        "Received strong positive feedback from both students and the course instructor."
      ],
      image: "/Personal-website/img/ta.jpg",
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
      image: "/Personal-website/img/counselor.jpg",
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
      image: "/Personal-website/img/spark.jpg",
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
      image: "/Personal-website/img/pioneer.jpg",
      location: "On-site"
    }
  ],
  zh: [
    {
      role: "教学助理",
      institution: "麦吉尔大学，蒙特利尔，加拿大",
      period: "2026年1月 – 至今",
      points: [
        "为研究生讲授单变量和多变量统计实验课程。",
        "批改涉及多元回归、方差分析、协方差分析等统计方法的作业和演示。",
        "获得学生和课程教师的积极反馈。"
      ],
      image: "/Personal-website/img/ta.jpg",
      location: "On-site"
    },
    {
      role: "夏令营辅导员",
      institution: "机器人营，蒙特利尔，加拿大",
      period: "2025年6月 – 2025年8月",
      points: [
        "担任营地辅导员，帮助孩子们搭建和编程乐高机器人。帮助他们解决技术挑战，组织日常户外活动，并策划最终的机器人竞赛。",
        "拍摄和编辑营地活动的照片和短视频，为社交媒体和家长沟通创建引人入胜的视觉内容。"
      ],
      image: "/Personal-website/img/counselor.jpg",
      location: "On-site"
    },
    {
      role: "小学数学教师",
      institution: "火花思维，北京，中国",
      period: "2024年2月 – 2024年8月",
      points: [
        "为来自中国、荷兰、加拿大和美国的3年级学生教授在线双语数学课程，为国际数学竞赛做准备。",
        "使用交互式在线教学软件进行授课，确保学习体验引人入胜且有效。"
      ],
      image: "/Personal-website/img/spark.jpg",
      location: "Online"
    },
    {
      role: "小学教师",
      institution: "先学后练学习社区，北京，中国",
      period: "2020年9月 – 2024年1月",
      points: [
        "教授2-6年级数学并领导STEM和体育项目。支持幼儿园儿童的日常护理和户外活动。",
        "领导了3个为期一周的户外营地，协调5名教师和30多名学生进行滑雪、打雪仗和探险活动。"
      ],
      image: "/Personal-website/img/pioneer.jpg",
      location: "On-site"
    }
  ],
  fr: [
    {
      role: "Assistant d'Enseignement",
      institution: "Université McGill, Montréal, Canada",
      period: "Jan 2026 – Présent",
      points: [
        "Dispenser des cours indépendants aux étudiants de maîtrise sur les travaux de laboratoire de statistiques univariées et multivariées.",
        "Corriger les devoirs et présentations couvrant la régression multiple, l'ANOVA, l'ANCOVA et les méthodes statistiques connexes.",
        "Reçu des retours positifs forts des étudiants et de l'enseignant du cours."
      ],
      image: "/Personal-website/img/ta.jpg",
      location: "On-site"
    },
    {
      role: "Conseiller de Camp d'Été",
      institution: "Camp de Robotique, Montréal, Canada",
      period: "Jun 2025 – Août 2025",
      points: [
        "Travaillé comme conseiller de camp, aidant les enfants à construire et programmer des robots LEGO. Les a soutenus pour résoudre les défis techniques, animé les activités quotidiennes de plein air et organisé les compétitions de robotique finales.",
        "Capturé et edited des photos et des vidéos courtes sur les activités du camp, créant un contenu visuel attrayant pour les réseaux sociaux et la communication avec les parents."
      ],
      image: "/Personal-website/img/counselor.jpg",
      location: "On-site"
    },
    {
      role: "Professeur de Mathématiques Primaire",
      institution: "Spark Education, Pékin, Chine",
      period: "Fév 2024 – Août 2024",
      points: [
        "Enseigné les mathématiques bilingues en ligne aux étudiants de 3e année de Chine, des Pays-Bas, du Canada et des États-Unis pour les préparer aux compétitions mathématiques internationales.",
        "Utilisé des logiciels d'enseignement en ligne interactifs pour dispenser les cours, garantissant une expérience d'apprentissage engageante et efficace."
      ],
      image: "/Personal-website/img/spark.jpg",
      location: "Online"
    },
    {
      role: "Professeur Primaire",
      institution: "Pioneer L.A.T. Learning Community, Pékin, Chine",
      period: "Sep 2020 – Jan 2024",
      points: [
        "Enseigné les mathématiques et dirigé des projets STEM et sportifs pour les niveaux CM1-6e. Soutenu les soins quotidiens et les activités de plein air pour les enfants de maternelle.",
        "Dirigé 3 camps d'une semaine en plein air, coordonnant 5 enseignants et plus de 30 élèves en ski, batailles de boules de neige et aventures."
      ],
      image: "/Personal-website/img/pioneer.jpg",
      location: "On-site"
    }
  ]
};

export default teachingData;
