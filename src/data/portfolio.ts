export const personal = {
  name: 'Gunesh Murumulla',
  firstName: 'Gunesh',
  lastName: 'Murumulla',
  brand: 'GM.',
  headline: 'Java Full Stack Developer',
  headlineAlt: 'Software Developer',
  tagline:
    'Building scalable applications. Engineering reliable backends. Creating digital experiences.',
  intro:
    "I'm a Software Developer specializing in Java full stack development, Spring Boot, REST APIs, microservices, and modern web applications. I enjoy solving real-world problems through clean code, efficient architecture, and thoughtful user experiences.",
  email: 'gunesh7788@gmail.com',
  github: 'https://github.com/GuneshDeva',
  githubHandle: 'GuneshDeva',
  linkedin: 'https://www.linkedin.com/in/gunesh-deva-76b0a3390/',
  location:'',
  degree: 'B.Sc. in Computer Science — 2021',
  bio: "I am a Computer Science graduate and Software Developer with experience across Java full stack development, enterprise applications, microservices, and web technologies. My work involves developing backend services, integrating REST APIs, building frontend interfaces, and working with relational databases. I have contributed to projects in banking, online examination, and trainee management. Alongside software development, I have a creative interest in video editing and digital content creation.",
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const highlights = [
  'B.Sc. in Computer Science — 2021',
  'Software Development',
  'Java Full Stack Development',
  'Enterprise Applications and Microservices',
  'Creative Video Editing',
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  dates: string;
  technologies: string[];
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Software Developer',
    company: 'Innerspec Technologies Pvt. Ltd.',
    location: 'Bangalore, karnataka, India',
    dates: 'December 2024 – September 2026',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Angular', 'REST APIs'],
    responsibilities: [
      'Enterprise application development and backend engineering',
      'Designing and implementing scalable service architectures',
      'Developing and integrating REST API endpoints',
      'Collaborating on full-stack feature development across backend and frontend layers',
    ],
  },
  {
    title: 'Associate',
    company: 'eHotel Software & IT Pvt. Ltd.',
    location: 'Visakhapatnam, India',
    dates: 'March 2024 – November 2024',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    responsibilities: [
      'Contributing to software development for hospitality-domain applications',
      'Working on backend service development and API integration',
      'Supporting application maintenance and feature implementation',
    ],
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Globe Infotech Pvt. Ltd.',
    location: 'Chennai, Tamil Nadu, India',
    dates: 'June 2022 – February 2024',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Hibernate', 'REST APIs'],
    responsibilities: [
      'Backend service development and REST API design',
      'Frontend interface development with Angular',
      'Database design, data modeling, and persistence layer implementation',
      'Full-stack application development and integration',
    ],
  },
];

export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  icon: string;
  accent: 'flame' | 'cyber';
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Development',
    icon: 'Server',
    accent: 'flame',
    skills: [
      { name: 'Java', icon: 'Coffee' },
      { name: 'Spring Boot', icon: 'Leaf' },
      { name: 'Hibernate', icon: 'Database' },
      { name: 'Spring Data JPA', icon: 'Layers' },
      { name: 'Microservices', icon: 'Boxes' },
      { name: 'REST APIs', icon: 'Webhook' },
      { name: 'Apache Kafka', icon: 'MessageSquare' },
      { name: 'Eureka', icon: 'Radar' },
      { name: 'API Gateway', icon: 'Network' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'Layout',
    accent: 'cyber',
    skills: [
      { name: 'Angular', icon: 'Triangle' },
      { name: 'JavaScript', icon: 'Braces' },
      { name: 'HTML5', icon: 'Code' },
      { name: 'CSS3', icon: 'Palette' },
    ],
  },
  {
    title: 'Databases, Tools & DevOps',
    icon: 'Database',
    accent: 'cyber',
    skills: [
      { name: 'MySQL', icon: 'Database' },
      { name: 'Oracle Database', icon: 'HardDrive' },
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'Maven', icon: 'Package' },
      { name: 'Eclipse', icon: 'Circle' },
      { name: 'Spring Tool Suite', icon: 'Leaf' },
      { name: 'VS Code', icon: 'Code' },
      { name: 'Docker', icon: 'Container' },
      { name: 'Jenkins', icon: 'Workflow' },
      { name: 'AWS', icon: 'Cloud' },
    ],
  },
];

export const additionalSkills = [
  { name: 'Python', icon: 'FileCode' },
  { name: 'Django', icon: 'Globe' },
  { name: 'Selenium', icon: 'Bug' },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: 'Java Full Stack Development',
    description:
      'Development of complete web applications with Java-based backend systems and modern frontend interfaces.',
    icon: 'Layers',
  },
  {
    title: 'Backend Development & REST API Integration',
    description:
      'Design and implementation of maintainable backend services, API endpoints, validation, and application integrations.',
    icon: 'Server',
  },
  {
    title: 'Microservices Architecture',
    description:
      'Development of modular service-based applications using appropriate technologies and communication patterns.',
    icon: 'Boxes',
  },
  {
    title: 'Angular Frontend Development',
    description:
      'Creation of responsive, component-based user interfaces with Angular, HTML, CSS, and JavaScript.',
    icon: 'Layout',
  },
  {
    title: 'Database Design & Integration',
    description:
      'Relational database integration, data modeling, persistence, and database-backed application development.',
    icon: 'Database',
  },
  {
    title: 'Video Editing & Digital Content Creation',
    description:
      'Creative editing and visual content production using After Effects, DaVinci Resolve, Filmora, HitFilm Express, and Canva.',
    icon: 'Film',
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  image?: string;
  imageQuery: string;
};

export const projects: Project[] = [
  {
    title: 'Score Sharp — Online Exam Portal',
    category: 'Full Stack',
    description:
      'A web-based examination platform designed to support exam administration, candidate participation, coding assessments, and result processing.',
    technologies: ['Java 11', 'Spring Boot 2.7.12', 'Spring Data JPA', 'Angular', 'MySQL'],
    features: [
      'User authentication and registration',
      'Examination and question management',
      'Candidate examination flow',
      'Coding assessment integration',
      'Answer submission and result processing',
      'Backend APIs and database integration',
    ],
    githubUrl: 'https://github.com/GuneshDeva/ScoreSharp-Online-Exam-Portal',
    image: '/images/projects/ScoreSharp_Portfolio_Project_Overview.jpg',
    imageQuery: 'online examination software dashboard',
  },
  {
    title: 'Simple Learn — Trainee Management System',
    category: 'Full Stack',
    description:
      'A trainee management application designed to support training administration and related organizational workflows.',
    technologies: ['Python', 'Django', 'Angular', 'TypeScript', 'MySQL'],
    features: [
      'Branch and location management',
      'Course and subject management',
      'Trainer and trainee administration',
      'Backend API integration',
      'Database-driven application workflows',
    ],
    githubUrl: 'https://github.com/GuneshDeva',
    image: '/images/projects/SimpleLearn-Actual-Screenshots-Portfolio.png',
    imageQuery: 'administration dashboard management system',
  },
  {
    title: 'Banking Microservices Application',
    category: 'Microservices',
    description:
      'A banking-oriented application built around Java and Spring Boot microservices, demonstrating modular service architecture and backend integration.',
    technologies: [
      'Java 11',
      'Spring Boot',
      'Microservices',
      'Apache Kafka',
      'Eureka',
      'Spring Cloud Config',
      'API Gateway',
      'JWT authentication',
    ],
    features: [
      'Independent backend services',
      'Service discovery',
      'Centralized configuration',
      'API gateway routing',
      'Event-driven messaging with Kafka',
      'Token-based authentication',
    ],
    githubUrl: 'https://github.com/GuneshDeva',
    image: '',
    imageQuery: 'banking application interface technology',
  },
];

export const creativeTools = [
  { name: 'Adobe After Effects', icon: 'Clapperboard' },
  { name: 'DaVinci Resolve', icon: 'Aperture' },
  { name: 'HitFilm Express', icon: 'Film' },
  { name: 'Filmora', icon: 'Video' },
  { name: 'Canva', icon: 'PenTool' },
];

export const typingWords = [
  'Java Developer',
  'Full Stack Developer',
  'Software Engineer',
  'Backend Engineer',
  'Microservices Developer',
];

export const heroTechLabels = ['Java', 'Spring Boot', 'Angular', 'Microservices', 'REST APIs'];
