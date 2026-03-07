import { Project } from "@/types";

export const PROJECTS_DETAILS: Project[] = [
  {
    id: 1,
    title: "Student Management Portal",
    description:
      "Internal CRM application used to manage customers, leads, and analytics.",
    image: "/image1.avif",
    tech: [
      "React",
      "Axios",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
    ],

    live: "#",
    github: "#",
    details: {
      overview:
        "The Student Management Portal is an internal learning platform designed to help students access course content and track their learning journey. Students can view lectures, attend special sessions, and explore the academic section to see all topics covered in their course. The platform also includes a Learning Management System (LMS) where students can study theory concepts and solve quizzes related to specific topics and subtopics. In addition, students can take aptitude tests, raise doubts through the support section, and track their overall learning progress.",
      role: "Frontend Developer",
      features: [
        "Set up the entire project and theme configuration from scratch.",
        "Designed the UI independently based on the application data and functionality requirements.",
        "Used Axios to integrate and fetch data from REST APIs.",
        "Structured the application with a scalable architecture and created reusable components for better maintainability.",
        "Implemented multiple role-based panels such as Student, Super Admin, Admin, and Academic Admin with different access levels.",
        "Built a customized TipTap editor and integrated the Monaco Code Editor so students can write and practice code directly in the platform.",
        "Ensured the application is fully responsive and works smoothly across Desktop, Laptop, and Mobile devices.",
      ],
      challenges: "Handled large forms and optimized dashboard performance.",
      outcome: "Improved productivity and reduced manual work.",
    },
  },
  {
    id: 2,
    title: "HR Agent - AI Assisted Recruitment Platform",
    description:
      "An internal recruitment platform that helps automate candidate engagement and simplifies the hiring process using AI-driven workflows.",
    image: "/hr-agent.png",
    tech: [
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind",
      "HTML",
      "CSS",
      "REST APIs",
    ],
    live: "#",
    github: "#",
    details: {
      overview:
        "HR Agent is an internal recruitment platform designed to automate parts of the hiring process. Recruiters can upload candidate resumes through the company portal, and the system uses AI-driven workflows to automatically initiate candidate calls and check their interest. Based on the AI interaction results, interested candidates can then be shortlisted and scheduled for further recruitment calls. The goal of the platform is to make the hiring process faster and more efficient.",

      role: "Frontend Developer responsible for building the user interface and integrating APIs for the recruitment workflow.",

      features: [
        "Designed and developed the complete UI for the platform and planned the overall interface structure.",
        "Built responsive interfaces so the platform works smoothly across different screen sizes.",
        "Used Redux Toolkit to manage application state and keep data handling organized and predictable.",
        "Integrated multiple APIs to fetch and update recruitment data within the application.",
        "Created reusable components to keep the codebase clean and easier to maintain.",
      ],

      challenges:
        "One of the main challenges was designing the UI structure without predefined design references while ensuring it worked smoothly with the AI-based backend workflows. Managing multiple API responses and keeping the application state organized also required careful planning with Redux.",

      outcome:
        "The platform successfully delivered a structured recruitment dashboard that helps automate candidate engagement and makes the hiring workflow more efficient.",
    },
  },
  {
    id: 3,
    title: "Tamarind Astra",
    description:
      "A travel and hotel booking platform where users can explore hotels, check room availability, read reviews, and make reservations easily.",
    image: "/image2.avif",
    tech: ["Angular18", "PrimeNG", "TypeScript", "SCSS", "JavaScript", "HTML"],
    live: "#",
    github: "#",
    details: {
      overview:
        "Tamarind Astra travel and hotel booking Platform that help to user easily find hotel and book hotel for thier trip, User can search the hotel and it can check the availability of the room, view the start rating and custom review and user can directly book the room through the platform. The system also allows users to manage their bookings, check schedules, and cancel reservations if needed. The goal of the platform is to make hotel discovery and booking simple, fast, and convenient.",
      role: "Software Developer",
      features: [
        "Configured and applied the PrimeNG 18 theme across the application for a consistent UI.",
        "Built multiple pages and forms using Angular Reactive Forms with proper validation.",
        "Created a centralized JSON configuration file to manage form structures across 40+ modules, making the forms easier to maintain and reuse.",
        "Fixed and resolved various frontend UI and functionality bugs across different modules.",
        "Made the application responsive so it works smoothly on Desktop, Tablet, and Mobile devices.",
      ],

      challenges:
        "Since the project had more than 40 modules with multiple forms, maintaining consistency and managing form structures across all modules was challenging.",

      outcome:
        "By creating a centralized JSON-based form structure and fixing UI issues, the application became easier to maintain and provided a more consistent user experience across all devices.",
    },
  },
  {
    id: 4,
    title: "SeasonIndia - Premium Women's Fashion E-commerce",
    description:
      "An e-commerce platform for premium women's fashion that showcases designer collections with rich visuals and a smooth shopping experience.",
    image: "/seasons_india.png",
    tech: [
      "Angular 16",
      "Angular Material",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "HTML",
      "Flexbox",
    ],
    live: "https://www.seasonsindia.com/",
    github: "#",
    details: {
      overview:
        "SeasonIndia is a premium women's fashion e-commerce website focused on providing a visually rich shopping experience. The platform showcases multiple clothing categories with high-quality images and a smooth browsing experience. As a Frontend Developer, I worked on improving the UI, fixing responsiveness issues, optimizing performance, and building new pages and modules for both the user side and the admin panel.",

      role: "Frontend Developer – worked on UI improvements, feature development, bug fixing, performance optimization, and admin panel modules.",

      features: [
        "Designed and developed a new landing page to improve the overall UI and user experience.",
        "Fixed multiple UI and responsiveness issues across the website.",
        "Integrated product videos using Firework to enhance product presentation.",
        "Resolved UI and functional issues on the Shop page.",
        "Developed several new pages such as Track Order, Contact, Blog, Media Coverage, and Shipping & Returns.",
        "Built admin-side modules including Order Detail Management, Track Order Module, Product Detail Management, and Admin Login with authentication.",
      ],

      infrastructure: [
        "CDN-based image delivery",
        "Image performance optimization",
        "Production deployment support",
      ],

      challenges:
        "One of the main challenges was handling high-resolution product images (around 10–15MB each), which affected page load performance. To solve this, I implemented a CDN-based solution for image delivery so that images could load faster without reducing their quality. I also worked on fixing several complex responsiveness issues across different devices.",

      outcome:
        "The improvements resulted in better page loading performance, a more consistent UI across devices, and the successful delivery of several important user-facing pages and admin modules.",
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
    tech: ["Next.js", "Tailwind", "TypeScript", "SEO"],
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
    title: "ROCKETSKIP",
    description: "AI-powered skip tracing platform for real estate investors",
    image: "/RocketSkip.png",
    tech: [
      "Angular 16",
      "Angular Material 16",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "HTML",
    ],
    live: "https://app.rocketskip.ai/",
    github: "#",
    details: {
      overview:
        "RocketSkip is an AI-powered skip tracing platform used by real estate investors to find property owner contact information. Users can upload a list of properties, and the system uses AI and data validation techniques to match accurate phone numbers and email addresses. It also provides lead scoring, email verification, and phone validation to help users identify high-quality leads and improve marketing results.",

      role: "Frontend Developer",

      features: [
        "Set up the frontend project architecture from scratch using Angular 16.",
        "Developed UI components using Angular Material and customized them with SCSS to match the product design.",
        "Implemented Reactive Forms with proper validation and error handling.",
        "Integrated REST APIs to fetch and display dynamic data across different modules.",
        "Built multiple application modules and implemented Lazy Loading to improve performance and scalability.",
        "Developed responsive layouts for Desktop, Tablet, and Mobile devices (optimized for 380px screens).",
        "Created reusable UI components to maintain consistency across the application.",
      ],

      challenges:
        "Customizing Angular Material components to match the product UI design while maintaining responsiveness across different screen sizes.",

      outcome:
        "Delivered a scalable and responsive frontend application with modular architecture and lazy loading, improving overall performance and user experience.",
    },
  },
  {
    id: 8,
    title: "UniSellerG",
    description: "E-commerce seller management dashboard",
    image: "/Unisellergy1.png",
    tech: [
      "Angular 18",
      "Angular Material",
      "TypeScript",
      "JavaScript",
      "Flexbox",
      "SCSS",
      "HTML",
    ],
    live: "https://app.unisellergy.in/dashboard",
    github: "#",
    details: {
      overview:
        "This platform is an e-commerce management system designed for online sellers. It allows sellers to manage their orders, inventory, payments, and shipping from a centralized dashboard. The platform also supports multi-channel integration with marketplaces like Amazon and Flipkart. This helps sellers automate operations, reduce manual work, and efficiently manage their business.",

      role: "Frontend Developer",

      features: [
        "Developed UI components using Angular 18 and Angular Material with a custom SCSS theme.",
        "Implemented Reactive Forms with proper form validation and error handling.",
        "Integrated multiple REST APIs to fetch and display dynamic data on different dashboard pages.",
        "Structured the application using modular architecture and implemented Lazy Loading for performance optimization.",
        "Built responsive layouts for Desktop, Tablet, and Mobile devices (optimized for 380px screens).",
        "Created reusable UI components to maintain consistency across the application.",
      ],

      challenges:
        "Handling dynamic API data and ensuring proper form validation across multiple modules while maintaining a responsive UI for different screen sizes.",

      outcome:
        "Successfully delivered a responsive seller dashboard with improved performance using lazy loading and modular architecture, making the platform easier to use for managing orders, inventory, and operations.",
    },
  },
];
