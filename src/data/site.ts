export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
  phone: string;
  social: {
    github: string;
    linkedin: string;
    youtube: string;
  };
  nav: {
    projects: string;
    about: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    cvFile: string;
    cvName: string;
    photoAlt: string;
    statusLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    tools: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    btn: string;
  };
  whatsapp: string;
  about: {
    title: string;
    descriptions: string[];
    stats: { label: string; value: string }[];
    socialTitle: string;
  };
}

export const siteES: SiteConfig = {
  name: "Javier J. Martínez F.",
  title: "Javier J. Martínez F. - Ingeniero de Software Senior",
  description: "Desarrollador Full Stack Senior con 25+ años de experiencia en aplicaciones web escalables, IA y Prompt Engineering.",
  url: "https://tudominio.com",
  author: "Javier J. Martínez F.",
  email: "entrenamientospuntonet@gmail.com",
  phone: "+58 424-2121001",
  social: {
    github: "https://github.com/jlcarrascof",
    linkedin: "https://linkedin.com/in/javier-j-martinez-f",
    youtube: "https://youtube.com/@javiersistemas",
  },
  nav: {
    projects: "Proyectos",
    about: "Sobre Mí",
  },
  hero: {
    badge: "Disponible para contratación inmediata",
    title: "Ingeniero de Software",
    titleHighlight: "Senior Full Stack & IA.",
    subtitle: "Más de 25 años liderando el desarrollo de aplicaciones web escalables y sistemas SaaS. Especialista en integración de IA, Prompt Engineering y arquitecturas cloud-native.",
    ctaPrimary: "Descargar CV",
    ctaSecondary: "Ver Proyectos",
    cvFile: "/cv-es.pdf",
    cvName: "Javier_Martinez_CV_ES.pdf",
    photoAlt: "Javier J. Martínez F. — Ingeniero de Software Senior",
    statusLabel: "Disponible",
  },
  experience: {
    title: "Arsenal Tecnológico",
    subtitle: "Herramientas y tecnologías que uso para dar vida a mis proyectos.",
    frontend: "Frontend & UI",
    backend: "Backend & Cloud",
    tools: "Herramientas & Otros",
  },
  contact: {
    title: "¿Buscando Talento Tech?",
    subtitle: "Hablemos sobre cómo puedo integrarme a tu equipo y aportar valor desde el primer día.",
    name: "Nombre del Recruiter / Empresa",
    email: "Correo Corporativo",
    message: "Detalles sobre la vacante...",
    btn: "Iniciar Conversación",
  },
  whatsapp: "Hola, vi tu portafolio y me gustaría saber más.",
  about: {
    title: "Sobre Mí",
    descriptions: [
      "Desarrollador Full Stack Senior con más de 25 años de trayectoria liderando el diseño, desarrollo y despliegue de aplicaciones web escalables y sistemas SaaS corporativos. Especialista en la integración práctica de Inteligencia Artificial (IA) y técnicas avanzadas de Prompt Engineering para optimizar flujos de trabajo operativos y automatizar procesos de negocio complejos.",
      "Experiencia en conectar interfaces de usuario modernas y reactivas (Vue 3, React, Angular, NextJS) con arquitecturas backend robustas (NestJS, Laravel, Node.js) y bases de datos relacionales y NoSQL. Apasionado por la arquitectura limpia, el código mantenible y la enseñanza tecnológica — creador de contenido técnico en YouTube desde 2006 con más de 1,000 videos.",
    ],
    stats: [
      { label: "Años de Experiencia", value: "25+" },
      { label: "Proyectos Entregados", value: "40+" },
      { label: "Videos en YouTube", value: "1,000+" },
      { label: "Idiomas", value: "4" },
    ],
    socialTitle: "Encuéntrame en:",
  },
};

export const siteEN: SiteConfig = {
  name: "Javier J. Martínez F.",
  title: "Javier J. Martínez F. - Senior Software Engineer",
  description: "Senior Full Stack Developer with 25+ years in scalable web apps, AI, and Prompt Engineering.",
  url: "https://tudominio.com",
  author: "Javier J. Martínez F.",
  email: "entrenamientospuntonet@gmail.com",
  phone: "+58 424-2121001",
  social: {
    github: "https://github.com/jlcarrascof",
    linkedin: "https://linkedin.com/in/javier-j-martinez-f",
    youtube: "https://youtube.com/@javiersistemas",
  },
  nav: {
    projects: "Projects",
    about: "About Me",
  },
  hero: {
    badge: "Available for immediate hire",
    title: "Software Engineer",
    titleHighlight: "Senior Full Stack & AI.",
    subtitle: "Over 25 years leading the design and deployment of scalable web applications and SaaS systems. Specialized in AI integration, Prompt Engineering, and cloud-native architectures.",
    ctaPrimary: "Download Resume",
    ctaSecondary: "View Projects",
    cvFile: "/cv-en.pdf",
    cvName: "Javier_Martinez_CV_EN.pdf",
    photoAlt: "Javier J. Martínez F. — Senior Software Engineer",
    statusLabel: "Open to work",
  },
  experience: {
    title: "Tech Stack",
    subtitle: "Tools and technologies I use to bring projects to life.",
    frontend: "Frontend & UI",
    backend: "Backend & Cloud",
    tools: "Tools & Others",
  },
  contact: {
    title: "Looking for Tech Talent?",
    subtitle: "Let's discuss how I can join your team and deliver value from day one.",
    name: "Recruiter Name / Company",
    email: "Corporate Email",
    message: "Details about the role...",
    btn: "Start Conversation",
  },
  whatsapp: "Hi, I saw your portfolio and I'd like to know more.",
  about: {
    title: "About Me",
    descriptions: [
      "Senior Full Stack Developer with over 25 years of experience leading the design, development, and deployment of scalable web applications and enterprise SaaS systems. Specialist in practical AI integration and advanced Prompt Engineering techniques to optimize operational workflows and automate complex business processes.",
      "Experienced in connecting modern reactive frontends (Vue 3, React, Angular, NextJS) with robust backend architectures (NestJS, Laravel, Node.js) and both relational and NoSQL databases. Passionate about clean architecture, maintainable code, and tech education — creating technical content on YouTube since 2006 with over 1,000 videos.",
    ],
    stats: [
      { label: "Years of Experience", value: "25+" },
      { label: "Projects Delivered", value: "40+" },
      { label: "YouTube Videos", value: "1,000+" },
      { label: "Languages", value: "4" },
    ],
    socialTitle: "Find me on:",
  },
};

export function getSiteConfig(lang: string): SiteConfig {
  return lang === 'en' ? siteEN : siteES;
}