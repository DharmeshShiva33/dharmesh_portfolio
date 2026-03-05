import { Project } from "@/types";

export const PROJECTS_DETAILS: Project[] = [
  {
    id: 1,
    title: "Student Management Portal",
    description:
      "Internal CRM application used to manage customers, leads, and analytics.",
    image: "/image1.avif",
    tech: ["Angular", "PrimeNG", "REST API"],

    live: "#",
    github: "#",
    details: {
      overview:
        "An enterprise-level internal platform designed to manage student records, admissions workflows, and administrative reporting.",
      role: "Frontend Developer responsible for complete Angular implementation and UI architecture.",
      features: [
        "Developed full Angular application from scratch.",
        "Implemented multi-role authentication and protected routing.",
        "Integrated REST APIs for dynamic data rendering.",
        "Built advanced reactive forms with validation.",
        "Implemented lazy loading and route-level code splitting.",
      ],
      challenges: "Handled large forms and optimized dashboard performance.",
      outcome: "Improved productivity and reduced manual work.",
    },
  },
  {
    id: 2,
    title: "HR Agent - AI Assisted Recruitment Platform",
    description:
      "An internal recruitment management platform designed to automate candidate engagement and streamline resume processing using AI-driven workflows.",
    image: "/hr-agent.png",
    tech: ["Next.js", "Redux Toolkit", "Tailwind", "HTML", "CSS", "REST APIs"],
    live: "#",
    github: "#",
    details: {
      overview:
        "HR Agent is an internal recruitment automation platform that processes resumes submitted through the company portal. The system integrates AI-driven workflows to automatically initiate candidate calls and determine interest levels. Based on AI interaction outcomes, shortlisted candidates are further scheduled for recruitment calls, improving hiring efficiency and automation.",
      role: "Frontend Developer responsible for complete UI architecture, state management design, and integration of AI-driven recruitment workflows.",
      features: [
        "Designed and implemented complete UI architecture independently, including workflow planning and data-driven interface decisions.",
        "Developed fully responsive user interfaces optimized for different devices.",
        "Implemented centralized state management using Redux Toolkit for predictable and scalable data handling.",
        "Integrated multiple APIs using Redux for efficient data fetching and state synchronization.",
        "Utilized code generation techniques to create reusable common components for improved maintainability and code readability.",
      ],
      challenges:
        "The primary challenge was designing a scalable UI architecture without predefined design references while ensuring seamless integration with AI-driven backend workflows. Maintaining clean state management across multiple API-driven modules required careful planning and centralized Redux architecture.",
      outcome:
        "Delivered a structured and scalable recruitment management interface that automated candidate engagement workflows and improved overall hiring process efficiency.",
    },
  },
  {
    id: 3,
    title: "Tamarind Astra",
    description:
      "Public-facing company website with responsive UI and optimized performance.",
    image: "/image2.avif",
    tech: ["Next.js", "Tailwind", "SEO"],
    live: "#",
    github: "#",
    details: {
      overview: "A modern business website designed to showcase services.",
      role: "Frontend Developer",
      features: ["Responsive UI", "SEO optimization"],
      challenges: "Maintaining consistency across devices.",
      outcome: "Improved engagement and load speed.",
    },
  },
  {
    id: 4,
    title: "SeasonIndia - Premium Women's Fashion E-commerce",
    description:
      "A premium women's fashion e-commerce platform offering a wide range of high-quality and designer clothing collections with rich visual presentation.",
    image: "/seasons_india.png",
    tech: [
      "Angular 16",
      "Angular Material",
      "SASS",
      "JavaScript",
      "HTML",
      "Flexbox",
    ],
    live: "https://www.seasonsindia.com/",
    github: "#",
    details: {
      overview:
        "SeasonIndia is a high-end women's fashion e-commerce website focused on delivering rich visual experience and premium product presentation. The platform showcases multiple clothing categories with high-resolution imagery and a smooth shopping experience. My role involved frontend development, UI enhancements, performance optimization, and implementation of new business modules across both user and admin panels.",
      role: "Frontend Developer responsible for UI design enhancements, performance optimization, feature implementation, and admin-side module development.",
      features: [
        "Designed and developed a new landing page with improved UI/UX experience.",
        "Resolved multiple UI-related and responsive design bugs across the platform.",
        "Implemented video integration using Firework (https://fireworktv.com/about-us) for interactive product video uploads.",
        "Fixed multiple functional and UI bugs on the Shop page.",
        "Developed new pages including Track Order, Contact, Blog, Media Coverage, and Shipping & Returns.",
        "Created Admin-side modules including Order Detail Module, Track Order Module, Product Detail Management module and Admin Login with proper authentication.",
      ],
      infrastructure: [
        "CDN Optimization",
        "Image Performance Optimization",
        "Production Deployment",
      ],
      challenges:
        "The platform heavily relied on high-resolution images (10MB-15MB each), which significantly impacted performance and loading speed. To maintain image richness while optimizing performance, I implemented a CDN-based image delivery solution. This ensured faster loading times without compromising visual quality. Additionally, I resolved multiple complex responsive design issues across devices.",
      outcome:
        "Improved page performance and loading speed, enhanced overall UI consistency, resolved major responsiveness issues, and delivered multiple business-critical modules across both user and admin panels.",
    },
  },
  {
    id: 5,
    title: "Lead Detector",
    description:
      "Public-facing company website with responsive UI and optimized performance.",
    image: "/image2.avif",
    tech: ["Next.js", "Tailwind", "SEO"],
    live: "#",
    github: "#",
    details: {
      overview: "A modern business website designed to showcase services.",
      role: "Frontend Developer",
      features: ["Responsive UI", "SEO optimization"],
      challenges: "Maintaining consistency across devices.",
      outcome: "Improved engagement and load speed.",
    },
  },
  {
    id: 6,
    title: "Minute Pages",
    description:
      "Public-facing company website with responsive UI and optimized performance.",
    image: "/image2.avif",
    tech: ["Next.js", "Tailwind", "SEO"],
    live: "#",
    github: "#",
    details: {
      overview: "A modern business website designed to showcase services.",
      role: "Frontend Developer",
      features: ["Responsive UI", "SEO optimization"],
      challenges: "Maintaining consistency across devices.",
      outcome: "Improved engagement and load speed.",
    },
  },
  {
    id: 7,
    title: "UniSellerG",
    description:
      "Public-facing company website with responsive UI and optimized performance.",
    image: "/image2.avif",
    tech: ["Next.js", "Tailwind", "SEO"],
    live: "#",
    github: "#",
    details: {
      overview: "A modern business website designed to showcase services.",
      role: "Frontend Developer",
      features: ["Responsive UI", "SEO optimization"],
      challenges: "Maintaining consistency across devices.",
      outcome: "Improved engagement and load speed.",
    },
  },
];
