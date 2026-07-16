export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  social: {
    github: string;
    linkedin: string;
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
    socialTitle: string;
  };
}

export const siteES: SiteConfig = {
  name: "Javier J. Martínez F.",
  title: "Javier J. Martínez F. - Ingeniero de Software",
  description: "Desarrollador Full Stack & Cloud con experiencia en NestJS, Vue 3, Docker y AWS.",
  url: "https://tudominio.com",
  author: "Javier J. Martínez F.",
  social: {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
  },
  nav: {
    projects: "Proyectos",
    about: "Sobre Mí",
  },
  hero: {
    badge: "Disponible para contratación inmediata",
    title: "Ingeniero de Software",
    titleHighlight: "Full Stack & Cloud.",
    subtitle: "Desarrollador con experiencia en arquitecturas escalables. Especializado en NestJS, Vue 3, Docker y AWS. Busco aportar valor en equipos de alto rendimiento.",
    ctaPrimary: "Descargar CV",
    ctaSecondary: "Ver Proyectos",
    cvFile: "/cv-es.pdf",
    cvName: "Javier_Martinez_CV_ES.pdf",
    photoAlt: "Javier J. Martínez F. — Ingeniero de Software",
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
      "Soy Ingeniero de Software con experiencia en el desarrollo de aplicaciones web escalables. Me especializo en arquitecturas cloud-native usando NestJS, Vue 3, Docker y AWS.",
      "Me apasiona escribir código limpio y mantenible, resolver problemas complejos y trabajar en equipo para crear productos que hagan la diferencia.",
    ],
    socialTitle: "Encuéntrame en:",
  },
};

export const siteEN: SiteConfig = {
  name: "Javier J. Martínez F.",
  title: "Javier J. Martínez F. - Software Engineer",
  description: "Full Stack & Cloud Developer experienced in NestJS, Vue 3, Docker, and AWS.",
  url: "https://tudominio.com",
  author: "Javier J. Martínez F.",
  social: {
    github: "https://github.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
  },
  nav: {
    projects: "Projects",
    about: "About Me",
  },
  hero: {
    badge: "Available for immediate hire",
    title: "Software Engineer",
    titleHighlight: "Full Stack & Cloud.",
    subtitle: "Developer experienced in scalable architectures. Specialized in NestJS, Vue 3, Docker, and AWS. Looking to drive value in high-performance teams.",
    ctaPrimary: "Download Resume",
    ctaSecondary: "View Projects",
    cvFile: "/cv-en.pdf",
    cvName: "Javier_Martinez_CV_EN.pdf",
    photoAlt: "Javier J. Martínez F. — Software Engineer",
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
      "I'm a Software Engineer with experience building scalable web applications. I specialize in cloud-native architectures using NestJS, Vue 3, Docker, and AWS.",
      "I'm passionate about writing clean, maintainable code, solving complex problems, and working in teams to create products that make a difference.",
    ],
    socialTitle: "Find me on:",
  },
};

export function getSiteConfig(lang: string): SiteConfig {
  return lang === 'en' ? siteEN : siteES;
}
