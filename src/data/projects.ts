export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel administrativo.",
    longDescription: "Desarrollé una plataforma de e-commerce completa con Vue 3 en el frontend y NestJS en el backend. Implementé autenticación JWT, integración con Stripe para pagos, panel administrativo con gráficos en tiempo real, y despliegue automatizado con Docker y AWS ECS. El sistema maneja catálogos de productos, inventario, órdenes de compra y notificaciones por correo electrónico.",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce",
    tags: ["Vue.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    githubUrl: "https://github.com/tuusuario/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    featured: true,
    year: 2025,
  },
  {
    id: "task-manager",
    title: "Task Manager Pro",
    description: "Aplicación colaborativa de gestión de tareas con tablero Kanban, drag & drop y tiempo real.",
    longDescription: "Aplicación colaborativa de gestión de proyectos con tablero Kanban estilo Trello, sistema de drag & drop, notificaciones en tiempo real via WebSockets, roles de usuario (admin, manager, member), y reportes de productividad. Construida con React, Node.js y Socket.io con MongoDB como base de datos.",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Task+Manager",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/tuusuario/taskmanager",
    liveUrl: "https://taskmanager-demo.com",
    featured: true,
    year: 2025,
  },
  {
    id: "saas-boilerplate",
    title: "SaaS Boilerplate",
    description: "Template SaaS multi-tenant con autenticación, facturación recurrente y paneles de administración.",
    longDescription: "Boilerplate completo para startups SaaS con multi-tenancy, autenticación con roles (admin, owner, member), facturación recurrente integrada con Stripe, panel de administración, y API REST documentada con Swagger. Incluye despliegue con Docker Compose y CI/CD con GitHub Actions.",
    image: "https://placehold.co/600x400/ef4444/ffffff?text=SaaS+Boilerplate",
    tags: ["NestJS", "Vue.js", "TypeScript", "PostgreSQL", "Docker", "Stripe"],
    githubUrl: "https://github.com/tuusuario/saas-boilerplate",
    featured: true,
    year: 2026,
  },
  {
    id: "api-gateway",
    title: "API Gateway Microservicios",
    description: "Gateway para arquitectura de microservicios con balanceo de carga, rate limiting y monitoreo.",
    longDescription: "Diseñé e implementé un API Gateway utilizando NestJS que orquesta múltiples microservicios. Incluye balanceo de carga, rate limiting, autenticación centralizada con JWT, logging distribuido con ELK Stack, y monitoreo con Prometheus y Grafana. La infraestructura corre en AWS ECS con CI/CD automatizado.",
    image: "https://placehold.co/600x400/10b981/ffffff?text=API+Gateway",
    tags: ["NestJS", "Docker", "PostgreSQL", "Redis", "AWS"],
    githubUrl: "https://github.com/tuusuario/api-gateway",
    featured: false,
    year: 2024,
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Dashboard interactivo con visualización de datos, filtros dinámicos y exportación de reportes.",
    longDescription: "Dashboard analítico con gráficos interactivos usando Chart.js, filtros dinámicos, exportación a PDF/CSV, y autenticación con roles. Backend en Laravel con MySQL. El sistema permite a los usuarios visualizar métricas de negocio en tiempo real con actualizaciones automáticas cada 30 segundos.",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Dashboard",
    tags: ["Vue.js", "Laravel", "PHP", "MySQL", "Chart.js"],
    liveUrl: "https://dashboard-demo.com",
    featured: false,
    year: 2024,
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Personal v1",
    description: "Este portfolio construido con Astro 5 y Tailwind CSS v4, totalmente bilingüe y con modo oscuro.",
    longDescription: "Portfolio personal moderno y ultrarrápido construido con Astro 5 y Tailwind CSS v4. Incluye internacionalización ES/EN con rutas separadas, modo oscuro con persistencia en localStorage, formulario de contacto via webhook n8n, sección de proyectos con modal de detalle, y despliegue estático optimizado para SEO.",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=Portfolio",
    tags: ["Astro", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/tuusuario/astro-portfolio-v1",
    liveUrl: "https://tu-portfolio.com",
    featured: false,
    year: 2026,
  },
];
